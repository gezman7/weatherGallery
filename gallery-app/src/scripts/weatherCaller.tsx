import axios from "axios";
// import getPaintLinkFromColors from "./paint-get";
import key from "../private/key";
// private/key";
import weatherData from "../types/weatherData";
import ColorPal from "../elements/ColorsPal";
import ColorPalType from "../types/ColorPalType";

import ForecastStripType from "../types/ForecastStripType";
import ColorsPal from "../elements/ColorsPal";

export async function dataFromSearch(city: string) {
  const API_KEY = key;
  const cityId = getIdFromCity(city);
  console.log("cityId:" + cityId);
  const url = `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&APPID=${API_KEY}&units=metric`;

  let weatherDataResponse;
  await axios
    .get(url)
    .then(response => {
      weatherDataResponse = response;
      // weatherElement.id = response.data.list[0].weather[0].id;
      // weatherElement.main = response.data.list[0].weather[0].main;
      // weatherElement.description = response.data.list[0].weather[0].description;
      // weatherElement.temprature = response.data.list[0].main.temp;

      console.log("recevied data");
    })
    .catch(error => {
      console.log(error);
    });

  const weatherElement: weatherData = parseWeatherResponse(weatherDataResponse);
  //  {
  //   id: 0,
  //   colors: [],
  //   city: cityName,
  //   temprature: 0,
  //   main: "",
  //   description: "",
  //   forecast: []
  // };
  weatherElement.colors = getColors(weatherElement.id);
  return weatherElement;
}

function getColors(cityId: number) {
  const data = require("./data/color-data.json");

  let colors = data.filter((color: { id: number }) => color.id === cityId);
  return colors[0].colors;

  // console.log(`colors are: ${color1},  ${color2},  ${color3}`);
}

function getIdFromCity(val: string) {
  const data = require("./data/city-list.json");

  let cityDetail = data.filter((element: { name: string }) =>
    element.name.toLowerCase().startsWith(val.toLowerCase())
  );
  for (let i = 0; i < cityDetail.length; i++) {
    console.log(cityDetail[i]);
  }
  let id = cityDetail[0].id;
  let city = cityDetail[0].name;
  return id;
}

function parseWeatherResponse(response: any) {
  const weatherElement: weatherData = {
    id: response.data.list[0].weather[0].id,
    colors: [],
    city: response.data.city.name,
    temprature: response.data.list[0].main.temp,
    main: response.data.list[0].weather[0].main,
    description: response.data.list[0].weather[0].description,
    forecast: parseForcastResponse(response)

    //
  };

  return weatherElement;
}

function parseForcastResponse(response: any) {
  let colorsPalArray: ColorPalType[] = [];

  const forecastStrip: ForecastStripType = {
    forecast: colorsPalArray
  };
  const TIMES_OF_DAY = 8;
  const DAYS_TO_FORCAST = 5;
  for (let i = 0; i < TIMES_OF_DAY * DAYS_TO_FORCAST; i += TIMES_OF_DAY) {
    forecastStrip.forecast.push(
      makeColorPalObject(getColors(response.data.list[i].weather[0].id))
    );
    console.log("forcast id day no" + i / TIMES_OF_DAY);

    console.log(response.data.list[i].weather[0].id);
  }

  return forecastStrip;
}

function makeColorPalObject(colors: string[]) {
  const colorPal: ColorPalType = {
    colors: colors
  };

  return colorPal;
}
export default { dataFromSearch };
