import React from 'react'
import { Mylink } from "../exports";


function ProductCard(props) {
  console.log(props,"dddd")
  return (
   <Mylink to={'/product/'+props.Id}>
    <div className='PCardContainer'>
        <img src={props.img} />
        <div className='P-infos'>
            <div className='P-name'>{props.name}</div>
            <a className='P-price'>{props.price}</a>
        </div>
    </div>
   </Mylink>
  )
}

export default ProductCard