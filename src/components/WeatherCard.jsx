import React, { useEffect, useMemo } from 'react';
import useFetchData from '../utils/useFetchData';
import FlexWrapper from './FlexWrapper';
import ForecastList from './ForecastList'
import StyledCard from './StyledCard'

function WeatherCard({ weather: current }) {
  const [forecast, fetchForecast] = useFetchData();
  const { name, weather, message, main } = current;

  useEffect(() => {
    if (!name) return
    fetchForecast(`forecast?q=${name}`)

    return () => {
      // cleanup...
    };
  }, [name]);

  const ForecastListWrapper = useMemo(() => {
    // check first objects time (since this is the most current weather time (?))
    // Check that time for the nex 5 days

    if (forecast) {
      const firstDate = new Date(forecast.list[0].dt_txt)

      return (
        <ForecastList firstDate={firstDate} forecast={forecast} />
      )
    }
  }, [forecast]);

  return (
    <>
      <StyledCard temp={main.temp} style={{ marginBottom: '1.5rem' }}>
        {message ?
          <h2>{message}</h2>
          :
          <>
            {!weather ? 'loading' :
              weather.map((el, i) => (
                <>
                  <FlexWrapper style={{ flexWrap: 'nowrap', marginBottom: '2rem' }}>
                    <div style={{ marginRight: '.5rem' }}>
                      <img src={`http://openweathermap.org/img/wn/${el.icon}.png`} alt="weather icon" />
                    </div>

                    <div>
                      <h2>it's {Math.round(main.temp)}°C in {name}.</h2>
                      <p key={i}>{el.description}</p>
                    </div>
                  </FlexWrapper >
                </>
              ))}
          </>
        }
      </StyledCard>

      <div>
        <h3>next 5 days:</h3>
        {ForecastListWrapper}
      </div>
    </>
  )
}

export default WeatherCard;