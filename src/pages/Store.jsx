import React from 'react'
import SectionTitle from '../components/SectionTitle'
import img from '../assets/sec2.jpg'
import '../components/styles/Store.css'
import ClubProducts from '../components/ClubProducts'

function Store() {
  return (
   <>
    <SectionTitle title="E-botique" img={img}/>
    <div className='StoreContainer'>
      <ClubProducts/>
      <ClubProducts/>
      <ClubProducts/>

    </div>
  </>
  )
}

export default Store