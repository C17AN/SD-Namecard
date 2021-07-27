import React from "react";
import styled from "styled-components";
import profile from "../images/profile/profile.png";

const Card = () => {
  return (
    <CardContainer>
      <UpperLayerContainer>
        <PhotoContainer src={profile} />
        <BioContainer>
          <Name>Chan-Min, Kim</Name>
          <Company>한국항공대학교 소프트웨어학과</Company>
          <Description>무한한 호기심과 함께 성장하는 개발자가 되고자 합니다.</Description>
          <SNSContainer></SNSContainer>
        </BioContainer>
      </UpperLayerContainer>
      <LowerLayerContainer>
        <TechStackLabel>기술 스택</TechStackLabel>
      </LowerLayerContainer>
    </CardContainer>
  );
};

// 카드 상단 영역
const UpperLayerContainer = styled.div`
  display: flex;
  margin: 2rem 0 0 2rem;
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
`;

const Company = styled.h4`
  /* border: 1px solid red; */
  color: #666;
`;

const SNSContainer = styled.li`
  display: flex;
  border: 1px solid red;
  margin-top: 12px;
  height: 100%;
`;

// 카드 하단 영역
const LowerLayerContainer = styled.div`
  display: flex;
  margin: 2rem 0 0 2rem;
`;

const TechStackLabel = styled.h3``;

const CardContainer = styled.div`
  border: 1px solid transparent;
  border-radius: 12px;
  width: 80vw;
  height: 50vh;
  max-width: 600px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 3px 3px 5px #cdcdcd;
`;

export default Card;
