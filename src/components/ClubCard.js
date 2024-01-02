import React from "react";
import "../components/styles/ClubCard.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Mylink } from "../exports";

const CardContainer = styled.div`
  height: 460px;
  width: 330px;
  font-family: "Inter", sans-serif;
  transition: ease-in-out 0.1s;
  color: grey;
  &:hover {
    transform: scale(1.02);
    box-shadow: 20px 20px 64px #bebebe, -20px -20px 64px #ffffff;
    padding: 5px;
  }
`;
const Img = styled.img`
  height: 70%;
  width: 100%;
`;
const Title = styled.p`
  color: #1c2129;
  font-weight: 900;
`;

//<p className='suite'><Link to={'/clubs/'+props.id}>Voir la Suite</Link></p>

function ClubCard(props) {
  return (
    <Mylink to={"/clubs/" + props.id}>
      <CardContainer>
        <Img
          loading="lazy"
          className=""
          src={"http://localhost:8000/images/gymImgs/" + props.img}
        />
        <Title className="ClubTitle">{props.title}</Title>
        <p>{props.desc}...</p>
      </CardContainer>
    </Mylink>
  );
}

export default ClubCard;
