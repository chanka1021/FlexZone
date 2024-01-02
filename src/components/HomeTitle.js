import React from "react";
import "./styles/SectionTitle.css";
import { Mylink } from "../exports";



function HomeTitle({ img }) {
 return (
    <div className="HomeSectionTitle" style={{ backgroundImage: `url(${img})` }}>
      <p className="SectionTitle">
        Faites briller votre salle de sport <br /> sur la carte
      </p>
      <div className="Section-title-btns">
        <Mylink to={"/signin"}>
          <div className="MainBtn">Commencer</div>
        </Mylink>
        <span />
        <Mylink to={"/about"}>
          <div className="SecBtn">A proppos</div>
        </Mylink>
      </div>
    </div>
 );
}

export default HomeTitle;