import React from 'react'
import "../components/styles/AboutSection.css"
import gr from '../assets/gr.png'

function GoogleReviews() {
    return (
        <div className='GrContainer'>
            <div className='GrBox'>
                <div>01</div>
                <p>
                    Entraînement
                </p>
            </div>
            <div className='GrBox'>
                <div>02</div>
                <p>
                    Routine régulière
                </p>
            </div>
            <div className='GrBox'>
                <div>03</div>
                <p>
                    Des produits de qualité
                </p>
            </div>
            <img src={gr} />
        </div>
    )
}

export default GoogleReviews