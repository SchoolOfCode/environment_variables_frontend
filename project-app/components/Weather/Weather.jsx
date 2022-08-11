//Importing packages
import React from "react";
import { useState, useEffect } from "react";

//Importing components
import SearchBar from "./SearchBar";
import WeatherForecast from "./WeatherForecast";
import WeatherReqs from "./WeatherReqs";


const Weather = () => {
  //Defining state
  const [weatherObject, setWeatherObject] = useState();
  const [city, setCity] = useState("london");

  //Defining constants
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric`;

  //Defining functions
  function handleChange(e) {
    setCity(e.target.value);
  }

  async function fetchWeather() {
    try {
      const response = await fetch(url);
      const data = await response.json();
       /* WEATHER OBJECT CONSOLE - DELETE AFTER BUILD */
      // console.log(data);

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
    <div className="mb-8">
      <h2 className="text-lg sm:text-xl md:text-2xl text-[#004F54] font-bold ml-4">
        Check the Weather
      </h2>
      <p className=" text-sm sm:text-[16px] text-[#004f54] ml-4 mr-4">
        Before you head out, it's a great idea to check the weather forecast
        to make sure you're prepared for your clean-up. 
      </p>
      <p className="text-xs sm:text-[14px] text-[#004f54] ml-4 font-semibold">
        Unsure what to wear or bring with you?{" "} 
        <span>
          <WeatherReqs />
        </span>
        {" "}for some helpful advice!
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
