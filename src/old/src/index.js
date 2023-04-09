import './styles/index.css';

// const rootElem = document.querySelector('div#root');

/** Loads the app into the DOM. */
function loadApp() {
  // const root = document.querySelector('div#root');
  const searchForm = document.querySelector('#search-form');
  const searchInput = document.querySelector('#search-input');
  const weatherDataOutputPre = document.querySelector('#weather-data-output');
  searchForm.onsubmit = async (e) => {
    e.preventDefault();
    const filteredData = await fetchWeatherData(searchInput.value);
    console.log(filteredData);
    weatherDataOutputPre.textContent = JSON.stringify(filteredData, null, 2);
  };
}

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
async function fetchWeatherData(location) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      location
    )}&appid=273d18a4d56c60c9f4d62f1333c25e5c`
  );
  const data = await res.json();
  const filteredData = filterResponseData(data);
  return filteredData;
}

loadApp();

// let sampleResponse = {
//   coord: {
//     lon: -95.9378,
//     lat: 41.2586,
//   },
//   weather: [
//     {
//       id: 803,
//       main: 'Clouds',
//       description: 'broken clouds',
//       icon: '04d',
//     },
//   ],
//   base: 'stations',
//   main: {
//     temp: 271.09,
//     feels_like: 266.65,
//     temp_min: 270.36,
//     temp_max: 272,
//     pressure: 1019,
//     humidity: 71,
//   },
//   visibility: 10000,
//   wind: {
//     speed: 3.6,
//     deg: 220,
//   },
//   clouds: {
//     all: 75,
//   },
//   dt: 1674775277,
//   sys: {
//     type: 2,
//     id: 2003015,
//     country: 'US',
//     sunrise: 1674740426,
//     sunset: 1674775909,
//   },
//   timezone: -21600,
//   id: 5074472,
//   name: 'Omaha',
//   cod: 200,
// };

// console.log('sampleResponse');
// console.log(JSON.stringify(sampleResponse, null, 2));
// console.log('filteredResponse');
// console.log(JSON.stringify(filterResponseData(sampleResponse), null, 2));
// console.log();

function kelvinToCelsius(kelvinTemp) {
  return kelvinTemp - 273.15;
}

function celsiusToFahrenheit(celsiusTemp) {
  return (celsiusTemp * 9) / 5 + 32;
}

// boolean unit: C or F

// function visisbili
