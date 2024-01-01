import React, { useEffect, useContext, useState } from "react";
import "../styles/UsersGym.css";
import img from "../../assets/gym.jpg";
import { UserContext } from "../../Util/userContext";
import axios from "axios";
import { NavLink } from "react-router-dom";
import moment from "moment";
function UsersGym() {
  const { token, user, setUser } = useContext(UserContext);
  const [subs, setSubs] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    axios
      .get("/subscription", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.status === 200) {
          setSubs(response.data.data);
          setReady(true);
          console.log(response.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);



  const calculateEndDate = (createdAt, duration) => {
    const startDate = moment(createdAt);
    const endDate = startDate.clone().add(duration, 'months');
    return endDate.format('YYYY-MM-DD');
  };

  if (ready) {
    return (
      <>
        {subs && subs.length > 0 && (
          <ul className="sub-list-container">
            {subs.map((sub) => (
              <li
                key={sub.id}
                className={sub.payed === 1 ? "payed" : "unpayed"}
              >
                <div className="sub-info-container">
                  <span>Club Name : {sub.gym_name}</span>
                 <span>Duration : {sub.duration} months</span>
                 {sub.payed === 1 && (
                    <span>
                      End Date : {calculateEndDate(sub.created_at,sub.duration)}
                    </span>
                  )}
                </div>
                
                <div className="action-sub-container">
                  <span>
                    {sub.payed === 0 ? (
                      <NavLink> Pay </NavLink>
                    ) : (
                      <NavLink> Re-New </NavLink>
                    )}
                  </span>

                  {sub.payed === 1 && (
                    <span>
                      <NavLink>Cancel</NavLink>{" "}
                    </span>
                  )}

                  <span>
                    <NavLink to={"/club/" + sub.gym_id}>Visit club </NavLink>
                  </span>
                </div>
              </li>
            ))}
          </ul>
          // <div className="UsersGymContainer">
          //   <div className="pc-actions">
          //     <div>renouveler l'abonnement </div>
          //     <a>annuler l'abonnement </a>
          //   </div>
          //   <div className="UG-infos">
          //     <div className="UG-title">
          //       Nom du club : <a>fc barcelona </a>
          //     </div>
          //     <div className="UG-sub-infos">
          //       <div className="UG-devider">
          //         <div>
          //           Dernier paiment : <a>12/12/1212</a>
          //         </div>{" "}
          //         <div>
          //           sub end : <a>12/12/1212</a>{" "}
          //         </div>
          //       </div>
          //       <div className="UG-devider">
          //         <div>
          //           date de inscription : <a>12/12/1212</a>
          //         </div>{" "}
          //         <div>
          //           plan choisi : <a>premium</a>{" "}
          //         </div>
          //       </div>
          //     </div>
          //     <p className="P-downloadapp">
          //       Telecharger notre application <a>ici</a> pour acceder a votre QR
          //       code
          //     </p>
          //   </div>
          // </div>
        )}

        {subs && subs.length === 0 && <div>Subscribe to a gym</div>}
      </>
    );
  } else {
    return <h1>Loading ...</h1>;
  }
}

export default UsersGym;
