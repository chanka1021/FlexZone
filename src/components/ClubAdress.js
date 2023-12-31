import React from 'react'
import './styles/Multiuse.css'

function ClubAdress(props) {
  return (
    <div className='ClubInfosCard'>
        <h4>Addresse<a><br />et contact</a></h4>
      <p>Proche et à l’écoute de nos sportifs, <a>xxx</a> est là pour répondre à tous vos besoins.</p>
      <div className='Surface-horaires-adress'>
        <div>Téléphone <a>{props.club.tel}</a></div>
        <div>Email <a>{props.club.email}</a></div>
        <div>Address <a>{props.club.address}</a></div>
      </div>
    </div>
  )
}

export default ClubAdress