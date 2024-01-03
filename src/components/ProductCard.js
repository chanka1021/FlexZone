import React from "react";
import { Mylink } from "../exports";
import styled from "styled-components";

function ProductCard(props) {
  const Container = styled.div`
    width: 270px;
    display: flex;
    flex-direction: column;
    box-shadow: 20px 20px 73px #9f9f9f, -20px -20px 73px #ffffff;
    height: fit-content;
  `;
  const Img = styled.img`
    width: 100%;
    height: 270px;
  `;
  const Infos = styled.div`
    background-color: #1b2129;
    color: #fff;
  `;
  const Name = styled.div`
    padding: 5px;
    border-bottom: 1px solid grey;
    text-align: center;
  `;
  const Price = styled.div`
    color: #86FF33;
    text-align: center;
    padding: 15px 0px;
  `;
  return (
    <Mylink to={"/product/" + props.Id}>
      <Container>
        <Img src={props.img} />
        <Infos>
          <Name>{props.name}</Name>
          <Price>{parseInt(props.price)} Mad</Price>
        </Infos>
      </Container>
    </Mylink>
  );
}

export default ProductCard;
