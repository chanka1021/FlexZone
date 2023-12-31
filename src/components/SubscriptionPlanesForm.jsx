import React, { useState } from "react";

const subPlanCategories = ["Basic", "Standard", "Premium"];

function SubscriptionPlanesForm({ subscriptionPlans, setSubscriptionPlans }) {
  const [currentCategory, setCurrentCategory] = useState(subPlanCategories[0]);
  const [price, setPrice] = useState(50.0);
  const [duration, setDuration] = useState(100);
  const [reduction, setReduction] = useState(0);
  const [description, setDescription] = useState("");
  const [minPrice, setMinPrice] = useState(50.0);

  const handleAddPlan = (ev) => {
    if (subscriptionPlans.length === 3) return;
    ev.preventDefault();
    const newPlan = {
      name: currentCategory,
      price,
      duration,
      reduction,
      description,
    };

    setSubscriptionPlans((prevPlans) => [...prevPlans, newPlan]);

    // Update the price to the current price + 20
    const newPrice = parseFloat(price) + 20;
    setPrice(newPrice);

    // Set the minimum price for the next input
    setMinPrice(newPrice);

    // Move to the next category or show the result when all categories are added
    const nextIndex = subPlanCategories.indexOf(currentCategory) + 1;
    if (nextIndex < subPlanCategories.length) {
      setCurrentCategory(subPlanCategories[nextIndex]);
    }
  };

  return (
    <div className="subPlaneForm-container">
      <h3>{currentCategory} Plan</h3>
      <label>
        Prix - MAD/Mois:
        <input
          type="number"
          placeholder={`Prix pour le plan ${currentCategory}`}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          min={minPrice} // Set the minimum value dynamically
          required
        />
      </label>
      <label>
        Durée - en heures:
        <input
          type="number"
          placeholder={`Durée pour le plan ${currentCategory}`}
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          min={100}
          required
        />
      </label>
      <label>
        <textarea
          cols="50"
          rows="10"
          placeholder={`Description pour le plan ${currentCategory}`}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <label>
          Reduction - %:
          <input
            type="number"
            placeholder={`Reduction pout le plan ${currentCategory}`}
            value={reduction}
            onChange={(e) => setReduction(e.target.value)}
            min={0}
            max={90}
            required
          />
        </label>
      </label>
      {subscriptionPlans && subscriptionPlans.length < 3 && (
        <button onClick={handleAddPlan}>Add Plan</button>
      )}
    </div>
  );
}

export default SubscriptionPlanesForm;
