import React, { useState } from "react";
import styled from "styled-components";

const SnsItem = ({ name, link }: { name: string; link: string }) => {
  const [icon, setIcon] = useState("");
  console.log(name, link);
  import(`../images/sns/${name}.svg`).then((module) => {
    const { default: Icon } = module;
    setIcon(Icon);
  });

  return (
    <SNSContainer>
      <a href={link} target="_blank">
        <SNSIcon src={icon} alt={name} />
      </a>
    </SNSContainer>
  );
};

const SNSContainer = styled.li`
  list-style: none;
`;

const SNSIcon = styled.img<{ icon?: string }>`
  width: 32px;
  height: 32px;
  background: url(${(props) => props.icon});
  cursor: pointer;
  margin-right: 14px;
  transition: 0.2s ease-in-out;
  &:hover {
    transition: 0.2s ease-in-out;
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
  }
`;

export default SnsItem;
