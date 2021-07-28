import React, { useState } from "react";

interface Props {}

const SnsItem = ({ name, link }: { name: string; link: string }) => {
  const [icon, setIcon] = useState("");
  import(`../images/sns/${name}.svg`).then((module) => {
    const { default: Icon } = module;
    setIcon(Icon);
  });

  return (
    <a href={link} target="_blank">
      <img src={icon} alt={name} />
    </a>
  );
};

export default SnsItem;
