import React from 'react'
import styled from 'styled-components'
import ImageCarousel from '../ImageCarousel'
import '../styles/GymInfo.css'
function GymInfo() {


  const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  
  `

  const ImgContainer = styled.div`
  height: 400px;
  width: 500px;
  margin: auto;
`
const Infos = styled.div`
display: flex;
gap: 40px;
`

  return (

    <Container>
      <h1>Votre Club : </h1>
      <ImgContainer>
        <ImageCarousel />
      </ImgContainer>  
      <Infos>
      <span>    
          <p>nom du club : <a>Club x</a></p>
          <p>surface: <a>Club x</a></p>
          <p>capacity : <a>Club x</a></p>
        </span>
        <span>  <p>telephone: <a>Club x</a></p>
          <p>adress: <a>Club x</a></p>
          <p>email: <a>Club x</a></p></span>
      </Infos>

    </Container>
  )
}

export default GymInfo