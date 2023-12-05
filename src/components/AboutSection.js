import React from 'react'
import "../components/styles/AboutSection.css"
import GlobaleTitle from "./GlobaleTitle";
import contentIMG1 from '../assets/aboutContent.jpg'
import contentIMG2 from '../assets/aboutContent2.png'
import aboutbg from '../assets/aboutbg.png'


function AboutSection() {
  return (
    <div className='AboutContainer'>
      <div className='AboutL'>
        <GlobaleTitle t1="Á propos" t2="Votre gym , notre expertisele duo gagnant" />
        <p className='AboutDesc'>Trouvez votre salle de sport  ideale ou faites la promotion de votre salle de sport</p>
        <div className='ContentContainer'>
          <div className='AboutContent'>
            <div className='Content1'>
              <p>Trouves des salles pres de chez vous</p>
              <p> Localisez facilement des salles à proximité de votre emplacement</p>
            </div>
            <div className='Content2'>
              <img src={contentIMG1} />
            </div>

          </div>
          <div className='AboutContent'>
            <div className='Content2'>
              <img src={contentIMG2} />
            </div>
            <div className='Content1'>
              <p>Promoter votre gym</p>
              <p> Boostez la visibilité de votre salle de sport avec une promotion exceptionnelle !</p>
            </div>

          </div>
        </div>
      </div>
      <div className='AboutR'>
        <div className='AboutBgContainer' style={{ backgroundImage: `url(${aboutbg})` }}>
          <div className='AboutContactBtn'>
          Contactez-nous
          </div>
        </div>
      </div>
    </div>

  )
}

export default AboutSection