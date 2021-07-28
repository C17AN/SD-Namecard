import { useState } from "react";
import styled from "styled-components";
import Card from "./component/Card";
import config from "./config";

function App() {
  const { theme } = config;
  const [background, setBackground] = useState("");
  import(`./images/background/${theme}.svg`).then((module) => {
    const { default: theme } = module;
    setBackground(theme);
  });

  return (
    <AppContainer theme={background}>
      <Card></Card>
    </AppContainer>
  );
}

const AppContainer = styled.div<{ theme: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: url(${(props) => props.theme}), linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default App;
