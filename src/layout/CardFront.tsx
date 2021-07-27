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

const CardFront = () => {
  return (
    <Container>
      <UpperLayerContainer>
        <PhotoContainer src={profile} />
        <BioContainer>
          <Name>Chan-Min, Kim</Name>
          <Company>한국항공대학교 소프트웨어학과</Company>
          <Description>무한한 호기심과 함께 성장하는 개발자가 되고자 합니다.</Description>
          <SNSList>
            <Github
              src={GitHubIcon}
              alt="Github"
              onClick={() => window.history.pushState({}, "", "https://github.com/")}
            />
            <Notion
              src={NotionIcon}
              alt="Notion"
              onClick={() => window.history.pushState({}, "", "https://github.com/")}
            />
            <Facebook
              src={FacebookIcon}
              alt="Notion"
              onClick={() => window.history.pushState({}, "", "https://github.com/")}
            />
            <Instagram
              src={InstagramIcon}
              alt="Notion"
              onClick={() => window.history.pushState({}, "", "https://github.com/")}
            />
            <LinkedIn
              src={LinkedInIcon}
              alt="LinkedIn"
              onClick={() => window.history.pushState({}, "", "https://github.com/")}
            />
          </SNSList>
        </BioContainer>
      </UpperLayerContainer>
      <LowerLayerContainer>
        <TechStackLabel>기술 스택</TechStackLabel>
        <TechStackList>
          <ReactItem level={1} />
          <NodeItem level={2} />
          <ReactItem level={3} />
          <ReactItem level={3} />
        </TechStackList>
      </LowerLayerContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;
`;

// 카드 상단 영역
const UpperLayerContainer = styled.div`
  display: flex;
`;

const PhotoContainer = styled.img`
  /* border: 1px solid red; */
  width: 128px;
  height: 128px;
  border-radius: 50%;
  box-shadow: 2px 2px 5px 1px #ababab;
  background: url(${(props) => props.src});

  @media screen and (max-width: 768px) {
    & {
      width: 64px;
      height: 64px;
    }
  }
`;

const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0 0 2rem;
`;

const Name = styled.h2`
  /* border: 1px solid red; */
`;

const Description = styled.h5`
  /* border: 1px solid red; */
  margin-top: 0.5rem;
  font-weight: 400;
`;

const Company = styled.h4`
  /* border: 1px solid red; */
  color: #666;
`;

const SNSList = styled.li`
  display: flex;
  margin-top: 15px;
  height: 100%;
  a {
    opacity: transparent;
  }
`;

const Github = styled.img<{ icon?: string }>`
  width: 32px;
  height: 32px;
  background: url(${(props) => props.icon});
  cursor: pointer;
  margin-right: 14px;
  transition: 0.2s ease-in-out;

  &:hover {
    transition: 0.2s ease-in-out;
    filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.7));
  }
`;

const Notion = styled.img<{ icon?: string }>`
  width: 32px;
  height: 32px;
  background: url(${(props) => props.icon});
  cursor: pointer;
  margin-right: 14px;
  transition: 0.2s ease-in-out;

  &:hover {
    transition: 0.2s ease-in-out;
    filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.7));
  }
`;

const Facebook = styled.img<{ icon?: string }>`
  width: 32px;
  height: 32px;
  background: url(${(props) => props.icon});
  cursor: pointer;
  margin-right: 14px;
`;

const Instagram = styled.img<{ icon?: string }>`
  width: 32px;
  height: 32px;
  background: url(${(props) => props.icon});
  cursor: pointer;
  margin-right: 14px;
`;

const LinkedIn = styled.img<{ icon?: string }>`
  width: 32px;
  height: 32px;
  background: url(${(props) => props.icon});
  cursor: pointer;
  margin-right: 14px;
`;

// 카드 하단 영역
const LowerLayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const TechStackLabel = styled.h3``;

const TechStackList = styled.ul`
  margin-top: 12px;
  display: flex;
`;

export default CardFront;
