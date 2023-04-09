import { createContext, useReducer } from 'react';
import { sampleWeatherData } from '../db/dummy';
import {
  addWeatherDataReducer,
  removeWeatherDataReducer,
  updateWeatherDataReducer,
} from './reducers/reducers';

export const AppContext = createContext();

export const appStateReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_WEATHER_DATA':
      return addWeatherDataReducer(state, action);
    case 'REMOVE_WEATHER_DATA':
      return removeWeatherDataReducer(state, action);
    case 'UPDATE_WEATHER_DATA':
      return updateWeatherDataReducer(state, action);
    default:
      return state;
  }
};

export const AppContextProvider = ({ children }) => {
  const { sampleId } = sampleWeatherData;

  const [state, dispatch] = useReducer(appStateReducer, {
    searchValue: '',
    weatherData: { [sampleId]: sampleWeatherData } || {},
  });

  // timers
  const addWeatherData = (timer) => {
    dispatch({
      type: 'ADD_TIMER',
      payload: timer,
    });
  };

  const removeWeatherData = (timerId) => {
    dispatch({
      type: 'REMOVE_TIMER',
      payload: timerId,
    });
  };

  const updateWeatherData = (updatedTimer) => {
    dispatch({
      type: 'UPDATE_TIMER',
      payload: updatedTimer,
    });
  };

  return (
    <AppContext.Provider
      value={{
        state: {
          ...state,
        },
        actions: {
          addWeatherData,
          removeWeatherData,
          updateWeatherData,
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
