import React,{useEffect,useState} from "react";
import "./styles/PartnersSection.css";
import GlobaleTitle from "./GlobaleTitle";
import ClubCard from "./ClubCard";
import gym from "../assets/gym.jpg"
import axios from "axios"
function PartnersSection() {
  const [gyms,setGyms] = useState([]);
    useEffect(()=>{
        const FetchData = () => {
            axios.get('/gym').then((response) => {
                setGyms(response.data.data.slice(0,3))
                console.log(response.data)
            });
          };
     
            FetchData();
          
       
    },[])
  return (
    <div className="PartnersSection">
      <div className="row">
        <GlobaleTitle t1="ENTRAÎNEMENTS" t2="Nos Partenaires" />
        <div>
          <div className="MainBtn"> Voir tout</div>
        </div>
      </div>
      <div className="CardsContainer">
        {gyms?.map(gym=>{
          return  <ClubCard img={gym.images[0]} title={gym.name} desc="Lorem ipsum aventur exrag gtra gwoo"/>
        })}
     
      </div>
      

    </div>
  );
}

export default PartnersSection;
