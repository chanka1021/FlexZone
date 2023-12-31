import React from 'react';
import "../styles/Gymplans.css";
import { useState } from 'react';

function Gymplans() {
  const plans = [
    {
      name: 'Plan 1',
      description: 'Basic plan for beginners',
      price: '$20/month',
    },
    {
      name: 'Plan 2',
      description: 'Intermediate plan with additional features',
      price: '$30/month',
    },
    {
      name: 'Plan 3',
      description: 'Advanced plan with personalized training',
      price: '$50/month',
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState(plans[0]);

  const handlePlanChange = (event) => {
    const selectedPlanIndex = event.target.value;
    setSelectedPlan(plans[selectedPlanIndex]);
  };

  const handleNameChange = (event) => {
    setSelectedPlan({ ...selectedPlan, name: event.target.value });
  };

  const handleDescriptionChange = (event) => {
    setSelectedPlan({ ...selectedPlan, description: event.target.value });
  };

  const handlePriceChange = (event) => {
    setSelectedPlan({ ...selectedPlan, price: event.target.value });
  };

  return (
    <div className="GymPlans">
      <h1>Votre plans</h1>

      <div>
        <label>Sélectionnez le plan:</label>
        <select value={plans.indexOf(selectedPlan)} onChange={handlePlanChange}>
          {plans.map((plan, index) => (
            <option key={index} value={index}>
              {plan.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Nom de plan:</label>
        <input type="text" value={selectedPlan.name} onChange={handleNameChange} />

        <label> Description de plan :</label>
        <textarea
          value={selectedPlan.description}
          onChange={handleDescriptionChange}
        />
        <label>Prix de plan:</label>
        <input type="text" value={selectedPlan.price} onChange={handlePriceChange} />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default Gymplans;
