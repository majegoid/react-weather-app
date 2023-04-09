export const addWeatherDataReducer = (state, action) => {
  const newWeatherData = action.payload;
  const {coord, weather, base, main, visibility, wind, clouds, dt, sys, timezone, id, name, cod} = newWeatherData;
  return {
    ...state,
    weatherDatas: {
      ...state.weatherDatas,
      [newWeatherData.id]: newWeatherData,
    },
  };
};

export const removeWeatherDataReducer = (state, action) => {
  const weatherDataId = action.payload;
  return {
    ...state,
    weatherDatas: state.weatherDatas.filter((a) => a.id !== weatherDataId),
  };
};

export const updateWeatherDataReducer = (state, action) => {
  const updatedWeatherData = action.payload;
  return {
    ...state,
    weatherDatas: state.weatherDatas.map((t) =>
      t.id === updatedWeatherData.id ? updatedWeatherData : t
    ),
  };
};
