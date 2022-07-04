import styled from 'styled-components'

export const TitleCompraWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15rem;
  margin: auto;
  margin-bottom: 2rem;

  h2 {
    font-family: Comfortaa;
    font-weight: 700;
    font-size: 22px;
    line-height: 22px;
    text-align: center;
    margin-bottom: 1rem;
  }

  div {
    height: 2px;
    width: 100%;
    background: ${({ theme }) => theme.colors.mainColor}
  }
`
