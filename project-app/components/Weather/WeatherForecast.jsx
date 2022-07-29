import React from "react";

const WeatherForecast = ({ weatherObject }) => {
  return (
    //main div container
    <div className="flex justify-start mb-4 mt-4 ml-4">
      {/* todays weather stats */}
      <div className="flex justify-between bg-stone-300 p-4">
        <div>
          <h2 className="text-5xl font-bold mb-4 ">Today</h2>

          <div className="text-xl font-bold ">{weatherObject?.city.name}</div>
          <h1 className="text-5xl font-bold mt-3">
            {Math.floor(weatherObject?.list[0].main.temp)}°C{" "}
          </h1>
          <h2>{weatherObject?.list[0].weather[0].description}</h2>
        </div>
        <div className="pl-4 pr-6">
          <img
            src={`http://openweathermap.org/img/wn/${weatherObject?.list[0].weather[0].icon}@2x.png`}
            viewBox="0 0 32 32"
            className="fill-current h-40 w-40 text-yellow-300"
          />
        </div>
        <div className="flex-col content-center mt-5">
          <h3 className="font-bold">feels like:</h3>
          <span>{Math.floor(weatherObject?.list[0].main.feels_like)}°C</span>
          <h3 className="font-bold">humidity:</h3>
          <span> {weatherObject?.list[0].main.humidity}%</span>
          <h3 className="font-bold">wind speed:</h3>
          <span>{weatherObject?.list[0].wind.speed}m/s</span>
          <h3></h3>
        </div>
      </div>
      {/* 5 day forecast cards */}
      <div className="flex justify-evenly bg-amber-500 ">
        <div className="flex-col border rounded mt-4 mb-4 w-48 p-4 ml-4">
          <p>{weatherObject?.list[8].dt_txt}</p>
          <p> {Math.floor(weatherObject?.list[8].main.temp)}°C</p>
          <img
            src={`http://openweathermap.org/img/wn/${weatherObject?.list[0].weather[0].icon}@2x.png`}
            viewBox="0 0 32 32"
            className="fill-current h-40 w-40 text-yellow-300"
          />
          <p>{weatherObject?.list[8].weather[0].description}</p>
        </div>
        <div className="flex-col border rounded mt-4 mb-4 w-48 p-4 ml-4">
          <p>{weatherObject?.list[16].dt_txt}</p>
          <p> {Math.floor(weatherObject?.list[16].main.temp)}°C</p>
          <img
            src={`http://openweathermap.org/img/wn/${weatherObject?.list[16].weather[0].icon}@2x.png`}
            viewBox="0 0 32 32"
            className="fill-current h-40 w-40 text-yellow-300"
          />
          <p>{weatherObject?.list[16].weather[0].description}</p>
        </div>
        <div className="flex-col border rounded mt-4 mb-4 w-48 p-4 ml-4">
          <p>{weatherObject?.list[24].dt_txt}</p>
          <p> {Math.floor(weatherObject?.list[24].main.temp)}°C</p>
          <img
            src={`http://openweathermap.org/img/wn/${weatherObject?.list[24].weather[0].icon}@2x.png`}
            viewBox="0 0 32 32"
            className="fill-current h-40 w-40 text-yellow-300"
          />
          <p>{weatherObject?.list[24].weather[0].description}</p>
        </div>
        <div className="flex-col border rounded mt-4 mb-4 w-48 p-4 ml-4 mr-4">
          <p>{weatherObject?.list[32].dt_txt}</p>
          <p> {Math.floor(weatherObject?.list[32].main.temp)}°C</p>
          <img
            src={`http://openweathermap.org/img/wn/${weatherObject?.list[32].weather[0].icon}@2x.png`}
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
<img alt="weather-image" />;

{
  /* <div className="card  min-w-sm max-w-sm border border-gray-100 bg-gray-50   transition-shadow test  shadow-lg hover:shadow-shadow-xl w-full bg-green-600 text-purple-50 rounded-md">
        <h2 className="text-md mb-2 px-4 pt-4">
          <div className="flex justify-between">
            <div className="badge relative top-0">
              <span className="mt-2 py-1 h-12px text-md font-semibold w-12px  rounded right-1 bottom-1 px-4">
                {weatherObject?.city.name}
              </span>
            </div>
            <span className="text-lg font-bold ">
              {weatherObject?.list[0].dt_txt}
            </span>
          </div>
        </h2>

        <div className="flex items-center p-4">
          <div className="flex justify-center items-center w-96">
            <img
              src={`http://openweathermap.org/img/wn/${weatherObject?.list[0].weather[0].icon}@2x.png`}
              height="20"
              width="20"
              viewBox="0 0 32 32"
              className="fill-current h-32 w-32 text-yellow-300"
            />
          </div>
        </div>
        <div className="text-md pt-4 pb-4 px-4">
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <span className="flex space-x-2 items-center">
                <svg
                  height="20"
                  width="20"
                  viewBox="0 0 32 32"
                  className="fill-current"
                >
                  <path d="M13,30a5.0057,5.0057,0,0,1-5-5h2a3,3,0,1,0,3-3H4V20h9a5,5,0,0,1,0,10Z"></path>
                  <path d="M25 25a5.0057 5.0057 0 01-5-5h2a3 3 0 103-3H2V15H25a5 5 0 010 10zM21 12H6V10H21a3 3 0 10-3-3H16a5 5 0 115 5z"></path>
                </svg>{" "}
                <span>{weatherObject?.list[0].wind.speed}m/s</span>
              </span>
              <span className="flex space-x-2 items-center">
                <svg
                  height="20"
                  width="20"
                  viewBox="0 0 32 32"
                  className="fill-current"
                >
                  <path d="M16,24V22a3.2965,3.2965,0,0,0,3-3h2A5.2668,5.2668,0,0,1,16,24Z"></path>
                  <path d="M16,28a9.0114,9.0114,0,0,1-9-9,9.9843,9.9843,0,0,1,1.4941-4.9554L15.1528,3.4367a1.04,1.04,0,0,1,1.6944,0l6.6289,10.5564A10.0633,10.0633,0,0,1,25,19,9.0114,9.0114,0,0,1,16,28ZM16,5.8483l-5.7817,9.2079A7.9771,7.9771,0,0,0,9,19a7,7,0,0,0,14,0,8.0615,8.0615,0,0,0-1.248-3.9953Z"></path>
                </svg>{" "}
                <span>{weatherObject?.list[0].main.humidity}%</span>
              </span>
            </div>
            <div>
              <h1 className="text-6xl">
                {" "}
                {Math.floor(weatherObject?.list[0].main.temp)}°C{" "}
              </h1>
            </div>
          </div>
        </div>
      </div> */
}
