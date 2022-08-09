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
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

    if (response.status === 404) {

        alert("Please enter a valid city name")
      
      } else if (response.status === 200){

          setWeatherObject(data);
        //uncomment the below city State after development stage - means each time you make a change, props cant be found
          //setCity("");
      }
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-lg sm:text-xl md:text-2xl text-[#004F54] font-bold ml-4">
        Want to check the weather?
      </h2>
      <p className=" text-sm sm:text-[16px] text-[#004f54] ml-4 mr-4">
        Before you head out for the day, it's a great idea to check the weather
        so you can pack accordingly...
      </p>
      <p className="text-xs sm:text-[14px] text-[#004f54] ml-4 font-semibold">
        Click the "tips" button for weather tips
        <span>
          <WeatherReqs />
        </span>
      </p>

      <div className="flex flex-col sm:flex-row sm:items-center md:justify-start">
        <SearchBar
          handleChange={handleChange}
          fetchWeather={fetchWeather}
          city={city}
        />
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
