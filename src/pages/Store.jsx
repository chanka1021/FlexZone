import React, { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import img from "../assets/banner3.jpg";
import "../components/styles/Store.css";
import ClubProducts from "../components/ClubProducts";
import axios from "axios";
import styled from "styled-components";

function Store() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios.get("/product").then((response) => {
        setProducts(response.data.data);
      });
    };

    fetchData();
  }, []);

  // Organize products by gym
  const productsByGym = products.reduce((acc, product) => {
    const gymId = product.gym_id;
   // const Gym_name = product.gym_name;
    if (!acc[gymId]) {
      acc[gymId] = [];
    }
    acc[gymId].push(product);

    return acc;
  }, {});

const Container = styled.div`
    width: 70vw;
    padding: 0 150px;
    height: fit-content;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 100px;
`

  return (
    <>
      <SectionTitle title="E-botique" img={img} />
      <Container>
        {Object.entries(productsByGym).map(([gymId, gymProducts]) => (
          <ClubProducts key={gymId} ClubId={gymId} gymProducts={gymProducts}  />
          
        ))}
      </Container>
    </>
  );
}

export default Store;
