import styled from 'styled-components';

const ResponsiveFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 1024px ) {
		flex-direction: row;
	}
`

export default ResponsiveFlexContainer