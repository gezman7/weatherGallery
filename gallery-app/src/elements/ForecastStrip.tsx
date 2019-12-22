import React from "react";
import ColorsPalType from "./ColorsPal";
import ColorsPal from "./ColorsPal";
import ColorPalType from "../types/ColorPalType";

import randomstring from "randomstring";

type ForecastStripType = {
  forecast: ColorPalType[];
};
const ForcastStrip: React.FC<ForecastStripType> = props => {
  const { forecast } = props;

  return (
    <span className="forecastPal">
      {forecast.map(colorsPal => {
        return (
          <ColorsPal key={randomstring.generate(15)} colors={colorsPal.colors}>
            {" "}
          </ColorsPal>
        );
      })}
    </span>
  );
};

export default ForcastStrip;
