import React, { useState } from 'react'
import '../components/styles/Club.css'
import { CgGym } from "react-icons/cg";
import { FaRegClock } from "react-icons/fa";
import { TbHomeQuestion } from "react-icons/tb";
import ClubAdress from '../components/ClubAdress';
import ClubInfos from '../components/ClubInfos';
import Clubhoraires from '../components/ClubHoraires';
import { PiSoccerBall, PiPersonSimpleRun, PiBasketball } from "react-icons/pi";
import { GrUserFemale ,GrFormNext ,GrFormPrevious  } from "react-icons/gr";
import { GiBoxingGlove } from "react-icons/gi";
import { MdOutlinePool } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { VscDebugRerun } from "react-icons/vsc";
import { FaWifi } from "react-icons/fa";
import { IoMdRestaurant } from "react-icons/io";
import { IoCaretBackCircleOutline, IoCaretForwardCircleOutline } from "react-icons/io5";

import img from '../assets/gym.jpg'
import img2 from '../assets/sec1.jpg'


function Club() {
  const [selectedInfo, setSelectedinfo] = useState(1)

  const perks = [
    { name: "football", icon: PiSoccerBall },
    { name: " espace cardio", icon: PiPersonSimpleRun },
    { name: "espace femmes", icon: GrUserFemale },
    { name: "espace musculation", icon: CgGym },
    { name: "basketball", icon: PiBasketball },
    { name: "mma", icon: GiBoxingGlove },
    { name: "piscine", icon: MdOutlinePool },
    { name: "salle de cours", icon: SiGoogleclassroom },
    { name: "salle spining", icon: VscDebugRerun },
    { name: "wifi", icon: FaWifi },
    { name: "restaurant", icon: IoMdRestaurant },
  ]
  const images = [img, img2, img, img2]

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
    <div className='ClubMainContainer'>
      <div className='infos'>
        <div className='Clubinfos'>
          <div className='radios'>
            <input type="radio" name="gyminfo" id="infos" defaultChecked onClick={() => setSelectedinfo(1)} />
            <label htmlFor="infos">
              <i ><CgGym /></i>
              <span>Club 1</span>
            </label>
            <input type="radio" name="gyminfo" id="horaire" onClick={() => setSelectedinfo(2)} />
            <label htmlFor="horaire">
              <i ><FaRegClock /></i>
              <span>Horaires d’ouverture</span>
            </label>
            <input type="radio" name="gyminfo" id="adresse" onClick={() => setSelectedinfo(3)} />
            <label htmlFor="adresse">
              <i><TbHomeQuestion /></i>
              <span>Addresse et contact</span>
            </label>
          </div>
          <div className='InfosCardContainer'>
            {selectedInfo === 1 && <ClubInfos />}
            {selectedInfo === 2 && <Clubhoraires />}
            {selectedInfo === 3 && <ClubAdress />}
          </div>

        </div>
        <div className='photos'>
          <div className='ClubGallery'><img
            className="slider-image"
            src={images[currentImageIndex]}
          />
          </div>
          <div className="button-container">
            <div onClick={handlePrevious}><IoCaretBackCircleOutline/></div>
            <div onClick={handleNext}><IoCaretForwardCircleOutline/></div>
          </div>
        </div>

      </div>
      <div className='Btn'>Adhérer maintenant</div>
      <div className='perks'>
        {perks.map((perk) => (
          <div className='perkcard'>
            <a><perk.icon /></a>
            {perk.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Club