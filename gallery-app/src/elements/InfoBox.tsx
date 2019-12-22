import React, { useState } from "react";
import weatherData from "../types/weatherData";

type InfoBox = {
  weatherElement: weatherData;
};
const InfoBox: React.FC<InfoBox> = props => {
  const { weatherElement } = props;
  const { id, temprature, city, main, description } = weatherElement;

  return (
    <div>
      <ul className="infoBox">
        <li>
          {temprature}
          {"\u00b0"}
        </li>
        <li>{city}</li>
        {/* <li>{main}</li> */}
        <li>{description}</li>
      </ul>
    </div>
  );
};

export default InfoBox;
