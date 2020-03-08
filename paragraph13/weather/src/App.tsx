import React, { useState, ChangeEvent, useEffect } from "react";
import "./App.css";

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
const suffix = "&units=imperial&appid=12345";

interface State {
  titleName: string;
  imageUrl: string;
}

function App() {
 const [city, setCity] = useState("London");
 const currentLocation: string = baseUrl + 'London' + suffix;

  const [state, setState] = useState<State>({
    titleName: "Weather info",
    imageUrl: "https://picsum.photos/600/150"
  });

  const myStyles = { margin: 40 };

  const getWeather = async (city : string) =>
  {
    const response = await fetch(currentLocation);
    const jsonWeather = await response.json();
    console.log(jsonWeather);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  return (
    <div style={myStyles} className="App">
      <h1>{state.titleName}</h1>
      <img src={state.imageUrl} alt="" />
      <form>
        <input type="text" placeholder="Enter city" onChange={handleChange} />
        <button type="submit">Get weather</button>
        <h2>Location: {city}</h2>
      </form>
    </div>
  );
}

export default App;

// useEffect(() => console.log("useEffect() was invoked"));
