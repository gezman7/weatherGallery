import React from "react";
import ColorPalType from "./ColorPalType";
import ForecastStripType from "./ForecastStripType";
//  /ColorsPalType";

type weatherData = {
  id: number;
  colors: string[];
  city: string;
  temprature: number;
  main: string;
  description: string;
  forecast: ForecastStripType;
};
export default weatherData;
