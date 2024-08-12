import React, { useState, useEffect } from 'react';

const baseURL = `https://api.openweathermap.org/data/2.5`;
const apiKey = 'eaed98fdd867aae368f83d8e4b672630';

const useWeather = (weatherCity) => {
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorWeather, setErrorWeather] = useState(null);
    const [errorForecast, setErrorForecast] = useState(null);


    useEffect(() => {
        setLoading(true);
        setErrorWeather(null);
        setErrorForecast(null);
        const fetchWeather = async () => {
            const response = await fetch(`${baseURL}/weather?q=${weatherCity}&appid=${apiKey}&units=metric`);
            const data = await response.json();
            if (response.ok) {
                setWeather(data);
            } else {
                setErrorWeather(data.statusText);
            }

            // Fetch forecast
            fetchForecast();
        }
        const fetchForecast = async () => {
            const response = await fetch(`${baseURL}/forecast?q=${weatherCity}&appid=${apiKey}&units=metric`);
            const data = await response.json();
            if (response.ok) {
                setForecast(data);
            } else {
                setErrorForecast(data.statusText);
            }

        };
        fetchWeather();
    }, [weatherCity]);

    return { weather, forecast, loading, errorWeather, errorForecast }
}

export default useWeather;