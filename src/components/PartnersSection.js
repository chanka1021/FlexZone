import React, { useEffect, useState } from "react";
import GlobaleTitle from "./GlobaleTitle";
import ClubCard from "./ClubCard";
import axios from "axios";
import styled from "styled-components";
import { Mylink } from "../exports";

const Btn = styled.div`
  background-color: #1d2229;
  padding: 5px 10px;
  color: white;
`;

const Section = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: flex-start;
  margin: auto;
  margin-top: 200px;
  @media (max-width: 480px) {
    width: 95%;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 50px;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  @media screen and (min-width: 1920px) {
    width: 80%;
    margin: auto;
  }
  @media (max-width: 480px) {
    margin-top: 50px;
    flex-direction: column;
  }
`;

function PartnersSection() {
  const [gyms, setGyms] = useState([]);
  useEffect(() => {
    const FetchData = () => {
      axios.get("/gym").then((response) => {
        setGyms(response.data.data.slice(0, 3));
        console.log(response.data);
      });
    };
    FetchData();
  }, []);
  return (
    <Section>
      <Row>
        <GlobaleTitle t1="ENTRAÎNEMENTS" t2="Nos Partenaires" />
        <div>
          <Mylink to={"/clubs"}>
            {" "}
            <Btn> Voir tout</Btn>
          </Mylink>
        </div>
      </Row>
      <Cards>
        {gyms?.map((gym) => {
          return (
            <ClubCard
              key={gym.id}
              id={gym.id}
              img={gym.images[0]}
              title={gym.name}
              desc={gym.description.slice(0, 100)}
            />
          );
        })}
      </Cards>
    </Section>
  );
}

export default PartnersSection;
