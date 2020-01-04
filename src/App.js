import React from 'react';
import useFetchData from './utils/useFetchData'
import WeatherCard from './components/WeatherCard'
import SearchInput from './components/SearchInput'
import GlobalStyle from './global/GlobalStyle';
import Section from './components/Section';

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
      <GlobalStyle />
      <Section as="header" isCentered>
        <SearchInput fetchWeather={handleFetchWeather} />
      </Section>


      {weather && (
        <Section isCentered>
          <WeatherCard weather={weather} message={weather.message} />
        </Section>
      )}
    </>
  );
}

export default App;
