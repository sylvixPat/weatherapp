import React, { useState } from 'react';
import useWeather from '../hooks/useWeather';

const Weather = () => {
  const [city, setCity] = useState('bogota');

  const { weather, forecast, loading, errorWeather, errorForecast } = useWeather(city);

  function handleSubmit(e) {
    e.preventDefault();
    setCity(e.target[0].value);
    console.log(city, e);
  }

  // Función para convertir Celsius a Fahrenheit
  const celsiusToFahrenheit = (celsius) => (celsius * 9 / 5) + 32;

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex items-center max-w-sm mx-auto'>
        <input
          type="text"
          placeholder="Enter city"
          className='bg-gray-50 border border-gray-300 text-gray-900 text-m mb-2 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
        <button type='submit' className="relative inline-flex items-center justify-center p-0.5  ml-2 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Get Weather
          </span>
        </button>

      </form>

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
                <img
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                  alt={weather.weather[0].description}
                  className="w-16 h-16"
                />
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
                      <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{item.main.temp}°C / {celsiusToFahrenheit(item.main.temp).toFixed(2)}°F
                        <img
                          src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                          alt={item.weather[0].description}
                          className="w-12 h-12"
                        />
                      </dd>
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

