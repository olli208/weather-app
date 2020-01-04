import React from 'react';
import styled from 'styled-components';
import StyledCard from './StyledCard';
import Temp from './Temp'

const Small = styled.span`
  font-size: .8rem;
  display: block;
`

const StyledList = styled.div`
  padding: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const StyledListItem = styled(StyledCard)`
  position: relative;
  padding: .5rem 1rem;
  display: flex;
  margin-bottom: .5rem;
  flex-basis: 20%;

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
                <Small>{date.toDateString().split(' ')[0]}</Small>
                <Temp num={temp} style={{ fontWeight: '700' }} />
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