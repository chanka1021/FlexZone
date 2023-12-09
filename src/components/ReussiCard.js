import React from 'react'
import img from '../assets/reussiPhoto.png'
import  './styles/ReussiteCard.css'

function ReussiCard() {
  return (
    <div className='ReussiCardContainer'>
      <img src={img} />
      <div className='reussInfos'>
        <div className='RInfos1'>
          <p>Madison Froning</p>
          <p>⭐/5</p>
        </div>
        <div className='Rinfos 2'>
        <p>Specialisations :</p> 
        <p> Crossfit Expoort, Nutrition & Rehab</p>
        <div className='Social'></div>
        </div>

      </div>
    </div>
  )
}

export default ReussiCard