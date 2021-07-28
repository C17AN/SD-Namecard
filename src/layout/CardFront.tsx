import styled from "styled-components";

import profile from "../images/profile/profile.png";
import GitHubIcon from "../images/sns/github.svg";
import NotionIcon from "../images/sns/notion.svg";
import FacebookIcon from "../images/sns/facebook.svg";
import InstagramIcon from "../images/sns/instagram.svg";
import LinkedInIcon from "../images/sns/linkedin.svg";
import HomePageIcon from "../images/sns/homepage.svg";

import config from "../config";
import TechItem from "../component/TechItem";
import SnsItem from "../component/SnsItem";

const CardFront = () => {
  const { name, company, description, sns, techStack } = config;
  console.log(sns);
  return (
    <Container>
      <UpperLayerContainer>
        <Ribbon />
        <PhotoContainer src={profile} />
        <BioContainer>
          <Name>{name}</Name>
          <Company>{company}</Company>
          <Description>{description}</Description>
          <SNSList>
            {Object.keys(sns).map((serviceName) => (
              <SnsItem key={serviceName} name={serviceName} link={sns[serviceName]} />
            ))}
          </SNSList>
        </BioContainer>
      </UpperLayerContainer>
      <LowerLayerContainer>
        <TechStackLabel>기술 스택</TechStackLabel>
        <TechStackList>
          {Object.keys(techStack).map((item: string) => (
            <TechItem key={item} tech={item} level={techStack[item]} />
          ))}
        </TechStackList>
      </LowerLayerContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;
  border: none;
  @media screen and (max-width: 768px) {
    padding: 12px;
    overflow-y: hidden;
  }
`;

// 카드 상단 영역
const UpperLayerContainer = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Ribbon = styled.span`
  display: span;
  position: absolute;
  top: 0;
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

const PhotoContainer = styled.img`
  /* border: 1px solid red; */
  width: 128px;
  height: 128px;
  border-radius: 50%;
  box-shadow: 2px 2px 5px 1px #ababab;
  background: url(${(props) => props.src});

  @media screen and (max-width: 768px) {
    & {
      width: 96px;
      height: 96px;
      align-self: center;
    }
  }
`;

const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0 0 2rem;
  @media screen and (max-width: 768px) {
    margin: 20px 0;
  }
`;

const Name = styled.h2`
  /* border: 1px solid red; */
  @media screen and (max-width: 768px) {
    & {
      font-size: 20px;
    }
  }
`;

const Company = styled.h4`
  /* border: 1px solid red; */
  color: #666;
  @media screen and (max-width: 768px) {
    & {
      font-size: 16px;
    }
  }
`;

const Description = styled.h5`
  /* border: 1px solid red; */
  margin-top: 0.5rem;
  font-weight: 400;
  @media screen and (max-width: 768px) {
    & {
      font-size: 12px;
    }
  }
`;

const SNSList = styled.ul`
  display: flex;
  margin-top: 15px;
  height: 100%;
  a {
    opacity: transparent;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
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

const HomePage = styled.img<{ icon?: string }>`
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
  @media screen and (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const TechStackLabel = styled.h3``;

const TechStackList = styled.ul`
  margin-top: 12px;
  width: 100%;
  @media screen and (max-width: 768px) {
    overflow-x: scroll;
  }
  display: flex;
`;

export default CardFront;
