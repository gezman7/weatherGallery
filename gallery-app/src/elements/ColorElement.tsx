import React, { useState } from "react";

type ColorsPal = {
  color: string;
};
const ColorElement: React.FC<ColorsPal> = props => {
  const { color } = props;
  console.log(color);

  const colorStyle = {
    backgroundColor: color
  };
  return <div className="colorElement" style={colorStyle}></div>;
};

export default ColorElement;
