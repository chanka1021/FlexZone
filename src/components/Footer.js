import React from "react";
import "./styles/Footer.css";
import { CgGym } from "react-icons/cg";

function Footer() {
  return (
    <div className="Footer">
      <div className="FooterL">
        <div id="logo">
          <div className="roundedDiv">
            <CgGym />
          </div>
          Flexzone
        </div>
        <p>Faites briller votre salle de sport sur la carte </p>
        <div className="contactInfos">
          <p className="subTitle">Call :</p>
          <p>0655998877</p>
          <p className="subTitle">Mail :</p>
          <p>contact@flexzone.com</p>
        </div>
      </div>
      <div className="FooterR">
        <p>Newsletter</p>
        <input placeholder="Entrer votre email " className="SubscribeInput"/>
        <div className="emailSub"></div>
        <div className=""> Subscribe</div>
      </div>
    </div>
  );
}

export default Footer;
