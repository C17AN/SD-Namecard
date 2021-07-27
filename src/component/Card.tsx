import React, { ReactChild } from "react";
import styled from "styled-components";
import Slider from "@farbenmeer/react-spring-slider";
import { useMediaQuery } from "react-responsive";

import profile from "../images/profile/profile.png";
import GitHubIcon from "../images/sns/github.svg";
import NotionIcon from "../images/sns/notion.svg";
import FacebookIcon from "../images/sns/facebook.svg";
import InstagramIcon from "../images/sns/instagram.svg";
import LinkedInIcon from "../images/sns/linkedin.svg";
import ReactItem from "./TechStack/ReactItem";
import NodeItem from "./TechStack/NodeItem";
import CardFront from "../layout/CardFront";
import CardBack from "../layout/CardBack";

const Card = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <CardContainer>
      {isDesktopOrLaptop ? (
        <Slider>
          <CardFront />
          <CardBack />
        </Slider>
      ) : (
        <CardFront />
      )}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  border-radius: 12px;
  width: 80vw;
  height: 50vh;
  max-width: 600px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 3px 3px 5px #cdcdcd;
  @media screen and (max-width: 768px) {
    padding: 1rem;
    overflow-y: scroll;
  }
`;

export default Card;
