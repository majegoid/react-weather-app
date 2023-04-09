import { useEffect, useState } from 'react';
// import { fetchWeatherData } from './api/queries';
import { SearchForm } from './components/SearchForm';
import { WeatherData } from './components/WeatherData';

function App() {
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    // async function fetcher() {
    //   const filteredData = await fetchWeatherData('london');
    //   console.log(filteredData);
    // }
    // fetcher();
  }, []);

  return (
    <div className='app'>
      <SearchForm />
      <WeatherData />
    </div>
  );
}

export default App;
