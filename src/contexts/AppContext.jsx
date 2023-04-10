import { createContext, useReducer } from 'react';
import { countryCapitals } from '../db/countryCapitals';
import { countryCapitalToString } from '../utils/countryCapitalToString';
import {
  setSearchTermReducer,
  setWeatherDataReducer,
} from './reducers/reducers';

export const AppContext = createContext();

export const appStateReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return setSearchTermReducer(state, action);
    case 'SET_WEATHER_DATA':
      return setWeatherDataReducer(state, action);
    default:
      return state;
  }
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appStateReducer, {
    searchTerm: '',
    searchResultList: countryCapitals.map((cc) => countryCapitalToString(cc)),
    weatherData: undefined,
  });

  console.log('AppContext');
  console.log(state);

  const setSearchTerm = (searchTerm) => {
    dispatch({
      type: 'SET_SEARCH_TERM',
      payload: searchTerm,
    });
  };

  const setWeatherData = (weatherDataToSet) => {
    dispatch({
      type: 'SET_WEATHER_DATA',
      payload: weatherDataToSet,
    });
  };

  return (
    <AppContext.Provider
      value={{
        state: {
          ...state,
        },
        actions: {
          setSearchTerm,
          setWeatherData,
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
