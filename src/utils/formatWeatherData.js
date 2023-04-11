import { getDateStringFromMs, getTimeStringFromMs } from './date';
import { displayTemp } from './temperature';

// excludes base, id, and cod
export const formatCurrentWeatherData = (weatherData, isCelsius = false) => {
  const {
    coord,
    weather,
    main,
    visibility,
    wind,
    clouds,
    dt,
    sys,
    timezone,
    name,
  } = weatherData || {};

  return {
    coord: {
      lon: coord?.lon.toFixed(4) || 'LAT',
      lat: coord?.lat.toFixed(4) || 'LON',
    } || { lon: 'LON', lat: 'LAT' },
    weather: weather?.map((w) => ({
      id: w.id,
      main: w.main || 'UNKNOWN',
      description: w.description || 'UNKNOWN',
      icon: w.icon || 'UNKNOWN',
    })) || [
      {
        id: 'UNKNOWN',
        main: 'UNKNOWN',
        description: 'UNKNOWN',
        icon: 'UNKNOWN',
      },
    ],
    main: {
      temp: main?.temp ? displayTemp(main?.temp, isCelsius) : 'XX°U',
      feels_like: main?.feels_like
        ? displayTemp(main?.feels_like, isCelsius)
        : 'XX°U',
      temp_min: main?.temp_min
        ? displayTemp(main?.temp_min, isCelsius)
        : 'XX°U',
      temp_max: main?.temp_max
        ? displayTemp(main?.temp_max, isCelsius)
        : 'XX°U',
      pressure: main?.pressure ? `${main?.pressure.toFixed(0)}mb` : 'XXXXmb',
      humidity: main?.humidity
        ? `${main?.humidity.toFixed(0)}g/m^3`
        : 'XXg/m^3',
    } || {
      temp: 'XX°U',
      feels_like: 'XX°U',
      temp_min: 'XX°U',
      temp_max: 'XX°U',
      pressure: 'XXXXmb',
      humidity: 'XXg/m^3',
    },
    visibility: visibility ? `${visibility.toFixed(0)}m` : 'XXXXXm',
    wind: {
      speed: wind?.speed ? `${wind?.speed.toFixed(1)}m/s` : 'XX.Xm/s',
      deg: wind?.deg ? `${wind?.deg.toFixed(1)}°` : 'XX.X°',
    } || { speed: 'XX.Xm/s', deg: 'XX.X°' },
    clouds: {
      all: clouds?.all ? `${clouds?.all.toFixed(0)}%` : 'XX%',
    } || { all: 'XX%' },
    dt: dt ? getDateStringFromMs(dt * 1000) : getDateStringFromMs(),
    sys: {
      type: sys?.type || 'TYPE',
      id: sys?.id,
      country: sys?.country ? `${sys?.country}` : 'COUNTRY',
      sunrise: sys?.sunrise
        ? getTimeStringFromMs(sys?.sunrise)
        : getTimeStringFromMs(),
      sunset: sys?.sunset
        ? getTimeStringFromMs(sys?.sunset)
        : getTimeStringFromMs(),
    } || {
      type: 'TYPE',
      country: 'COUNTRY',
      sunrise: 'SUNRISE',
      sunset: 'SUNSET',
    },
    timezone: timezone
      ? `UTC${timezone > 0 ? '+' : ''}${`${timezone / 3600}`.padStart(2, '0')}`
      : 'TIMEZONE',
    name: name || 'CITY',
  };
};

export const formatNextWeekWeatherData = (weatherData, isCelsius = false) => {
  console.log('weatherData');
  console.log(weatherData);
  return {};
};
