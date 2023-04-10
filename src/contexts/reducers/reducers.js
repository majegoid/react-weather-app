export const setSearchTermReducer = (state, action) => {
  const searchTerm = action.payload;
  return {
    ...state,
    searchTerm: searchTerm,
  };
};

export const setWeatherDataReducer = (state, action) => {
  const weatherDataToSet = action.payload;
  return {
    ...state,
    weatherData: weatherDataToSet,
  };
};
