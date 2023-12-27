import React,{useEffect,useState} from "react";
import "./styles/PartnersSection.css";
import GlobaleTitle from "./GlobaleTitle";
import ClubCard from "./ClubCard";
import gym from "../assets/gym.jpg"
import axios from "axios"
import { Link } from "react-router-dom";
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
          <Link to={"/clubs"}>  <div className="MainBtn"> Voir tout</div></Link>
        
        </div>
      </div>
      <div className="CardsContainer">
        {gyms?.map(gym=>{
          return <ClubCard key={gym.id} id={gym.id} img={gym.images[0]} title={gym.name} desc={gym.description.slice(0,100)} />

        })}
     
      </div>
      

    </div>
  );
}

export default PartnersSection;
