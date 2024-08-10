import React, { useState } from 'react';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const fetchWeather = async () => {
    const apiKey = 'eaed98fdd867aae368f83d8e4b672630';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    setWeather(data);

    // Fetch forecast
    fetchForecast(city, apiKey);
  };

  const fetchForecast = async (city, apiKey) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    setForecast(data);
  };

  // Función para convertir Celsius a Fahrenheit
  const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Temperature: {celsiusToFahrenheit(weather.main.temp).toFixed(2)}°F</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}

      {forecast && (
        <div>
          <h2>Forecast for {forecast.city.name}</h2>
          <div>
            {forecast.list.slice(0, 5).map((item, index) => (
              <div key={index}>
                <p><strong>{new Date(item.dt_txt).toLocaleString()}</strong></p>
                <p>Temp: {item.main.temp}°C / {celsiusToFahrenheit(item.main.temp).toFixed(2)}°F</p>
                <p>{item.weather[0].description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;

