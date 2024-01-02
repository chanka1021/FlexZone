import React, { useEffect, useContext, useState } from "react";
import "../styles/UsersGym.css";
import img from "../../assets/gym.jpg";
import { UserContext } from "../../Util/userContext";
import axios from "axios";
import { NavLink } from "react-router-dom";
import moment from "moment";
function UsersGym() {
  const { token } = useContext(UserContext);
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
  }, [token,ready]);



  const calculateEndDate = (createdAt, duration) => {
    const startDate = moment(createdAt);
    const endDate = startDate.clone().add(duration, 'months');
    return endDate.format('YYYY-MM-DD');
  };

  const handlePaySub =(subid)=>{
      if(!subid) return;
      if(!window.confirm("Paying your subscription "+subid+" ...")) return;

      axios.post('/subscription/pay/'+subid,{},{
        headers: { Authorization: `Bearer ${token}` },
      }).then(response=>{

        if(response.status===200){
          alert("subscription payed successfully")
          setReady(false);
        }

      }).catch(err=>{
        alert(JSON.stringify(err.response.data.message))
      })
     
  }

  const handleCancelSub =(subid)=>{
    if(!subid) return;
    if(!window.confirm("Canceling your subscription "+subid+" ...")) return;

    axios.post('/subscription/cancel/'+subid,{},{
      headers: { Authorization: `Bearer ${token}` },
    }).then(response=>{

      if(response.status===200){
        alert("subscription canceld successfully")
        setReady(false);
      }

    }).catch(err=>{
      alert(JSON.stringify(err.response.data.message))
    })
   
}

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
                      <b onClick={()=>handlePaySub(sub.id)} style={{color:"rgb(115, 218, 115)" , cursor:"pointer"}}> Pay </b>
                    ) : (
                      <NavLink> Re-New </NavLink>
                    )}
                  </span>

                  {sub.payed === 1 && (
                    <span>
                     <b onClick={()=>handleCancelSub(sub.id)} style={{color:"rgb(255, 72, 93)" , cursor:"pointer"}}> Cancel </b>
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

        {subs && subs.length === 0 && <div style={{display:"flex", alignItems:"center",justifyContent:"center",height:"100%"}}>

          <NavLink to={"/clubs"} style={{color:"white"}}>
            <h1>Subscribe to a gym</h1>
          </NavLink>
          </div>}
      </>
    );
  } else {
    return <div style={{display:"flex", alignItems:"center",justifyContent:"center",height:"100%"}}><h1>Loading ...</h1></div>;
  }
}

export default UsersGym;
