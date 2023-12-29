import React from "react";
import { NavLink } from "react-router-dom";
import "../components/styles/subscribe-form.css"; // Import your CSS file

function SubscribeForm() {
  return (
    <div className="subscribe-container">
      <h1>Abonnement</h1>
      <form>
        <div className="form-group">
          <label>Your Name:</label>
          <span>Abdessamad Belmadani</span>
        </div>
        <div className="form-group">
          <label>Your Email:</label>
          <span>Abdessamad@Belmadani.com</span>
        </div>
        <div className="form-group">
          <label>Club Name:</label>
          <span>
            <NavLink to={"/clubs/1"}>FlexZone</NavLink>
          </span>
        </div>
        <div className="form-group">
          <label>Club Address:</label>
          <span>Martil Morocco</span>
        </div>
        <div className="form-group">
          <label>Plan d'Abonnement:</label>
          <span>
            <NavLink to={"/clubs/1#planes"}>Premium</NavLink>
          </span>
        </div>
        <div className="form-group">
          <label>Durée - en mois:</label>
          <input type="number" min={1} required />
        </div>
        <button>Valider</button>
      </form>
      <div className="payment-section">
        <h2>Payment</h2>
        <div className="form-group">
          <label>Your Card Info:</label>
          <input type="text" placeholder="Card Number" />
        </div>
        <div className="form-group">
          <label>Expiry Date:</label>
          <input type="text" placeholder="MM/YY" />
        </div>
        <div className="form-group">
          <label>CVC:</label>
          <input type="text" placeholder="CVC" />
        </div>
        <button>Submit Payment</button>
      </div>
    </div>
  );
}

export default SubscribeForm;
