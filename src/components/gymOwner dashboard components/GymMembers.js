import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../Util/userContext";
import "../styles/GymMembers.css";

function GymMembers() {
  const [ready, setReady] = useState(false);
  const [subs, setSubs] = useState([]);
  const { token } = useContext(UserContext);

  const members = [
    {
      name: "John Doe",
      image: "https://placekitten.com/50/50", // Replace with actual image URL
      activePlan: "Premium",
      leftDuration: "30 days",
    },
    {
      name: "Jane Doe",
      image: "https://placekitten.com/50/51", // Replace with actual image URL
      activePlan: "Basic",
      leftDuration: "15 days",
    },
    {
      name: "Jane Doe",
      image: "https://placekitten.com/50/51", // Replace with actual image URL
      activePlan: "Basic",
      leftDuration: "15 days",
    },
  ];

  // const filteredMembers = members.filter(member =>
  //     member.name.toLowerCase().includes(searchNom.toLowerCase())
  // );

  const [searchNom, setSearchNom] = useState("");
  const [filteredMembers, setFilteredMembers] = useState([]);
  useEffect(() => {
    if (searchNom == "") setFilteredMembers(subs);
    setFilteredMembers(subs.filter((sub) => sub.user_id === searchNom));
  }, [searchNom, setSearchNom]);

  useEffect(() => {
    axios
      .get("/subscription", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.status === 200) {
          setSubs(response.data.data);
          setFilteredMembers(response.data.data);
          setReady(true);
        }
      })
      .catch((err) => {

        
        if (err.response.status > 200) {
          console.log(JSON.stringify(err.response.data.message));
        }
      });
  }, [ready,token]);

  if( subs && subs.length===0){
    return (<div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "400px",
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
          No Subs Were Found
        </h1>
      </div>)
          
  }

  if (ready) {
    return (
      <div className="GymMembersContainer">
        <span>
          <h1>Members de Club</h1>
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
        {subs && subs.length > 0 && (
          <table className="members-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Nom</th>
                <th>Active Plan</th>
                <th>Reste</th>
              </tr>
            </thead>
            <tbody>
              {subs.map((member, index) => (
                        <tr key={index} className="member-row">
                            {/* <td><img src={member.image} alt={`${member.name}'s picture`} className="member-image" /></td>
                            <td>{member.name}</td>
                            <td>{member.activePlan}</td>
                            <td>{member.leftDuration}</td> */}
                            ok
                        </tr>
                    ))}
            </tbody>
          </table>
        )}

       
      </div>
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

export default GymMembers;
