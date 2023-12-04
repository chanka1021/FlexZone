import React from 'react'
import '../components/styles/ClubCard.css'

function ClubCard(props) {
  return (
    <div className='ClubCardContainer'>
        <img className='' src={props.img} />
        <p className='ClubTitle'>{props.title}</p>
        <p>{props.desc}</p>
        <p className='suite'>Suit</p>

    </div>
  )
}

export default ClubCard