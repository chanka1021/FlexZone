import React from 'react'
import '../components/styles/ClubCard.css'
import {Link } from "react-router-dom"
function ClubCard(props) {
  return (
    <div className='ClubCardContainer'>
        <img className='' src={'http://localhost:8000/images/gymImgs/'+props.img} />
        <p className='ClubTitle'>{props.title}</p>
        <p>{props.desc}...</p>
        <p className='suite'><Link to={'/clubs/'+props.id}>Voir la Suite</Link></p>

    </div>
  )
}

export default ClubCard