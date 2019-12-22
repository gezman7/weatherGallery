import React, { useState, useEffect } from "react";
import SearchBar from "./elements/SearchBar";
import ColorsPal from "./elements/ColorsPal";
import weatherData from "./types/weatherData";
import ForecastStrip from "./elements/ForecastStrip";
import "./App.css";
import { dataFromSearch } from "./scripts/weatherCaller";
import InfoBox from "./elements/InfoBox";
import STARTING_CITY from "./types/defaultVals";

// import getPaintLinkFromColors from "./scripts/paint-get";

const App: React.FC = () => {
  //const [paint, changePaint] = useState("");

  const [weatherElement, updateWeather] = useState();

  useEffect(() => {
    handleSearchBar(STARTING_CITY);
  }, []);

  async function handleSearchBar(val: string) {
    const weatherReceiver: weatherData = await getWeather(val);
    updateWeather(weatherReceiver);

    //getPaintLinkFromColors(colors[0], colors[1], colors[2]);
  }

  async function getWeather(val: string) {
    const weatherReceiver: weatherData = await dataFromSearch(val);
    return weatherReceiver;
  }

  return (
    <div className="App">
      <SearchBar onChange={handleSearchBar} />
      {weatherElement ? (
        <div className="resultFrame">
          <div className="mainResult">
            <div className="paintFrame">
              <ColorsPal colors={weatherElement.colors}></ColorsPal>
            </div>
            <span>
              <InfoBox weatherElement={weatherElement}></InfoBox>{" "}
            </span>
          </div>
          <div className="forecastFrame">
            <span className="forecastHeader">The following days: </span>

            <div>
              <ForecastStrip
                forecast={weatherElement.forecast.forecast}
              ></ForecastStrip>
            </div>
          </div>
        </div>
      ) : (
        <div className="openMsg">Loading Weather Palette...</div>
      )}
    </div>
  );
};

export default App;
