import React from 'react'
import {Navbar} from '../components/Navbar'
import SectionTitle from '../components/SectionTitle'
import img from '../assets/sec1.jpg'
import HomeTitle from '../components/HomeTitle'
import GlobaleTitle from '../components/GlobaleTitle'
import PartnersSection from '../components/PartnersSection'
import AboutSection from '../components/AboutSection'

function Home() {
  return (
    <>
     <HomeTitle img={img}/>
     <PartnersSection/>
     <AboutSection/>
    </>
  )
}

export default Home