import React, { useState } from "react";
import "../components/styles/AddClub-PerksForm.css"; // Make sure to create a PerksPicker.css file for styling

const perksData = [
    { id: 1, name: "WiFi" },
    { id: 2, name: "Football" },
    { id: 3, name: "Espace Cardio" },
    { id: 4, name: "Espace Musculation" },
    { id: 5, name: "Basketball" },
    { id: 6, name: "MMA" },
    { id: 7, name: "Piscine" },
    { id: 8, name: "Salle de Cours" },
    { id: 9, name: "Restaurant" },
    { id: 10, name: "Espace Femmes" },
  ];

const ClubPerksForm = ({selectedPerks,setSelectedPerks}) => {
  
  const togglePerk = (perkId) => {
    if (selectedPerks.includes(perkId)) {
      setSelectedPerks(selectedPerks.filter((id) => id !== perkId));
    } else {
      setSelectedPerks([...selectedPerks, perkId]);
    }
  };

  return (
    <div className="perks-picker-container">
      <h2>Choose Your Perks</h2>
      <div className="perks-list">
        {perksData.map((perk) => (
          <div
            key={perk.id}
            className={`perk-item ${selectedPerks.includes(perk.id) && "selected"}`}
            onClick={() => togglePerk(perk.id)}
          >
            {perk.name}
          </div>
        ))}
      </div>
      <div className="selected-perks">
        <strong>Selected Perks:</strong>
        <ul>
          {selectedPerks.map((perkId) => (
            <li key={perkId}>{perksData.find((perk) => perk.id === perkId)?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClubPerksForm;
