import React from 'react'

function GymProducts() {
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
                    <td>{member.price}</td>
                    <td> Edit</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
);
}

export default GymProducts