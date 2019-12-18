import React, { useState } from "react";
import ColorElement from "./ColorElement";
import randomstring from "randomstring";
type ColorsPal = {
  colors: string[];
};
const ColorsPal: React.FC<ColorsPal> = props => {
  const { colors } = props;

  return (
    <div className="colorPal">
      {colors.map(color => {
        return (
          <ColorElement
            key={randomstring.generate(16)}
            color={color}
          ></ColorElement>
        );
      })}
    </div>
  );
};

export default ColorsPal;
