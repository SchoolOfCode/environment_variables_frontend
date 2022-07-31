import React from "react";

const WeatherForecast = ({ weatherObject }) => {
  return (
    //main div container
    <div className="flex flex-col xl:flex-row justify-between md:justify-evenly mb-4 mt-4 ml-4 mr-4 ">
      {/* todays weather stats */}
      <div className="flex justify-between md:justify-evenly rounded bg-stone-300 p-2 w-full xl:w-2/5">
        <div>
          <h2 className="text-2xl lg:text-5xl font-bold mb-6 mt-5">Today</h2>

          <div className="text-2xl font-bold">{weatherObject?.city.name}</div>
          <h1 className="text-3xl lg:text-6xl font-bold mt-3">
            {Math.floor(weatherObject?.list[0].main.temp)}°C{" "}
          </h1>
          <h2 className="text-xl font-bold">
            {weatherObject?.list[0].weather[0].description}
          </h2>
        </div>
        <div className="pl-4 pr-6">
          <img
            src={`https://openweathermap.org/img/wn/${weatherObject?.list[0].weather[0].icon}@2x.png`}
            viewBox="0 0 32 32"
            className="fill-current h-48 w-48"
          />
        </div>

        <div className="flex-col content-center mt-5">
          <h3 className="font-bold">feels like:</h3>
          <span>{Math.floor(weatherObject?.list[0].main.feels_like)}°C</span>
          <h3 className="font-bold mt-5">humidity:</h3>
          <span> {weatherObject?.list[0].main.humidity}%</span>
          <h3 className="font-bold mt-5">wind speed:</h3>
          <span>{weatherObject?.list[0].wind.speed}m/s</span>
        </div>
      </div>
      {/* 5 day forecast cards */}
      <div className="flex justify-evenly rounded bg-stone-300 w-full xl:w-2/5 mt-4 xl:mt-1 ">
        <div className="flex flex-col rounded shadow-lg mt-4 mb-4 w-48 p-4 ml-4 justify-evenly items-center text-xl font-bold mb-4">
          <p>{weatherObject?.list[8].dt_txt.slice(0, 10)}</p>
          <p className="text-3xl">
            {" "}
            {Math.floor(weatherObject?.list[8].main.temp)}°C
          </p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherObject?.list[8].weather[0].icon}@2x.png`}
            viewBox="0 0 32 32"
            className="fill-current h-40 w-40 text-yellow-300"
          />
          <p>{weatherObject?.list[8].weather[0].description}</p>
        </div>
        <div className="flex-col shadow-lg rounded mt-4 mb-4 w-48 p-4 ml-4 flex justify-evenly items-center text-xl font-bold mb-4">
          <p>{weatherObject?.list[16].dt_txt.slice(0, 10)}</p>
          <p className="text-3xl">
            {" "}
            {Math.floor(weatherObject?.list[16].main.temp)}°C
          </p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherObject?.list[16].weather[0].icon}@2x.png`}
            viewBox="0 0 32 32"
            className="fill-current h-40 w-40 text-yellow-300"
          />
          <p>{weatherObject?.list[16].weather[0].description}</p>
        </div>
        <div className="flex-col rounded shadow-lg mt-4 mb-4 w-48 p-4 ml-4 flex justify-evenly items-center text-xl font-bold mb-4">
          <p>{weatherObject?.list[24].dt_txt.slice(0, 10)}</p>
          <p className="text-3xl">
            {" "}
            {Math.floor(weatherObject?.list[24].main.temp)}°C
          </p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherObject?.list[24].weather[0].icon}@2x.png`}
            viewBox="0 0 32 32"
            className="fill-current h-40 w-40 text-yellow-300"
          />
          <p>{weatherObject?.list[24].weather[0].description}</p>
        </div>
        <div className="flex-col rounded shadow-lg mt-4 mb-4 w-48 p-4 ml-4 mr-4 flex justify-evenly items-center text-xl font-bold mb-4">
          <p>{weatherObject?.list[32].dt_txt.slice(0, 10)}</p>
          <p className="text-3xl">
            {" "}
            {Math.floor(weatherObject?.list[32].main.temp)}°C
          </p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherObject?.list[32].weather[0].icon}@2x.png`}
            viewBox="0 0 32 32"
            className="fill-current h-40 w-40 text-yellow-300"
          />
          <p>{weatherObject?.list[32].weather[0].description}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;
