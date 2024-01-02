import React from 'react'
import ClubCard from './ClubCard';
import gym from "../assets/gym.jpg"
import './styles/Clubs.css'
import GlobaleTitle from "./GlobaleTitle";
import img from "../assets/sponsored.png"
import axios from 'axios'
import { useEffect,useState } from 'react';

function ClubsContainer() {
     const [gyms,setGyms] = useState([]);

    useEffect(()=>{
        const FetchData = () => {
            axios.get('/gym').then((response) => {
                setGyms(response.data.data)
                console.log(response.data)
            });
          };
     
            FetchData();
          
       
    },[])
    
    return (
        <>
            <GlobaleTitle t1="Nos" t2="Partenaires" center={true} />
            <div className="card-container">
                {gyms?.map((gym) => (
                    <ClubCard key={gym.id} id={gym.id} img={gym.images[0]} title={gym.name} desc={gym.description.slice(0,50)} />
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