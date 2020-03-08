import * as React from "react";
import { Weather } from "./weather";

const WeatherInfo: React.FC<{
  weather: Weather;
  parentChannel: (msg: string) => void;
}> = ({ weather, children, parentChannel }) => {
  const { city, humidity, pressure, temp, temp_max, temp_min } = weather;

  return (
    <div>
      {children}
      <h2>Temperature: {temp} °C</h2>
    </div>
  );
};

export default WeatherInfo;
