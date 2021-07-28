import styled from "styled-components";
import { companyType } from "../types/configType";

const CareerItem = ({ careerInfo }: { careerInfo: companyType }) => {
  const { name, from, to, position } = careerInfo;

  return (
    <CareerContainer>
      <h2>{name}</h2>
      <Period>
        {from} ~ {to}
      </Period>
      <Position>{position}</Position>
    </CareerContainer>
  );
};

const CareerContainer = styled.li`
  list-style: none;
  margin-top: 12px;
  h2 {
    font-size: 1.05rem;
  }
`;

const Period = styled.div`
  font-size: 0.75rem;
  margin: 4px 0 2px 0;
`;

const Position = styled.div`
  font-weight: 600;
  font-size: 0.85rem;
  color: #888;
`;

export default CareerItem;
