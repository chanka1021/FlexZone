import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../Util/userContext";
import "../styles/GymMembers.css";

import moment from "moment";

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
    if (searchNom =="") setFilteredMembers(subs);
    else setFilteredMembers(subs.filter((sub) => sub.user_id === +searchNom));
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

  const calculateEndDate = (createdAt, duration) => {
    const startDate = moment(createdAt);
    const endDate = startDate.clone().add(duration, 'months');
    return endDate.format('YYYY-MM-DD');
  };

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
              placeholder="Rechercher par id"
              value={searchNom}
              onChange={(e) => setSearchNom(e.target.value)}
              className="search-input"
            />
          </div>
        </span>
        {subs && subs.length > 0 && (
          <table className="members-table">
            <thead>
              <tr className="member-row">
                <th>user id</th>
                <th>Plane id</th>
                <th>Payed</th>
                <th>Duration</th>
                <th>End Date</th>
              </tr>
            </thead>
            <tbody>
            {filteredMembers.map((sub) => (
              <tr
              className="member-row"
                key={sub.id}
                style={sub.payed === 1 ? {color:"rgb(115, 218, 115)"} : {color:"rgb(255, 72, 93)"}}
              >
              
                  <td>{sub.user_id}</td>
                 <td>{sub.sub_plan_id}</td>
                 <td>{sub.payed==1?"Payed":"Not Payed"}</td>
                 <td>{sub.duration} {sub.duration==1?" Month":" Months"}</td>
                   <td>  {sub.payed === 1 ?(
                
                     <p>End Date : {calculateEndDate(sub.created_at,sub.duration)}</p> 
                    
                  ):" None "}</td>
           
                
               
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
