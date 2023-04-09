/** Removes unused data from response payload. */
function filterResponseData(data) {
  // properties to remove: base, weather.icon, sys.id, sys.type, cod
  delete data['base'];
  data['weather'] = data['weather'].map((weatherObj) => {
    delete weatherObj['icon'];
    return weatherObj;
  });
  delete data['sys']['id'];
  delete data['sys']['type'];
  delete data['cod'];
  return data;
}

// API key is hardcoded because there is no way to hide the key on the front end
/** Fetches Weather Data using a query string. */
export async function fetchWeatherData(location) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      location
    )}&appid=273d18a4d56c60c9f4d62f1333c25e5c`
  );
  const data = await res.json();
  const filteredData = filterResponseData(data);
  return filteredData;
}
