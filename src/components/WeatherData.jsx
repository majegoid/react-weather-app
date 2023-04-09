import React, { useState } from 'react';
import { getDateStringFromMs, getTimeStringFromMs } from '../utils/date';
import { displayTemp } from '../utils/temperature';

export const WeatherData = ({ weatherData }) => {
  const {
    coord,
    weather,
    // base,
    main,
    visibility,
    wind,
    clouds,
    dt,
    sys,
    timezone,
    // id,
    name,
    // cod,
  } = weatherData || {};

  const [isFahrenheit, setIsFahrenheit] = useState(false);

  const toggleIsFahrenheit = () => {
    setIsFahrenheit(!isFahrenheit);
  };

  return (
    <div>
      <h2>Weather Data</h2>
      {/* <pre id='weather-data-output'></pre> */}
      <div>
        <h2>
          Coordinates: LAT: {coord?.lat || 'X'}, LON: {coord?.lon || 'Y'}
        </h2>
      </div>
      <div>
        <h2>Weather</h2>
        <div>
          <h4>{weather?.main || 'UNKNOWN'}</h4>
          <p>{weather?.description || 'UNKNOWN'}</p>
        </div>
      </div>
      <div>
        <h2>Main</h2>
        <h4>
          Temp: {main?.temp ? displayTemp(main?.temp, true) : 'XX°U'} (Min-Max)
        </h4>
        <h4>
          Feels Like:{' '}
          {main?.feels_like ? displayTemp(main?.feels_like, true) : 'XX°U'}
        </h4>
        <h4>Pressure: {main?.pressure ? `${main?.pressure}mb` : 'XXXXmb'}</h4>
        <h4>
          Humidity: {main?.humidity ? `${main?.humidity}g/m^3` : 'XXg/m^3'}
        </h4>
      </div>
      <div>
        <h2>Visibility</h2>
        <h4>{visibility ? `${visibility}m` : 'XXXXXm'}</h4>
      </div>
      <div>
        <h2>Wind</h2>
        <h4>Speed: {wind?.speed ? `${wind?.speed}m/s` : 'XX.Xm/s'}</h4>
        <h4>Deg: {wind?.deg ? `${wind?.deg}°` : 'XX.X°'} (Direction)</h4>
      </div>
      <div>
        <h2>Clouds</h2>
        <h4>{clouds?.all ? `${clouds?.all}%` : 'XX%'} of sky</h4>
      </div>
      <div>Date: {dt ? getDateStringFromMs(dt) : getDateStringFromMs()}</div>
      <div>
        <h2>SYS</h2>
        <h4>Country: {sys?.country ? `${sys?.country}` : 'XX'}</h4>
        <h4>
          Sunrise Time:{' '}
          {sys?.sunrise
            ? getTimeStringFromMs(sys?.sunrise)
            : getTimeStringFromMs()}
        </h4>
        <h4>
          Sunset Time:{' '}
          {sys?.sunset
            ? getTimeStringFromMs(sys?.sunset)
            : getTimeStringFromMs()}
        </h4>
      </div>
      <div>
        <h2>Timezone {timezone ? `${timezone / 3600}` : '?'}</h2>
      </div>
      <div>
        <h2>{name || 'Unknown Location'}</h2>
      </div>
      <button onClick={toggleIsFahrenheit}>
        Switch to {isFahrenheit ? '°C' : '°F'}
      </button>
    </div>
  );
};
