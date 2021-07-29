import { useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Card from "./component/Card";
import config from "./config";

function App() {
  const { name, theme } = config;
  const [background, setBackground] = useState("");
  import(`./images/background/${theme}.svg`).then((module) => {
    const { default: theme } = module;
    setBackground(theme);
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{name}'s namecard</title>
      </Helmet>
      <AppContainer theme={background}>
        <Card />
      </AppContainer>
    </>
  );
}

const AppContainer = styled.div<{ theme: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: url(${(props) => props.theme});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default App;
