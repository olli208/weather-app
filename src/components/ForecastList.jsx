import React from 'react';
import styled from 'styled-components';
import StyledCard from './StyledCard';

const StyledList = styled.div`
  padding: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  
  @media (min-width: 1024px) {
    justify-content: space-between;
		flex-direction: row;
	}
`

const StyledListItem = styled(StyledCard)`
  position: relative;
  padding: .5rem 1rem;
  display: flex;
  margin-bottom: .5rem;
  flex-basis: 20%;


  @media (min-width: 1024px) {
    &:not(:last-child) {
      margin-right: .5rem;
    }
	}

  span {
    font-weight: 700;
  }

  img {
    height: auto;
    width: 2.5rem;
  }
`
// TODO add dates (or tommorow today three days etc...) 
function ForecastList({ firstDate, forecast, }) {
  return (
    <StyledList>
      {forecast?.list.map((el, index) => {
        var date = new Date(el.dt_txt)
        var temp = Math.round(el.main.temp)

        return firstDate.getHours() === date.getHours() && el && (
          el.weather.map((item, i) => (
            <StyledListItem temp={temp} key={index}>
              <div style={{ marginRight: '.5rem' }}><img src={`http://openweathermap.org/img/wn/${item.icon}.png`} alt="weather icon" /></div>

              <div>
                <span>{temp}°C</span>
                <p>{item.description}</p>
              </div>
            </StyledListItem>
          ))
        )
      })
      }
    </StyledList>
  )
};

export default ForecastList;