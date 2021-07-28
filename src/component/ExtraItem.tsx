import styled from "styled-components";
import { extraType } from "../types/configType";

const ExtraItem = ({ extraInfo }: { extraInfo: extraType }) => {
  const { name, year, description } = extraInfo;
  return (
    <ExtraContainer>
      <Year>{year}</Year>
      <ExtraContent>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </ExtraContent>
    </ExtraContainer>
  );
};

const ExtraContainer = styled.li`
  list-style: none;
  display: flex;
  margin-top: 12px;
`;

const Year = styled.h3`
  font-size: 0.88rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 5px 8px;
  text-align: center;
  background-color: #828dca5e;
  border-radius: 12px;
  margin-right: 12px;
`;

const Name = styled.h3`
  display: inline-block;
  font-size: 0.88rem;
`;

const ExtraContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.p`
  font-size: 10px;
  margin-top: 3px;
  color: #666;
`;

export default ExtraItem;
