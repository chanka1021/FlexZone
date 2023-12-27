import React from 'react'
import '../styles/GymMembers.css'
import { useState } from 'react';


function GymMembers() {
    const members = [
        {
            name: "John Doe",
            image: "https://placekitten.com/50/50", // Replace with actual image URL
            activePlan: "Premium",
            leftDuration: "30 days"
        },
        {
            name: "Jane Doe",
            image: "https://placekitten.com/50/51", // Replace with actual image URL
            activePlan: "Basic",
            leftDuration: "15 days"
        }
        ,
        {
            name: "Jane Doe",
            image: "https://placekitten.com/50/51", // Replace with actual image URL
            activePlan: "Basic",
            leftDuration: "15 days"
        }
    ];


    const [searchNom, setSearchNom] = useState('');
    const filteredMembers = members.filter(member =>
        member.name.toLowerCase().includes(searchNom.toLowerCase())
    );

    return (
        <div className='GymMembersContainer'>
            <span>
                <h1>Members de Club</h1>
                <div>
                    rechereche :       <input
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
                        <th>Active Plan</th>
                        <th>Reste</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredMembers.map((member, index) => (
                        <tr key={index} className="member-row">
                            <td><img src={member.image} alt={`${member.name}'s picture`} className="member-image" /></td>
                            <td>{member.name}</td>
                            <td>{member.activePlan}</td>
                            <td>{member.leftDuration}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};



export default GymMembers