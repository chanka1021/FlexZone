import React from "react";
import "./styles/Footer.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsArrowUpCircle } from "react-icons/bs";

import ico from "../assets/Icon.png"
function Footer() {
  return (
    <div className="Footer">
      <div className="FooterL">
        <div className="logo">
          <img src={ico} />
          
            Flexzone
       
        </div>
        <p>Transformez-vous, à votre rythme, avec nous</p>
        <div className="contactInfos">
          <p className="subTitle">Call :</p>
          <p>0655998877</p>
          <p className="subTitle">Mail :</p>
          <p>contact@flexzone.com</p>
        </div>
      </div>
      <div className="FooterR">
        <p>Newsletter</p>
        <input placeholder="Entrer votre email " className="SubscribeInput" />
        <div className="emailSub"></div>
        <div className="SubBtn"> Subscribe</div>
        <div className="socialMedia">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
        <div className="Devider">
          <hr />

        </div>
      </div>
    </div>
  );
}

export default Footer;
