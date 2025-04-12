import React from "react";

const WeatherCard = ({ weather }) => {
  return (
    <div className="weather-card">
      <h2>{weather.city}</h2>
      <p>{weather.condition}</p>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind Speed: {weather.windSpeed} m/s</p>
    </div>
  );
};

export default WeatherCard;
