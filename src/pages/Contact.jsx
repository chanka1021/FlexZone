import React from 'react'
import SectionTitle from '../components/SectionTitle'
import img from '../assets/sec2.jpg'
import ContactUs from '../components/ContactUs'

function Contact() {
  return (
    <>
      <SectionTitle title="Contact" img={img} />
      <ContactUs/>
    </>
  )
}

export default Contact