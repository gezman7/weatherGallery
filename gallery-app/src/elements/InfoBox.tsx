import React, { useState } from "react";
import weatherData from "../types/weatherData";

type InfoBox = {
  weatherElement: weatherData;
};
const InfoBox: React.FC<InfoBox> = props => {
  const { weatherElement } = props;
  const { id, temprature, city, main, description } = weatherElement;

  return (
    <ul className="infoBox">
      <li>
        {Math.trunc(temprature)}
        {"\u00b0"}
      </li>
      <li>{city}</li>
      <li>{description}</li>
    </ul>
  );
};

export default InfoBox;
