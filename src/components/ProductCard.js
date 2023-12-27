import React from 'react'
import img from '../assets/gym.jpg'
function ProductCard() {
  return (
    <div className='PCardContainer'>
        <img src={img} />
        <div className='P-infos'>
            <div className='P-name'>MuscleTech Cell-Tech</div>
            <a className='P-price'>1300 MAD</a>
        </div>
    </div>
  )
}

export default ProductCard