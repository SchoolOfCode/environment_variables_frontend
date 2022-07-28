import React from "react";
import { useState, useEffect } from "react";
import WeatherCurrent from "./WeatherCurrent";
import SearchBar from "./SearchBar";
import WeatherForecast from "./WeatherForecast";

const Weather = () => {
  const [weatherObject, setWeatherObject] = useState();
  const [city, setCity] = useState("london");
  
  

  function handleChange(e) {
    
    setCity(e.target.value);
  }
  // `api.openweathermap.org/data/2.5/forecast?q=london&appid=bb7583604ecbfdd9c60127fbda2d5209`
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric`;

  async function fetchWeather() {
    // This was an attempt to force the users to put in letters only, needs refactoring, DO NOT DELETE
    // if (!/^[a-zA-Z]+$/.test(city)) {
    //   alert("Please enter letters only");
    // }
    
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setWeatherObject(data);
      setCity('');
    }

  useEffect(() => {
    fetchWeather();
  }, []);



  return (
    <div>
      <div className="weather">
        <SearchBar handleChange={handleChange} fetchWeather={fetchWeather} city={city}/>
        <WeatherCurrent weatherObject={weatherObject}/>
        <WeatherForecast />
      </div>
    </div>
  );
};

export default Weather;
