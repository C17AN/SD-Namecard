import styled from "styled-components";

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
