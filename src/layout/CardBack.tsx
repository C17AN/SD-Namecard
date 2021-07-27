import React, { ReactChild } from "react";
import styled from "styled-components";
import Slider from "@farbenmeer/react-spring-slider";

import profile from "../images/profile/profile.png";
import GitHubIcon from "../images/sns/github.svg";
import NotionIcon from "../images/sns/notion.svg";
import FacebookIcon from "../images/sns/facebook.svg";
import InstagramIcon from "../images/sns/instagram.svg";
import LinkedInIcon from "../images/sns/linkedin.svg";
import ReactItem from "../component/TechStack/ReactItem";
import NodeItem from "../component/TechStack/NodeItem";

const CardBack = () => {
  return (
    <Container>
      <LeftLayerContainer>
        <h3>경력</h3>
      </LeftLayerContainer>
      <RightLayerContainer>
        <h3>회사</h3>
      </RightLayerContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100%;
  padding: 2rem;
`;

// 카드 왼쪽 영역
const LeftLayerContainer = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  border-right: 1px solid #cdcdcd;
`;

// 카드 오른쪽 영역
const RightLayerContainer = styled.div`
  display: flex;
  margin-left: 2rem;
  flex: 1;
`;

export default CardBack;
