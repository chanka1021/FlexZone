import React from "react";
import "./styles/PartnersSection.css";
import GlobaleTitle from "./GlobaleTitle";
import ClubCard from "./ClubCard";
import gym from "../assets/gym.jpg"
function PartnersSection() {
  return (
    <div className="PartnersSection">
      <div className="row">
        <GlobaleTitle t1="ENTRAÎNEMENTS" t2="Nos Partenaires" />
        <div>
          <div className="MainBtn"> Voir tout</div>
        </div>
      </div>
      <div className="CardsContainer">
      <ClubCard img={gym} title="Club Avanoix" desc="Lorem ipsum aventur exrag gtra gwoo"/>
      <ClubCard img={gym} title="Club Avanoix" desc="Lorem ipsum aventur exrag gtra gwoo"/>
      <ClubCard img={gym} title="Club Avanoix" desc="Lorem ipsum aventur exrag gtra gwoo"/>
      <ClubCard img={gym} title="Club Avanoix" desc="Lorem ipsum aventur exrag gtra gwoo"/>
      </div>
      

    </div>
  );
}

export default PartnersSection;
