import React from 'react'
import './styles/SectionTitle.css'



function SectionTitle(props) {

    
  return (
    <div className= 'SectionContainer' style={{backgroundImage: `url(${props.img})` }}>
       <p className='SectionTitle'>{props.title}  </p> 
    </div>
  )
}

export default SectionTitle