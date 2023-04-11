import React from 'react';
import clearSkyIcon from '../assets/weather/01d.svg';
import fewCloudsIcon from '../assets/weather/02d.svg';
import scatteredCloudsIcon from '../assets/weather/03d.svg';
import showerRainIcon from '../assets/weather/10d.svg';
import thunderstormIcon from '../assets/weather/11d.svg';
import snowIcon from '../assets/weather/13d.svg';
import mistIcon from '../assets/weather/50d.svg';
import unknownWeatherIcon from '../assets/weather/unknown.svg';

export const WeatherIcon = ({ iconId = 'Unknown' }) => {
  const iconCode = iconId.replace('n', 'd');

  switch (iconCode) {
    case '01d':
      return (
        <img
          className='weather-icon invert'
          src={clearSkyIcon}
          alt='Clear Sky Icon'
        />
      );
    case '02d':
      return (
        <img
          className='weather-icon invert'
          src={fewCloudsIcon}
          alt='Few Clouds Icon'
        />
      );
    case '03d':
    case '04d':
      return (
        <img
          className='weather-icon invert'
          src={scatteredCloudsIcon}
          alt='Scattered Clouds Icon'
        />
      );
    case '09d':
    case '10d':
      return (
        <img
          className='weather-icon invert'
          src={showerRainIcon}
          alt='Shower Rain Icon'
        />
      );
    case '11d':
      return (
        <img
          className='weather-icon invert'
          src={thunderstormIcon}
          alt='Thunderstorm Icon'
        />
      );
    case '13d':
      return (
        <img className='weather-icon invert' src={snowIcon} alt='Snow Icon' />
      );
    case '50d':
      return (
        <img className='weather-icon invert' src={mistIcon} alt='Mist Icon' />
      );
    default:
      return (
        <img
          className='weather-icon invert'
          src={unknownWeatherIcon}
          alt='Unknown Weather Icon'
        />
      );
  }
};
