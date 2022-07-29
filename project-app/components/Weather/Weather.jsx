import React from "react";
import { useState, useEffect } from "react";

import SearchBar from "./SearchBar";
import WeatherForecast from "./WeatherForecast";
import WeatherReqs from "./WeatherReqs";

const Weather = () => {
  const [weatherObject, setWeatherObject] = useState();
  const [city, setCity] = useState("london");

  function handleChange(e) {
    setCity(e.target.value);
  }

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
    //uncomment the below city State after development stage - means each time you make a change, props cant be found
    setCity("");
  }

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div id="weather" className="mt-4">
      <h2 className="text-6xl font-bold ml-4">Weather Forecast</h2>
      <div className="weather">
        <div>
          <SearchBar
            handleChange={handleChange}
            fetchWeather={fetchWeather}
            city={city}
          />
          <WeatherForecast
            weatherObject={weatherObject}
            handleChange={handleChange}
            fetchWeather={fetchWeather}
            city={city}
          />
        </div>
      </div>
      <WeatherReqs />
    </div>
  );
};

export default Weather;
