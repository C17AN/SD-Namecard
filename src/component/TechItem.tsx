import React, { useState } from "react";
import styled from "styled-components";
// import Icon from "../images/techs/react.svg";

const TechItem = ({ tech, level }: { tech: string; level: number }) => {
  const [icon, setIcon] = useState("");
  const [color, setColor] = useState("");
  import(`../images/techs/${tech}.svg`).then((module) => {
    const { default: icon } = module;
    setIcon(icon);
  });
  import(`../constant/logoColor`).then((module) => {
    const { default: colors } = module;
    setColor(colors[tech]);
  });
  return (
    <Container color={color}>
      {icon && <TechLogo src={icon} fill={color} />}
      <TechMastery>
        {[...Array(level)].map((_, idx) => (
          <Mastery key={idx} color={color} />
        ))}
      </TechMastery>
    </Container>
  );
};

const Container = styled.li<{ color: string }>`
  list-style: none;
  transition: 0.2s ease-in-out;
  border: 1px solid rgba(90, 90, 90, 0.2);
  border-radius: 12px 12px 8px 8px;
  margin-right: 16px;
  margin-bottom: 10px;
  min-width: 60px;
  height: 96px;
  cursor: pointer;
  box-shadow: 1px 2px 5px 2px #cdcdcd;
  &:hover {
    transition: 0.3s ease-in-out;
    background-color: white;
    box-shadow: 0px 2px 10px 5px ${(props) => props.color};
  }
`;
const TechLogo = styled.img<{ fill: string }>`
  margin: 8px;
  fill: ${(props) => props.fill};
`;

const TechMastery = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-right: transparent;
  border-left: transparent;
  height: 20px;
`;

const Mastery = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  background-color: ${(props) => props.color};
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
