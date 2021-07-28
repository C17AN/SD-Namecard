import { useEffect } from "react";
import styled from "styled-components";
import CareerItem from "../component/CareerItem";
import ExtraItem from "../component/ExtraItem";
import config from "../config";
import { companyType, extraType } from "../types/configType";

const CardBack = () => {
  const { career, extra } = config;
  useEffect(() => {
    console.log("hi");
  }, []);
  return (
    <Container>
      <LeftLayerContainer>
        <h3>경력</h3>
        <CareerList>
          {career.map((careerData: companyType) => (
            <CareerItem careerInfo={careerData} />
          ))}
        </CareerList>
      </LeftLayerContainer>
      <RightLayerContainer>
        <h3>부가 정보</h3>
        <ExtraList>
          {extra.map((extraData: extraType) => (
            <ExtraItem extraInfo={extraData} />
          ))}
        </ExtraList>
      </RightLayerContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 2rem;
  max-height: 500px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0.5rem;
  }
`;

// 카드 왼쪽 영역
const LeftLayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 300px;
  flex: 1;
  border-right: 1px solid #cdcdcd;
  @media screen and (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid #cdcdcd;
    min-height: 0;
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const CareerList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  @media screen and (max-width: 768px) {
    margin: 4px 0 12px 0;
  }
`;

const ExtraList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  @media screen and (max-width: 768px) {
    margin: 4px 0 12px 0;
  }
`;

// 카드 오른쪽 영역
const RightLayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  flex: 1;
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

export default CardBack;
