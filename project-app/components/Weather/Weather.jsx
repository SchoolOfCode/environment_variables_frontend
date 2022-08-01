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
    // setCity("");
  }

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div id="weather" className="mt-8">
      <h2 className="text-3xl text-[#004F54] md:text-3xl font-bold ml-4">
        Check The Weather...
      </h2>
      <div className="flex flex-col sm:flex-row md:justify-start">
        <SearchBar
          handleChange={handleChange}
          fetchWeather={fetchWeather}
          city={city}
        />
        <WeatherReqs />
      </div>
      <div className="weather">
        <WeatherForecast
          weatherObject={weatherObject}
          handleChange={handleChange}
          fetchWeather={fetchWeather}
          city={city}
        />
      </div>
    </div>
  );
};

export default Weather;
