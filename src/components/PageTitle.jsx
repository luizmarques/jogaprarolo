import styled from 'styled-components'

export const PageTitle = ({ children }) => (
  <H1Styled className='mt-4 text-center'>{children}</H1Styled>
)

const H1Styled = styled.h1`
  font-size: 1.75rem;
  font-weight: 400;
  color: #1117A3;
`
