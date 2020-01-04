import React, { useState } from 'react';
import styled from 'styled-components';

import FlexWrapper from './FlexWrapper';

const StyledHeader = styled.h3`
    font-weight: 700;
    font-size: 1.5em; 
`

const StyledInput = styled.div`
  position: relative;
  margin-bottom: 1rem;
  width: 100%;

  input {
    border: 0;
    border-bottom: 3px solid black;
    padding: .25rem 0;
    font-weight: 700;
    font-size: 1.5em; 
    background: none;
    
    &:focus + label {
      right: 0;
      margin-right: 0;
      width: 40%;
      padding-top: 5px;
    }
  }
`

function SearchInput({ fetchWeather }) {
  const [query, setQuery] = useState('');

  return (
    <form onSubmit={e => fetchWeather(e, query)}>
      <FlexWrapper isFullWidth>
        <StyledInput>
          <label htmlFor="search"><StyledHeader as="h3">whats the weather in</StyledHeader></label>
          <div>
            <input type="text" name="search" onChange={e => setQuery(e.currentTarget.value)} />
            <StyledHeader as="span">?</StyledHeader>
          </div>
        </StyledInput>
      </FlexWrapper>
    </form>
  )
}

export default SearchInput;