import React, { useState } from "react";
import SearchBar from "./elements/SearchBar";
import ColorsPal from "./elements/ColorsPal";
import weatherData from "./types/types";

import "./App.css";
import { dataFromSearch } from "./scripts/weatherCaller";
import InfoBox from "./elements/InfoBox";
// import getPaintLinkFromColors from "./scripts/paint-get";

//still a mess. need to handle the search bar, and render after every search.
const App: React.FC = () => {
  //const [paint, changePaint] = useState("");
  const startWeather: weatherData = {
    id: 0,
    colors: [],
    city: "",
    temprature: 0,
    main: "",
    description: ""
  };

  const [colors, updateColors] = useState(["24221f", "4b5f6d", "feb41c"]);
  const [weatherElement, updateWeather] = useState(startWeather);

  function handleSearchBar(val: string) {
    let searchDebounce = setTimeout(async () => {
      const weatherReciver: weatherData = await dataFromSearch(val);
      updateWeather(weatherReciver);
      updateColors(weatherReciver.colors as []);
      //getPaintLinkFromColors(colors[0], colors[1], colors[2]);
    }, 2000);
  }

  return (
    <div className="App">
      <SearchBar onChange={handleSearchBar} />
      <div className="tryFrame">
        <span className="paintFrame">
          <ColorsPal colors={colors}></ColorsPal>
        </span>
        <span>
          <InfoBox weatherElement={weatherElement}></InfoBox>{" "}
        </span>
      </div>
    </div>
  );
};

export default App;
