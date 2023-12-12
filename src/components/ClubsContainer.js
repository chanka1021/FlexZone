import React from 'react'
import ClubCard from './ClubCard';
import gym from "../assets/gym.jpg"
import './styles/Clubs.css'
import GlobaleTitle from "./GlobaleTitle";
import img from "../assets/sponsored.png"

function ClubsContainer() {
    const cardData = [
        { id: 1, title: 'Gym 1', content: 'Content for Gym 1', img: gym },
        { id: 2, title: 'Gym 2', content: 'Content for Gym 2', img: gym },
        { id: 3, title: 'Gym 3', content: 'Content for Gym 3', img: gym },
        { id: 4, title: 'Gym 4', content: 'Content for Gym 1', img: gym },
        { id: 5, title: 'Gym 5', content: 'Content for Gym 2', img: gym },
        { id: 6, title: 'Gym 6', content: 'Content for Gym 3', img: gym },
    ];

    return (
        <>
            <GlobaleTitle t1="Nos" t2="Partenaires"  center={true} />
            <div className="card-container">
                {cardData.map((card) => (
                    <ClubCard key={card.id} img={card.img} title={card.title} desc={card.content} />
                ))}
            </div>
            <div className='SponsoredGym' style={{ backgroundImage: `url(${img})` }}>
                    <p className='SgTitle'>Rejoin notre club</p>
                    <p className='SgDesc'>Rejoignez notre salle de sport et lancez-vous dans un voyage vers une vie plus saine et plus active ! Découvrez des installations de pointe, des plans de remise en forme personnalisés et une communauté solidaire. Vos objectifs de santé vous attendent - atteignons-les ensemble !</p>
                    <div className='JoinTbn'>Adhérer maintenant</div>
            </div>
        </>

    );
}

export default ClubsContainer