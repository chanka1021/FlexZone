import React from 'react'
import './styles/Plans.css'
import { FaHeart } from "react-icons/fa";

function Plans() {
  return (
    <div className='plansSectionContainer'>
        <div className='PlansTitle'>
            <p className='T1'>Lister votre Club</p>
            <p className='T2'>etre partenaire</p>
            <p className='T1'>Choisir votre Program</p>
        </div>
        <div className='plansContainer'>
            <div className='plan'>
                <div className='PlanTitle' >                  
                     <FaHeart />
                    Basic 
                </div>
            </div>
            <div className='plan'>
                <div className='PlanTitle' >                  
                     <FaHeart />
                    Basic 
                </div>
                <div className='PlanPrice' >

                </div>
            </div>
        </div>
    </div>
  )
}

export default Plans