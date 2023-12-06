import React from 'react'
import img from '../assets/sec1.jpg'
import HomeTitle from '../components/HomeTitle'
import PartnersSection from '../components/PartnersSection'
import AboutSection from '../components/AboutSection'
import GoogleReviews from '../components/GoogleReviews'
import ReussiteSection from '../components/ReussiteSection'

function Home() {
  return (
    <>
     <HomeTitle img={img}/>
     <PartnersSection/>
     <AboutSection/>
     <GoogleReviews/>
     <ReussiteSection/>
    </>
  )
}

export default Home