import React from 'react'
import {Navbar} from '../components/Navbar'
import SectionTitle from '../components/SectionTitle'
import img from '../assets/sec1.jpg'
import HomeTitle from '../components/HomeTitle'
import GlobaleTitle from '../components/GlobaleTitle'

function Home() {
  return (
    <>
     <HomeTitle img={img}/>
     <GlobaleTitle t1= "ENTRAÎNEMENTS" t2="Nos Partenaires"/>
    </>
  )
}

export default Home