import React from 'react'
import './styles/Multiuse.css'

function Clubhoraires() {
  return (
    <div className='ClubInfosCard'>
      <h4>Horaires<a><br />d’ouverture</a></h4>
      <p>Tôt le matin ou encore le soir, pour atteindre vos objectifs, <a>xxxxx</a> est là pour vous et avec vous ! </p>
      <div className='Surface-horaires-adress'>
        <div>Lundi au Vendredi : :<a>de 7h à 22h</a></div>
        <div>Samedi :<a>de 9h à 20h</a></div>
        <div>Dimanche : :<a>de 9h à 18h</a></div>
      </div>
    </div>
  )
}

export default Clubhoraires