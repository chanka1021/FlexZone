import React from 'react'
import img from '../assets/sec1.jpg'
import img2 from '../assets/banner2.jpg'

import HomeTitle from '../components/HomeTitle'
import PartnersSection from '../components/PartnersSection'
import AboutSection from '../components/AboutSection'
import GoogleReviews from '../components/GoogleReviews'
import ReussiteSection from '../components/ReussiteSection'
import Plans from '../components/Plans'


function Home() {
  return (
    <>
     <HomeTitle img={img2}/>
     <PartnersSection/>
     <AboutSection/>
     <GoogleReviews/>
     <ReussiteSection/>
     <Plans/>
    </>
  )
}

export default Home