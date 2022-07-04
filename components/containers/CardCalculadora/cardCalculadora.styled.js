import styled from 'styled-components'

export const CardCalculadoraWrapper = styled.div` 
  border: 1px solid ${({ theme }) => theme.colors.mainColor};
  border-radius: 10px;
  padding: 3rem 2rem;
  padding-bottom: 2.5rem;
  width: 100%;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;

  .line {
    height: 2px;
    background: ${({ theme }) => theme.colors.mainColor};
    margin-top: 1rem;
  }

  .item-button {
    margin-top: 0.5rem;
  }

  @media screen and (min-width: 1200px) {
    // max-width: 410px;
  }
`

export const CardCalculadoraItem = styled.div` 
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

export const CardCalculadoraInput = styled.input` 
  width: 78px;
  height: 42px;
  border: 1.5px solid ${({ theme }) => theme.colors.mainColor};
  font-weight: 500;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.mainColor};

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: auto;
} 
`
