import React from 'react'
import './styles/SectionTitle.css'

function HomeTitle(props) {
    return (
        <div className='HomeSectionTitle' style={{ backgroundImage: `url(${props.img})` }}>
            <p className='SectionTitle'>Faites briller votre salle de sport <br/> sur la carte</p>
            <div className='btns'>
            <div className='MainBtn'>Commencer</div>
            <span/>
            <div className='SecBtn'>A proppos</div>
            </div>
        </div>
    )
}

export default HomeTitle