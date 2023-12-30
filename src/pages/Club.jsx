import React, { useState, useEffect } from "react";
import "../components/styles/Club.css";
import { CgGym } from "react-icons/cg";
import { FaHeart, FaRegClock, FaStar } from "react-icons/fa";
import { TbHomeQuestion } from "react-icons/tb";
import ClubAdress from "../components/ClubAdress";
import ClubInfos from "../components/ClubInfos";
import Clubhoraires from "../components/ClubHoraires";
import { PiSoccerBall, PiPersonSimpleRun, PiBasketball } from "react-icons/pi";
import { GrUserFemale, GrFormNext, GrFormPrevious } from "react-icons/gr";
import { GiBoxingGlove } from "react-icons/gi";
import { MdDiamond, MdOutlinePool } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { VscDebugRerun } from "react-icons/vsc";
import { FaWifi } from "react-icons/fa";
import { IoMdRestaurant } from "react-icons/io";
import {
  IoCaretBackCircleOutline,
  IoCaretForwardCircleOutline,
} from "react-icons/io5";
import axios from "axios";
import { useParams,NavLink,useNavigate } from "react-router-dom";
import img from "../assets/gym.jpg";
import img2 from "../assets/sec1.jpg";

function Club() {
  const [selectedInfo, setSelectedinfo] = useState(1);

  const { id } = useParams();
  const [club, setClub] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    if (!id) {
      return;
    }
    try {
      axios.get(`/gym/${id}`).then((response) => {
        if(response.status===200){
          setClub(response.data.data);
      }else{
        alert('something wrong happends')
      }
        console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  const PERKS = [
    { name: "football", sqlNotation: "football", icon: <PiSoccerBall /> },
    {
      name: " espace cardio",
      sqlNotation: "espace_cardio",
      icon: <PiPersonSimpleRun />,
    },
    {
      name: "espace femmes",
      sqlNotation: "espace_femmes",
      icon: <GrUserFemale />,
    },
    {
      name: "espace musculation",
      sqlNotation: "espace_musculation",
      icon: <CgGym />,
    },
    { name: "basketball", sqlNotation: "basketball", icon: <PiBasketball /> },
    { name: "mma", sqlNotation: "mma", icon: <GiBoxingGlove /> },
    { name: "piscine", sqlNotation: "piscine", icon: <MdOutlinePool /> },
    {
      name: "salle de cours",
      sqlNotation: "salle_de_cours",
      icon: <SiGoogleclassroom />,
    },
    {
      name: "salle spining",
      sqlNotation: "salle_spining",
      icon: <VscDebugRerun />,
    },
    { name: "wifi", sqlNotation: "wifi", icon: <FaWifi /> },
    { name: "restaurant", sqlNotation: "restaurant", icon: <IoMdRestaurant /> },
  ];
  //  const images = [img, img2, img, img2];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % club.images.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + club.images.length) % club.images.length
    );
  };

  const planCategorie = [
    { icon: <FaHeart className="Heart" />, title: "Basic" },
    { icon: <FaStar className="star" />, title: "Standard" },
    { icon: <MdDiamond className="diamond" />, title: "Premium" },
  ];

  const handleDirectToSubscribe=(id)=>{
    localStorage.removeItem('clubToSub')
    localStorage.setItem("clubToSub",JSON.stringify(id))

    navigate("/subscribe")
  }
  return (
    <>
      {club ? (
        <div className="ClubMainContainer">
          <div className="infos">
            <div className="Clubinfos">
              <div className="radios">
                <input
                  type="radio"
                  name="gyminfo"
                  id="infos"
                  defaultChecked
                  onClick={() => setSelectedinfo(1)}
                />
                <label htmlFor="infos">
                  <i>
                    <CgGym />
                  </i>
                  <span>Infos</span>
                </label>
                <input
                  type="radio"
                  name="gyminfo"
                  id="horaire"
                  onClick={() => setSelectedinfo(2)}
                />
                <label htmlFor="horaire">
                  <i>
                    <FaRegClock />
                  </i>
                  <span>Horaires d’ouverture</span>
                </label>
                <input
                  type="radio"
                  name="gyminfo"
                  id="adresse"
                  onClick={() => setSelectedinfo(3)}
                />
                <label htmlFor="adresse">
                  <i>
                    <TbHomeQuestion />
                  </i>
                  <span>Addresse et contact</span>
                </label>
              </div>
              <div className="InfosCardContainer">
                {selectedInfo === 1 && <ClubInfos club={club} />}
                {selectedInfo === 2 && <Clubhoraires />}
                {selectedInfo === 3 && <ClubAdress club={club} />}
              </div>
            </div>
            <div className="photos">
              <div className="ClubGallery">
                <img
                  className="slider-image"
                  src={
                    "http://localhost:8000/images/gymImgs/" +
                    club.images[currentImageIndex]
                  }
                />
              </div>
              <div className="button-container">
                <div onClick={handlePrevious}>
                  <IoCaretBackCircleOutline />
                </div>
                <div onClick={handleNext}>
                  <IoCaretForwardCircleOutline />
                </div>
              </div>
            </div>
          </div>
          <div className="Btn">Adhérer maintenant</div>
          <div className="perks">
            {Object.entries(club.perks).map(([key, value]) => {
              const { icon,name } = PERKS.find((perk) => perk.sqlNotation === key);
              return (
                <div className="perkcard" key={key}>
                  <a>{icon}</a>
                  {name}
                </div>
              );
            })}
          </div>
          <div className="plansContainer">
            {club.subsription_planes
              ?.sort((a, b) => a.price - b.price)
              .map((plan, index) => {
                return (
                  <div className="plan">
                    <div className="PlanTitle">
                      {planCategorie[index].icon}
                      <> {planCategorie[index].title}</>
                    </div>
                    <div className="PlanPrice">
                      {parseInt(plan.price)} MAD / month
                      <p>{plan.reduction}% Off pour les nouveaux</p>
                    </div>
                    <div className="PlanDesc">
                      <a>1 Semaines essaie gratuit</a>
                      <br />
                      {plan.description}
                      <div className="PlanBtn" onClick={()=>handleDirectToSubscribe(club.id)}>Commencer</div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        <h1>Loading ...</h1>
      )}
    </>
  );
}

export default Club;
