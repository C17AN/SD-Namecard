import styled from "styled-components";
// import Slider from "@farbenmeer/react-spring-slider";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";

import CardFront from "../layout/CardFront";
import CardBack from "../layout/CardBack";

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Card = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <CardContainer>
      <Ribbon />
      {/* {isDesktopOrLaptop ? (
        <Slider> */}
      <Slider {...settings}>
        <CardFront />
        <CardBack />
      </Slider>
      {/* </Slider>
      ) : (
        <CardFront />
      )} */}
    </CardContainer>
  );
};

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

const CardContainer = styled.div`
  border-radius: 12px;
  width: 80vw;
  height: 50vh;
  max-width: 600px;
  background-color: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 3px 3px 5px #cdcdcd;
  @media screen and (max-width: 768px) {
    padding: 1rem;
    overflow-y: scroll;
  }
`;

export default Card;
