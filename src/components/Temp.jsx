import React from 'react';

function Temp({ num, style }) {
  return (
    <span style={{ fontSize: 'inherit', fontWeight: 'inherit', ...style }}>{Math.round(num)}°C</span>
  )
}

export default Temp