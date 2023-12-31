import React from 'react'
import './styles/Multiuse.css'

function ClubInfos(props) {
  return (
    <div className='ClubInfosCard'>
      <h4>CLUB<a><br/>{props.club.name}</a></h4>
      <p style={{textAlign:"justify"}}><a>{props.club.tel}</a> {props.club.description}</p>
      <div className='Surface-horaires-adress'>
        <div>Surface <a>{props.club.surface} m²</a></div>
        <div>Capacité <a>{props.club.capacity} personnes</a></div>

      </div>
    </div>
  )
}

export default ClubInfos