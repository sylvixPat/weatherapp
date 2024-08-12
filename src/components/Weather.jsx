import React, { useState } from 'react';
import useWeather from '../hooks/useWeather';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  //const { weather, forecast, loading, errorWeather, errorForecast } = useWeather(city);

  const fetchWeather = async () => {
    const apiKey = 'eaed98fdd867aae368f83d8e4b672630';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    console.log('Response: ', response);
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
  const celsiusToFahrenheit = (celsius) => (celsius * 9 / 5) + 32;

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className='text-black'
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {weather && (
        <div>
          <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <div aria-hidden="true" className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
              <div style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)', }} className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" />
            </div>
            <div aria-hidden="true" className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
              <div style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)', }} className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{weather.name}</h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  {weather.weather[0].description}
                </p>
              </div>
              <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="flex flex-col-reverse">
                    <dt className="text-base leading-7 text-gray-300">Temperature:</dt>
                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{weather.main.temp}°C</dd>
                  </div>
                  <div className="flex flex-col-reverse">
                    <dt className="text-base leading-7 text-gray-300">Temperature:</dt>
                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{celsiusToFahrenheit(weather.main.temp).toFixed(2)}°F</dd>
                  </div>
                  <div className="flex flex-col-reverse">
                    <dt className="text-base leading-7 text-gray-300">Humidity:</dt>
                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{weather.main.humidity}%</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      )}

      {forecast && (
        <div>

          <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <div aria-hidden="true" className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
              <div style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)', }} className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" />
            </div>
            <div aria-hidden="true" className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
              <div style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)', }} className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Forecast for {forecast.city.name}</h2>
              </div>
              <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-5">
                  {forecast.list.slice(0, 5).map((item, index) => (
                    <div key={index} className="flex flex-col-reverse">
                      <dt className="text-base leading-7 text-gray-300">{new Date(item.dt_txt).toLocaleString()} - {item.weather[0].description}</dt>
                      <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{item.main.temp}°C / {celsiusToFahrenheit(item.main.temp).toFixed(2)}°F</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default Weather;

