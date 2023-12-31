import React, { useState } from "react";
import "../components/styles/AddClub-PerksForm.css";

const perksData = [
  { id: 1, name: "WiFi", value: "wifi" },
  { id: 2, name: "Football", value: "football" },
  { id: 3, name: "Espace Cardio", value: "espace_cardio" },
  { id: 5, name: "Basketball", value: "basketball" },
  { id: 6, name: "MMA", value: "mma" },
  { id: 7, name: "Piscine", value: "piscine" },
  { id: 8, name: "Salle de Cours", value: "salle_de_cours" },
  { id: 9, name: "Restaurant", value: "restaurant" },
  { id: 10, name: "Espace Femmes", value: "espace_femmes" },
];

const ClubPerksForm = ({ selectedPerks, setSelectedPerks }) => {
  const togglePerk = (perk) => {
    const existingIndex = selectedPerks.findIndex((p) => p.id === perk.id);

    if (existingIndex !== -1) {
      setSelectedPerks((prevPerks) =>
        prevPerks.filter((p) => p.id !== perk.id)
      );
    } else {
      setSelectedPerks((prevPerks) => [...prevPerks, perk]);
    }
  };

  return (
    <div className="perks-picker-container">
      <h2>Choose Your Perks</h2>
      <div className="perks-list">
        <div key="4" className="perk-item selected">
          Espace Musculation
        </div>
        {perksData.map((perk) => (
          <div
            key={perk.id}
            className={`perk-item ${
              selectedPerks.some((p) => p.id === perk.id) && "selected"
            }`}
            onClick={() => togglePerk(perk)}
          >
            {perk.name}
          </div>
        ))}
      </div>
      <div className="selected-perks">
        <strong>Selected Perks:</strong>
        <ul>
          {selectedPerks.map((perk) => (
            <li key={perk.id}>
              {perk.name} 
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClubPerksForm;
