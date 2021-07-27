import styled from "styled-components";
import Card from "./component/Card";

function App() {
  return (
    <AppContainer>
      <Card></Card>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default App;
