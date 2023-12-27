import React from 'react'
import SectionTitle from '../components/SectionTitle'
import img from '../assets/sec2.jpg'
import ClubsContainer from '../components/ClubsContainer'


function Clubs() {
  return (
    <>
      <SectionTitle title="Clubs"  img={img}/>
      <ClubsContainer/>
    </>
  )
}

export default Clubs