import React from 'react'
import img from '../assets/reussiPhoto.png'
import  './styles/ReussiteCard.css'
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";

function ReussiCard() {
  return (
    <div className='ReussiCardContainer'>
      <img src={img} />
      <div className='reussInfos'>
        <div className='RInfos1'>
          <p>Madison Froning</p>
          <a>⭐/5</a>
        </div>
        <div className='Rinfos2'>
        <p>Specialisations :</p> 
        <a> Crossfit Expoort, Nutrition & Rehab</a>
        <div className='Social'>
        <IoLogoInstagram />
        <IoLogoFacebook />

        </div>
        </div>

      </div>
    </div>
  )
}

export default ReussiCard