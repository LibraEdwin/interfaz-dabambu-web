import styled from 'styled-components'

export const UserLoginWrapper = styled.div` 
  display: flex;
  align-items: center;
  gap: 1rem;

  h3 {
    display: none;
  }

  @media screen and (min-width: 768px) {
    h3 {
      // font-family: ${({ theme }) => theme.fonts.login};
      font-weight: 400;
      font-size: 25px;
      line-height: 31px;
      display: block;
    }
  }
`

export const UserName = styled.div` 
  border: 1px solid #517201;
  border-radius: 10px;
  display: flex;
  padding: 0.5rem 1rem;
  gap: 1rem;
  font-weight: bold;
  font-size: 1rem;
  line-height: 25px;

  @media screen and (min-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 1.1rem;
  }
`
