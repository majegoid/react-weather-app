/** Removes unused data from response payload. */
function filterResponseData(data) {
  // properties to remove: base, sys.id, sys.type, cod
  delete data['base'];
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

// Daily Weather API is not free to use...-
/** Fetches Weather Data using a query string. */
// export async function fetchDailyWeatherData(location, days = 8) {
//   const url = `api.openweathermap.org/data/2.5/forecast/daily?&cnt=${days}&q=${encodeURIComponent(
//     location
//   )}&appid=273d18a4d56c60c9f4d62f1333c25e5c`;
//   console.log('url');
//   console.log(url);
//   const res = await fetch(url);
//   // api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}
//   const data = await res.json();
//   console.log('data');
//   console.log(data);
//   // const filteredData = filterResponseData(data);
//   // return filteredData;
// }
