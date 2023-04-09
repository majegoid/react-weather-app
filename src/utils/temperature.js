function kelvinToCelsius(kelvinTemp) {
  return kelvinTemp - 273.15;
}

function celsiusToFahrenheit(celsiusTemp) {
  return (celsiusTemp * 9) / 5 + 32;
}

export const displayTemp = (kelvinTemp, isFahrenheit = false) => {
  const celsiusTemp = kelvinToCelsius(kelvinTemp);
  return isFahrenheit
    ? `${celsiusTemp}°C`
    : `${celsiusToFahrenheit(celsiusTemp)}°F`;
};
