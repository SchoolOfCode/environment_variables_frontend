import React from "react";

const WeatherForecast = ({ weatherObject }) => {
  //converts the map api's unix stamp into a readable date
  function datConvertor(timeStamp) {
    let unix = timeStamp;
    let milliSeconds = unix * 1000;
    let dateObject = new Date(milliSeconds);
    let displayDate = dateObject.toLocaleString("en-US", { weekday: "short" });
    return displayDate;
  }

  return (
    //main weather container
    <div id="weather" className=" flex flex-col xl:flex-row rounded justify-between md:justify-evenly mb-4 mt-4 ml-4 mr-4 bg-[url('/weather-background.jpg')] bg-cover">
      {/* TODAY*/}
      <div className="flex justify-between shaddow-lg md:justify-evenly rounded bg-[#004F54]/90 p-2 md:pt-10 w-full xl:w-2/6 xl:mt-4 xl:mb-4">
        <div>
          <h2 className="text-3xl text-white lg:text-5xl font-bold mb-6 mt-5">
            Today
          </h2>

          <div className="text-xl sm:text-2xl text-white font-bold">
            {weatherObject?.city.name}
          </div>
          <h2 className="text-4xl text-white lg:text-7xl font-bold mt-3">
            {Math.floor(weatherObject?.list[0].main.temp)}°C{" "}
          </h2>
          <h2 className=" text-lg sm:text-2xl text-white font-bold">
            {weatherObject?.list[0].weather[0].description}
          </h2>
        </div>
        <div className="pl-4 pr-6 mt-8">
          <img
            src={`https://openweathermap.org/img/wn/${weatherObject?.list[0].weather[0].icon}@2x.png`}
            viewBox="0 0 32 32"
            className="fill-current w-30 h-30 sm:h-44 sm:w-44"
          />
        </div>

        <div className="flex-col content-center mt-5">
          <h3 className="text-md sm:text-lg font-bold text-white">
            feels like:
          </h3>
          <span className="text-md sm:text-2xl text-white">
            {Math.floor(weatherObject?.list[0].main.feels_like)}°C
          </span>
          <h3 className="font-bold text-white mt-5 text-md sm:text-lg">
            humidity:
          </h3>
          <span className="text-white text-md sm:text-2xl">
            {" "}
            {weatherObject?.list[0].main.humidity}%
          </span>
          <h3 className="font-bold text-white mt-5 text-md sm:text-lg">
            wind speed:
          </h3>
          <span className="text-white text-md sm:text-2xl">
            {weatherObject?.list[0].wind.speed}m/s
          </span>
        </div>
      </div>
      {/* NEXT 4 DAY FORECAST CARDS */}
      {/*Main Div  */}
      <div className="flex flex-col sm:flex-row justify-evenly rounded bg-[#004F54]/90 w-full xl:w-7/12 mt-4 mb-4">
        {/* CARD 1 */}
        <div className="flex flex-row sm:flex-col rounded border-[#579094] border-4 shadow-lg mt-4 mb-4 w-54 p-1 sm:p-4 ml-2 mr-2 sm:ml-4 justify-evenly items-center text-xl font-bold">
          <div className="flex flex-col">
            <p className="text-white">
              {datConvertor(weatherObject?.list[8].dt)}
            </p>
            <p className="text-xl sm:text-3xl text-white">
              {Math.floor(weatherObject?.list[8].main.temp)}°C
            </p>
          </div>
          <img
            src={`https://openweathermap.org/img/wn/${weatherObject?.list[8].weather[0].icon}@2x.png`}
            viewBox="0 0 32 32"
            className="fill-current h-24 w-24 sm:h-36 sm:w-36"
          />
          <p className="text-white text-lg sm:text-xl">
            {weatherObject?.list[8].weather[0].description}
          </p>
        </div>
        {/* CARD 2 */}
        <div className="flex flex-row sm:flex-col rounded border-4 drop-shadow-lg border-[#579094] shadow-lg mt-4 mb-4 w-54 p-1 sm:p-4 ml-2 mr-2 sm:ml-4 justify-evenly items-center text-xl font-bold">
          <div className="flex flex-col">
            <p className="text-white">
              {datConvertor(weatherObject?.list[16].dt)}
            </p>
            <p className="text-xl sm:text-3xl text-white">
              {Math.floor(weatherObject?.list[16].main.temp)}°C
            </p>
          </div>
          <img
            src={`https://openweathermap.org/img/wn/${weatherObject?.list[16].weather[0].icon}@2x.png`}
            viewBox="0 0 32 32"
            className="fill-current h-24 w-24 sm:h-36 sm:w-36"
          />
          <p className="text-white text-lg sm:text-xl">
            {weatherObject?.list[16].weather[0].description}
          </p>
        </div>
        {/* CARD 3 */}
        <div className="flex flex-row sm:flex-col rounded border-4 border-[#579094] shadow-lg mt-4 mb-4 w-54 p-1 sm:p-4 ml-2 mr-2 sm:ml-4 justify-evenly items-center text-xl font-bold">
          <div className="flex flex-col">
            <p className="text-white">
              {datConvertor(weatherObject?.list[24].dt)}
            </p>
            <p className="text-xl sm:text-3xl text-white">
              {Math.floor(weatherObject?.list[24].main.temp)}°C
            </p>
          </div>
          <img
            src={`https://openweathermap.org/img/wn/${weatherObject?.list[24].weather[0].icon}@2x.png`}
            viewBox="0 0 32 32"
            className="fill-current h-24 w-24 sm:h-36 sm:w-36"
          />
          <p className="text-white text-lg sm:text-xl">
            {weatherObject?.list[24].weather[0].description}
          </p>
        </div>
        {/* CARD 4 */}
        <div className="flex flex-row sm:flex-col rounded border-[#579094] border-4	 shadow-lg mt-4 mb-4 w-54 p-1 sm:p-4 ml-2 mr-2 sm:ml-4 justify-evenly items-center text-xl font-bold">
          <div className="flex flex-col">
            <p className="text-white">
              {datConvertor(weatherObject?.list[32].dt)}
            </p>
            <p className="text-xl sm:text-3xl text-white">
              {" "}
              {Math.floor(weatherObject?.list[32].main.temp)}°C
            </p>
          </div>
          <img
            src={`https://openweathermap.org/img/wn/${weatherObject?.list[32].weather[0].icon}@2x.png`}
            viewBox="0 0 32 32"
            className="fill-current h-24 w-24 sm:h-36 sm:w-36"
          />
          <p className="text-white text-lg sm:text-xl">
            {weatherObject?.list[32].weather[0].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;
