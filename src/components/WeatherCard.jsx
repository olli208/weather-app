import React, { useEffect, useMemo } from 'react';
import useFetchData from '../utils/useFetchData';
import FlexWrapper from './FlexWrapper';
import ForecastList from './ForecastList';
import StyledCard from './StyledCard';
import ResponsiveFlexContainer from './ResponsiveFlexContainer';
import Temp from './Temp';

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
    <ResponsiveFlexContainer>
      {message ?
        <h2>{message}</h2>
        :
        <div style={{ flexBasis: '50%' }}>
          <h3 style={{ marginBottom: '.5rem' }}>now</h3>
          <StyledCard temp={main.temp}>
            {!weather ? 'loading' :
              weather.map((el, i) => (
                <>
                  <FlexWrapper style={{ flexWrap: 'nowrap', marginBottom: '2rem' }}>
                    <div style={{ marginRight: '.5rem' }}>
                      <img src={`http://openweathermap.org/img/wn/${el.icon}.png`} alt="weather icon" />
                    </div>

                    <div>
                      <h2>it's <Temp num={main.temp} /> in {name}.</h2>
                      <p key={i}>{el.description}, feels like <Temp num={main.feels_like} /> with a minimum of <Temp num={main.temp_min} /> and a maximum of <Temp num={main.temp_max} />.</p>
                    </div>
                  </FlexWrapper>
                </>
              ))}
          </StyledCard>
        </div>
      }

      <div style={{ flexGrow: '1' }}>
        <h3 style={{ marginBottom: '.5rem' }}>next 5 days</h3>
        {ForecastListWrapper}
      </div>
    </ResponsiveFlexContainer>
  )
}

export default WeatherCard;