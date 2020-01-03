import React from 'react';
import useFetchData from './utils/useFetchData'
import WeatherCard from './components/WeatherCard'
import SearchInput from './components/SearchInput'

// TODO
// key with unique id 
// better error handling
// ...

function App() {
  const [weather, fetchWeather] = useFetchData();
  console.log('data', weather, weather?.message)

  function handleFetchWeather(ev, query) {
    ev.preventDefault();
    fetchWeather(`weather?q=${query}`)
  }

  return (
    <>
      <header>
        <SearchInput fetchWeather={handleFetchWeather} />
      </header>

      <div>
        <WeatherCard weather={weather || {}} />
      </div>
    </>
  );
}

export default App;
