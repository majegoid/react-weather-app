import { useContext } from 'react';
import { fetchWeatherData } from './api/queries';
import { CurrentWeatherData } from './components/CurrentWeatherData';
import { SearchInput } from './components/SearchInput';
import { AppContext } from './contexts/AppContext';

function App() {
  const appContext = useContext(AppContext);
  const { weatherData, searchTerm, searchResultList } = appContext.state;
  const { setWeatherData } = appContext.actions;

  async function getWeatherData() {
    const filteredData = await fetchWeatherData(searchTerm);
    setWeatherData(filteredData);
  }

  console.log('weatherData');
  console.log(weatherData);
  return (
    <div className='app'>
      <h1>Current Weather</h1>
      <SearchInput
        searchResultList={searchResultList}
        handleSearch={getWeatherData}
      />
      <CurrentWeatherData weatherData={weatherData} />
    </div>
  );
}

export default App;
