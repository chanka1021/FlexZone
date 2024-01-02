import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const P1 = styled.div`
  color: #524ff5;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 8px;
  text-transform: uppercase;
`;

const P2 = styled.div`
  color: #1c2129;
  font-family: Inter;
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  margin-top :10px;
`;

function GlobaleTitle({ t1, t2, center }) {
  const titleContainerStyle = {
    alignItems: center ? "center" : "flex-start",
  };

  return (
    <TitleContainer style={titleContainerStyle}>
      <P1>{t1}</P1>
      <P2 className="p2">{t2}</P2>
    </TitleContainer>
  );
}

export default GlobaleTitle;
