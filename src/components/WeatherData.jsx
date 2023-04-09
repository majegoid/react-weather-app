import React, { useEffect } from 'react';

export const WeatherData = () => {
  useEffect(() => {
    // API key is hardcoded because there is no way to hide the key on the front end
    /** Fetches Weather Data using a query string. */
    async function fetchWeatherData(location) {
    }
  
  }, [])
  

  return (
    <div>
      <h2>Weather Data</h2>
      <pre id='weather-data-output'></pre>
      <div>
        <h2>Coordinates: LAT: X, LON: Y</h2>
      </div>
      <div>
        <h2>Weather</h2>
        <div>
          <h4>Clouds</h4>
          <p>Broken Clouds</p>
        </div>
      </div>
      <div>
        <h2>Main</h2>
        <h4>Temp: XXU (Min-Max)</h4>
        <h4>Feels Like: XXU</h4>
        <h4>Pressure: XXXXmb</h4>
        <h4>Humidity: XXg/m^3</h4>
      </div>
      <div>
        <h2>Visibility</h2>
        <h4>10000m</h4>
      </div>
      <div>
        <h2>Wind</h2>
        <h4>Speed: XX.Xm/s</h4>
        <h4>Deg: 90 (Direction)</h4>
      </div>
      <div>
        <h2>Clouds</h2>
        <h4>X% of sky</h4>
      </div>
      <div>Date: Timestamp</div>
      <div>
        <h2>SYS</h2>
        <h4>Country: GB</h4>
        <h4>Sunrise Time: Timestamp</h4>
        <h4>Sunset Time: Timestamp</h4>
      </div>
      <div>
        <h2>Timezone</h2>
      </div>
      <div>
        <h2>London</h2>
      </div>
    </div>
  );
};
