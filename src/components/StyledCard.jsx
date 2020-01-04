import styled from 'styled-components';

const StyledCard = styled.div`
  background: ${({ temp }) => temp <= 10 ? '#80cbc4' : temp <= 26 ? '#03a9f4' : temp => 27 ? '#ffb300' : '#f9f9f9'};
  border-radius: 16px;
  padding: 16px;
`


export default StyledCard