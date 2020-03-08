import React, { useState, ChangeEvent, useEffect, FormEvent } from "react";
import "./App.css";
import { Weather } from "./weather";
import WeatherInfo from "./weather-info";

const baseUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
const suffix = "&units=metric&appid=30f4128a2113cecad08fd71fc4cfd0a4";
const has = (value: any): value is boolean => !!value;

interface State {
  titleName: string;
  imageUrl: string;
}

// const getWeather = async (city: string) => {
//   const response = await fetch(baseUrl + city + suffix);
//   const jsonWeather = await response.json();
//   console.log(jsonWeather);
// };

function App() {
  const [city, setCity] = useState("London");
  const [msgFromChild, setMsgFromChild] = useState('');
  const [weather, setWeather] = useState<Weather | null>(null);
  const [state, setState] = useState<State>({
    titleName: "Weather info",
    imageUrl: "https://picsum.photos/600/150"
  });
  const myStyles = { margin: 40 };

  // useEffect(() => console.log("useEffect() was invoked"), ["city"]);
  useEffect(() => {
    getWeather(city); // this line causes the warning msg in browser's console
  }, []);

  async function getWeather(location: string) {
    const response = await fetch(baseUrl + location + suffix);
    if (response.status === 200) {
      const jsonWeather = await response.json();
      const cityTemp: Weather = jsonWeather.main;
      cityTemp.city = jsonWeather.name;
      setWeather(cityTemp);
    } else {
      setWeather(null);
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    getWeather(city);
    console.log(weather);
  };

  const getMsgFromChild = (msg: string) => setMsgFromChild(msg);

  return (
    <div style={myStyles} className="App">
      <h1>{state.titleName}</h1>
      <img src={state.imageUrl} alt="" />
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter city" onInput={handleChange} />
        <button type="submit">Get weather</button>
        <h2>Location: {city}</h2>
      </form>

      {msgFromChild}
      {has(weather) ? (
        <WeatherInfo weather={weather} parentChannel={getMsgFromChild}>
        </WeatherInfo>
      ) : (
        <h2>No weather available</h2>
      )}
    </div>
  );
}

export default App;
