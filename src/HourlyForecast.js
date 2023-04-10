import React from "react";

function HourlyForecast({ selectedDay, weatherData }) {
  if (!weatherData[selectedDay]) {
    return <p>No hourly forecast available for {selectedDay}.</p>;
  }

  return (
    <>
      <div className="hourly-heading">
        <h2>Hourly forecast for {selectedDay}</h2>
      </div>
      <div className="hourly-forecast">
        <ul>
          {weatherData[selectedDay].hourly.map((forecast) => (
            <li key={forecast.dt}>
              <p>{forecast.dt_txt.split(" ")[1]}</p>
              <img
                src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
                alt={forecast.weather.description}
              />
              <p>{forecast.weather[0].description}</p>
              <p>{forecast.main.temp}°C</p>
              <p>Humidity: {forecast.main.humidity}%</p>
              <p>Wind: {forecast.wind.speed} m/s</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default HourlyForecast;
