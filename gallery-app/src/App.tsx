import React, { useState } from "react";
import SearchBar from "./elements/SearchBar";
import ColorsPal from "./elements/ColorsPal";
import weatherData from "./types/weatherData";
import ForecastStrip from "./elements/ForecastStrip";
import "./App.css";
import { dataFromSearch } from "./scripts/weatherCaller";
import InfoBox from "./elements/InfoBox";
import ColorsPalType from "./types/ColorPalType";

// import getPaintLinkFromColors from "./scripts/paint-get";

//still a mess. need to handle the search bar, and render after every search.
const App: React.FC = () => {
  //const [paint, changePaint] = useState("");
  const startWeather: weatherData = {
    id: 0,
    colors: [],
    city: "dummy",
    temprature: 0,
    main: "dummy",
    description: "dummy",
    forecast: ([] as unknown) as ColorsPalType[]
  };

  const [colors, updateColors] = useState(["24221f", "4b5f6d", "feb41c"]);
  const [weatherElement, updateWeather] = useState(startWeather);

  function handleSearchBar(val: string) {
    let searchDebounce = setTimeout(async () => {
      const weatherReceiver: weatherData = await getWeather(val);
      updateWeather(weatherReceiver);
      updateColors(weatherReceiver.colors as []);
      //getPaintLinkFromColors(colors[0], colors[1], colors[2]);
    }, 2000);
  }

  async function getWeather(val: string) {
    const weatherReceiver: weatherData = await dataFromSearch(val);
    return weatherReceiver;
  }

  return (
    <div className="App">
      <SearchBar onChange={handleSearchBar} />
      {weatherElement.id != 0 ? (
        <div className="resultFrame">
          <span className="paintFrame">
            <ColorsPal colors={colors}></ColorsPal>
          </span>
          <span>
            <InfoBox weatherElement={weatherElement}></InfoBox>{" "}
          </span>
          <div>
            <ForecastStrip forecast={weatherElement.forecast}></ForecastStrip>
          </div>
        </div>
      ) : (
        <div className="openMsg">Weather palette.</div>
      )}
    </div>
  );
};

export default App;
