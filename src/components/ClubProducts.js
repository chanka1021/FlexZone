import React from 'react'
import ProductCard from './ProductCard'

function ClubProducts() {
  return (
    <div className='ClubProducts'>
      <div className='ClubTitle-btn'>
        <a>Club XXXXXX prodtuits</a>
        <div className='seeAllProductsBTN'> Voir Tout </div>
      </div>
      <div className='ProductsCardContainer'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </div>
  )
}

export default ClubProducts