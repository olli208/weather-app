import React, { useState } from 'react';

function SearchInput({ fetchWeather }) {
  const [query, setQuery] = useState('');

  return (
    <>
      <form>
        <label>
          search:
            <input type="text" onChange={e => setQuery(e.currentTarget.value)} />
        </label>
        <input type="submit" value="Submit" onClick={e => fetchWeather(e, query)} />
      </form>
    </>
  )
}

export default SearchInput;