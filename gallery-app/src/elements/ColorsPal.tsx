import React, { useState } from "react";
import ColorElement from "./ColorElement";
import randomstring from "randomstring";
import ColorPalType from "../types/ColorPalType";

const ColorsPal: React.FC<ColorPalType> = props => {
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
