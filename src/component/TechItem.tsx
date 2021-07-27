import React from "react";
import styled from "styled-components";
import Icon from "../images/techs/react.svg";

const TechItem = ({ level }: { level: number }) => {
  return (
    <Container>
      <TechLogo src={Icon}></TechLogo>
      <TechMastery>
        {[...Array(level)].map((_, idx) => (
          <Mastery key={idx} />
        ))}
      </TechMastery>
    </Container>
  );
};

const Container = styled.li`
  list-style: none;
  transition: 0.2s ease-in-out;
  border: 1px solid rgba(90, 90, 90, 0.2);
  border-radius: 12px 12px 8px 8px;
  margin-right: 16px;
  width: 60px;
  height: 96px;
  cursor: pointer;
  box-shadow: 1px 2px 5px 2px #cdcdcd;
  &:hover {
    transition: 0.2s ease-in-out;
    background-color: white;
  }
`;
const TechLogo = styled.img`
  margin: 8px;
`;

const TechMastery = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-right: transparent;
  border-left: transparent;
  height: 20px;
`;

// const Mastery = styled.div`
//   width: 60%;
//   height: 100%;
//   background-color: #61dafb;
// `;

const Mastery = styled.div`
  width: 12px;
  height: 12px;
  background-color: #61dafb;
  clip-path: polygon(
    50% 0%,
    69% 30%,
    98% 35%,
    72% 60%,
    79% 91%,
    51% 74%,
    21% 91%,
    28% 60%,
    2% 35%,
    34% 32%
  );
`;

export default TechItem;
