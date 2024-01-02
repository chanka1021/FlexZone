import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../Util/userContext";
function Subscirbers() {
  // eslint-disable-next-line no-sparse-arrays
  const [ready, setReady] = useState(false);
  const [gyms, setGyms] = useState([]);
  const { token } = useContext(UserContext);

  const [searchNom, setSearchNom] = useState("");
  const [filtrerGyms,setFiltrerGyms] = useState([]);
  useEffect(() => {
    if (searchNom == "") return;
    setFiltrerGyms(gyms.filter((gym) =>
      gym.name.toLowerCase().includes(searchNom.toLowerCase()))
    );
  }, [searchNom, setSearchNom]);

  useEffect(() => {
    axios
      .get("/gym")
      .then((response) => {
        if (response.status === 200) {
          setGyms(response.data.data);
          setFiltrerGyms(response.data.data)
          setReady(true);
        }
      })
      .catch((err) => {
        if (err.response.status > 200) {
          alert(JSON.stringify(err.response.data.message));
        }
      });
  }, [ready]);

  const handleDeleteClub = (clubId) => {
    if (!clubId) return;
    if (!window.confirm("Deletting this club " + clubId + " ...")) return;

    axios
      .delete("/gym/" + clubId, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.status === 200) {
          alert("subscription canceld successfully");
          setReady(false);
        }
      })
      .catch((err) => {
        alert(JSON.stringify(err.response.data.message));
      });
  };

  if (ready) {
    return (
      <>
        {" "}
        {gyms && (
          <>
            {gyms.length > 0 ? (
              <div className="GymMembersContainer">
                <span>
                  <h1>Clubs Lists</h1>
                  <div>
                    rechereche :{" "}
                    <input
                      type="text"
                      placeholder="Rechercher par nom"
                      value={searchNom}
                      onChange={(e) => setSearchNom(e.target.value)}
                      className="search-input"
                    />
                  </div>
                </span>
                <table className="members-table">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Nom</th>
                      <th>Email</th>
                      <th>Actions</th>
                      <th>Plus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtrerGyms.slice(0, 4).map((gym, index) => (
                      <tr key={index} className="member-row">
                        <td>
                          <img
                            src={
                              "http://localhost:8000/images/gymImgs/" +
                              gym.images[0]
                            }
                            alt={`${gym.name}'s picture`}
                            className="member-image"
                          />
                        </td>
                        <td>{gym.name}</td>
                        <td>{gym.email}</td>
                        <td
                          onClick={() => handleDeleteClub(gym.id)}
                          style={{
                            color: "rgb(255, 72, 93)",
                            cursor: "pointer",
                          }}
                        >
                          delete
                        </td>
                        <td>
                          <a
                            style={{ color: "white" }}
                            href={"/clubs/" + gym.id}
                          >
                            Voir Plus ...
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <h1
                  style={{
                    color: "white",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                  onClick={() => setReady(false)}
                >
                  No Gyms Were Found
                </h1>
              </div>
            )}
          </>
        )}
      </>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <h1>Loading ...</h1>
      </div>
    );
  }
}

export default Subscirbers;
