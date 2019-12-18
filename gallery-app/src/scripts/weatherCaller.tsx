import axios from "axios";
// import getPaintLinkFromColors from "./paint-get";
import key from "../private/key";
// private/key";
import weatherData from "../types/types";

export async function dataFromSearch(city: string) {
  const API_KEY = key;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`;

  const weatherElement: weatherData = {
    id: 0,
    colors: [],
    city: city,
    temprature: 0,
    main: "",
    description: ""
  };
  await axios
    .get(url)
    .then(response => {
      weatherElement.id = response.data.weather[0].id;
      weatherElement.main = response.data.weather[0].main;
      weatherElement.description = response.data.weather[0].description;
      weatherElement.temprature = response.data.main.temp;
      console.log("recevied data");
    })
    .catch(error => {
      console.log(error);
    });

  getColors(weatherElement);
  return weatherElement;
}

function getColors(weatherData: weatherData) {
  const data = require("./data/color-data.json");
  //("../data/color-data.json");
  if (!weatherData.id) return ["no", "city", "found"];
  console.log("getColors's id:" + weatherData.id);
  let colors = data.filter(
    (color: { id: number }) => color.id === weatherData.id
  );

  console.log("type of colors.colors is:" + typeof colors.colors);
  const colorArray: string[] = colors[0].colors;
  colorArray.map(color => {
    console.log("got color:" + color);
    weatherData.colors.push(color);
  });
  // console.log(`colors are: ${color1},  ${color2},  ${color3}`);
}

export default { dataFromSearch };
