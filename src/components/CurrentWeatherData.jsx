import React, { useState } from 'react';
import { formatCurrentWeatherData } from '../utils/formatWeatherData';
import { WeatherIcon } from './WeatherIcon';

//excludes base, id, cod
export const CurrentWeatherData = ({ weatherData }) => {
  const [isCelsius, setIsCelsius] = useState(false);

  const toggleIsCelsius = () => {
    setIsCelsius(!isCelsius);
  };

  const formattedWeatherData = formatCurrentWeatherData(weatherData, isCelsius);

  const {
    coord,
    weather,
    main,
    // visibility,
    wind,
    // clouds,
    dt,
    sys,
    // timezone,
    name,
  } = formattedWeatherData;

  console.log('formattedWeatherData');
  console.log(formattedWeatherData);

  return (
    <div className='weather-data'>
      <div className='location-info-header'>
        Results for {<b>{`${name}, ${sys.country}`}</b>}
        <span>
          Coordinates: LAT: {coord.lat}, LON: {coord.lon}
        </span>
      </div>
      <div className='header'>
        <WeatherIcon iconId={weather[0].icon} />{' '}
        <h1>
          {main.temp}{' '}
          <button onClick={toggleIsCelsius}>
            Switch to {isCelsius ? '°F' : '°C'}
          </button>
        </h1>
      </div>
      <div className='info'>
        <div className='additional-info small-text'>
          <span>Humidity: {main.humidity}</span>
          <span>
            Wind Speed: {wind.speed} {wind.deg} (Direction)
          </span>
          <span>Feels Like: {main.feels_like}</span>
          <span>Pressure: {main.pressure}</span>
        </div>
        <div className='corner-info'>
          <h2>Weather</h2>
          <div>{dt}</div>
          <h4>{weather[0].main}</h4>
        </div>
      </div>
    </div>
  );
};
