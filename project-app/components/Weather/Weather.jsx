import React from "react";
import { useState, useEffect } from "react";
import WeatherCurrent from "./WeatherCurrent";
import SearchBar from "./SearchBar";
import WeatherForecast from "./WeatherForecast";

const Weather = () => {
  const [weatherObject, setWeatherObject] = useState();

  useEffect(() => {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=London&mode=json&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric`;

    async function fetchWeather() {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setWeatherObject(data);
    }
    fetchWeather();
  }, []);

  return (
    <div>
      <div className="weather">
        <SearchBar />
        <WeatherCurrent />
        <WeatherForecast />
      </div>
    </div>
  );
};

export default Weather;
