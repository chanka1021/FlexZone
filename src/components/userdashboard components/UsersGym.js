import React from "react";
import "../styles/UsersGym.css";
import img from "../../assets/gym.jpg";
function UsersGym() {
  return (
    <div className="UsersGymContainer">
      <div className="pc-actions">
        <img src={img} />
        <div>renouveler l'abonnement </div>
        <a>annuler l'abonnement </a>
      </div>
      <div className="UG-infos">
        <div className="UG-title">
          Nom du club : <a>fc barcelona </a>
        </div>
        <div className="UG-sub-infos">
          <div className="UG-devider">
          <div>Dernier paiment : <a>12/12/1212</a></div> <div>sub end : <a>12/12/1212</a> </div>
          </div>
          <div className="UG-devider">
            <div>date de inscription : <a>12/12/1212</a></div> <div>plan choisi : <a>premium</a> </div>
          </div>
        </div>
        <p className="P-downloadapp">Telecharger notre application <a>ici</a> pour acceder a votre QR code</p>
      </div>
    </div>
  );
}

export default UsersGym;
