import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function WeatherForecast() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
  
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=f9e51c2c0f5d427e6ada1746bdde658d&units=metric`
      );
  
      // Group forecast data by day
      const dailyForecast = response.data.list.reduce((acc, forecast) => {
        const date = forecast.dt_txt.split(" ")[0];
  
        // Check if the forecast date is within the next 5 days
        const forecastDate = new Date(date);
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + 4);
        if (forecastDate <= endDate) {
          if (!acc[date]) {
            acc[date] = {
              date: date,
              icon: forecast.weather[0].icon,
              description: forecast.weather[0].description,
              high: forecast.main.temp_max,
              low: forecast.main.temp_min,
              hourly: [forecast],
            };
          } else {
            acc[date].high = Math.max(acc[date].high, forecast.main.temp_max);
            acc[date].low = Math.min(acc[date].low, forecast.main.temp_min);
            acc[date].hourly.push(forecast);
          }
        }
  
        return acc;
      }, {});
  
      setWeatherData(dailyForecast);
      setError(null);
    } catch (error) {
      setWeatherData(null);
      setError(error.response.data.error);
    }
  }
  

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleDayClick(date) {
    setSelectedDay(date);
  }

  return (
    <div>
      <h1>Weather Forecast</h1>
      <form onSubmit={handleSubmit}>
        <label>
          City:
          <input type="text" value={city} onChange={handleCityChange} />
        </label>
        <button type="submit">Get Forecast</button>
      </form>

      {error && <p>{error}</p>}

      {weatherData && (
        <div className="forecast-container">
          {Object.keys(weatherData).map((date) => (
            <div
              className={`forecast ${selectedDay === date ? "selected" : ""}`}
              key={date}
              onClick={() => handleDayClick(date)}
            >
              <h2>{weatherData[date].date}</h2>
              <img
                src={`http://openweathermap.org/img/w/${weatherData[date].icon}.png`}
                alt={weatherData[date].description}
              />
              <p>High: {weatherData[date].high}°C</p>
              <p>Low: {weatherData[date].low}°C</p>
            </div>
          ))}
        </div>
      )}

      {selectedDay && (
        <>
        <div className="hourly-heading"><h2>Hourly forecast for {selectedDay}</h2>
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
  )}
</div>
);
}

export default WeatherForecast;
