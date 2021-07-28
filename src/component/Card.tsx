import styled from "styled-components";
// import Slider from "@farbenmeer/react-spring-slider";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";

import CardFront from "../layout/CardFront";
import CardBack from "../layout/CardBack";

const Card = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const settings = {
    infinite: false,
    speed: 500,
    arrows: isMobile ? false : true,
    onSwipe: () => {
      const slick = document.querySelector(".slick-track") as HTMLElement;
      if (slick) {
        slick.style.height = "300px !important";
      }
    },
  };
  return (
    <CardContainer>
      <Ribbon />
      <Slider {...settings}>
        <CardFront />
        <CardBack />
      </Slider>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  border-radius: 12px;
  width: 80vw;
  height: 50vh;
  max-height: 350px;
  max-width: 600px;
  border: 3px solid #90abc461;
  background-color: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 3px 3px 5px #cdcdcd;
  @media screen and (max-width: 768px) {
    padding: 1rem;
    overflow-y: scroll;
  }
`;

const Ribbon = styled.span`
  display: block;
  position: fixed;
  top: 0;
  z-index: 100;
  border-radius: 2px 2px 0 0;
  right: 30px;
  height: 80px;
  width: 40px;
  background-color: #c5d8e9;
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 50% 80%, 0% 100%);
  @media screen and (max-width: 768px) {
    /* display: none; */
    right: 20px;
    width: 30px;
  }
`;

export default Card;
