function kelvinToCelsius(kelvinTemp) {
  return kelvinTemp - 273.15;
}

function celsiusToFahrenheit(celsiusTemp) {
  return ((celsiusTemp * 9) / 5 + 32).toFixed(0);
}

export const displayTemp = (kelvinTemp, isFahrenheit = false) => {
  const celsiusTemp = kelvinToCelsius(kelvinTemp).toFixed(0);
  return isFahrenheit
    ? `${celsiusTemp}°C`
    : `${celsiusToFahrenheit(celsiusTemp)}°F`;
};
