import { useContext, useEffect } from 'react';
import { fetchWeatherData } from './api/queries';
import { SearchInput } from './components/SearchInput';
import { WeatherData } from './components/WeatherData';
import { AppContext } from './contexts/AppContext';

function App() {
  const appContext = useContext(AppContext);
  const { weatherData, searchTerm, searchResultList } = appContext.state;
  const { setWeatherData } = appContext.actions;

  useEffect(() => {
    // async function fetcher() {
    //   const filteredData = await fetchWeatherData(searchTerm);
    //   console.log(filteredData);
    //   setWeatherData(filteredData);
    // }
    // fetcher();
  }, []);

  async function getWeatherData() {
    const filteredData = await fetchWeatherData(searchTerm);
    setWeatherData(filteredData);
  }

  return (
    <div className='app'>
      <SearchInput
        searchResultList={searchResultList}
        handleSearch={getWeatherData}
      />
      {/* <SearchForm /> */}
      <WeatherData weatherData={weatherData} />
    </div>
  );
}

export default App;
