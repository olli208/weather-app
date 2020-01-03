import React, { useEffect, useMemo } from 'react';
import useFetchData from '../utils/useFetchData';

function WeatherCard({ weather: current }) {
  const [forecast, fetchForecast] = useFetchData();
  const { name, weather, message } = current;

  useEffect(() => {
    // CHECK IF THERE IS DATA
    if (!name) return
    fetchForecast(`forecast?q=${name}`)

    return () => {
      // cleanup...
    };
  }, [name]);

  console.log('forecast', forecast, name)

  const ForecastList = useMemo(() => {
    // check first objects time (since this is the most current weather time (?))
    // Check that time for the nex 5 days
    // return them
    if (forecast) {
      const firstDate = new Date(forecast.list[0].dt_txt)
      console.log(firstDate.getTime());

      return (<ul>
        {forecast?.list.map((el, index) => {
          var date = new Date(el.dt_txt)
          console.log('date', date, date.getTime)
          return firstDate.getHours() === date.getHours() && el && <li>{el.main.temp}</li>
        })
        }
      </ul>
      )
    }
  }, [forecast]);

  return (
    <>
      <h2>{current && message}</h2>
      {!!weather && !message &&
        <>
          <div>
            <h1> weather in {name}:</h1>
            {!weather ? 'loading' : weather.map((el, i) => <div key={i}>{el.description}</div>)}
          </div>

          <div>
            forecast:
            {ForecastList}
          </div>

        </>
      }

    </>
  )
}

export default WeatherCard;