import React from "react";
import "./styles/SectionTitle.css";
import { Link } from "react-router-dom";

function HomeTitle(props) {
  return (
    <div
      className="HomeSectionTitle"
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <p className="SectionTitle">
        Faites briller votre salle de sport <br /> sur la carte
      </p>
      <div className="btns">
        <Link to={"/clubs"}>
          {" "}
          <div className="MainBtn">Commencer</div>
        </Link>
        <span />
        <Link to={"/about"}>
          {" "}
          <div className="SecBtn">A proppos</div>
        </Link>
      </div>
    </div>
  );
}

export default HomeTitle;
