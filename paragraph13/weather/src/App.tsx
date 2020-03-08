import React, { useState, ChangeEvent, useEffect, FormEvent } from "react";
import "./App.css";

const baseUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
const suffix = "&units=metric&appid=30f4128a2113cecad08fd71fc4cfd0a4";

export interface Weather {
  city: string;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

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

  return (
    <div style={myStyles} className="App">
      <h1>{state.titleName}</h1>
      <img src={state.imageUrl} alt="" />
      <form>
        <input type="text" placeholder="Enter city" onChange={handleChange} />
        <button type="submit">Get weather</button>
        <h2>Location: {city}</h2>
        {weather && <h2>Temperature: {weather.temp}°C</h2>}
      </form>
    </div>
  );
}

export default App;