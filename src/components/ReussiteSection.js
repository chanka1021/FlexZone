import React from 'react'
import GlobaleTitle from "./GlobaleTitle";
import './styles/ReussiteSection.css'
import ReussiCard from './ReussiCard';
function ReussiteSection() {
  return (
    <div className='RsContainer'>
        <GlobaleTitle t1="histoires" t2="Nos réussites" />
        <div className='RsCardsContainer'>
        <ReussiCard/>
        <ReussiCard/>
        <ReussiCard/>

        </div>
    </div>
  )
}

export default ReussiteSection