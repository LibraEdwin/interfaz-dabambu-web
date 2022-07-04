import styled, { css } from 'styled-components'

export const TagStatusWrapper = styled.button`
  width: 58px;
  height: 21px;
  border: none;
  outline: none;
  cursor: pointer;
  border: 1px solid #A58B1D;
  border-radius: 10px;  

  font-family: Montserrat;
  font-weight: 600;
  font-size: 8px;
  line-height: 10px;

  ${({ variante, theme }) => {
    let cssFinal = ''

    if (variante === 'Pendiente') {
      cssFinal += `
            background: ${theme.colors.secondaryColor};
            border: 1px solid ${theme.colors.mainColor};
            color: ${theme.colors.mainColor};
            `
    }

    if (variante === 'En proceso') {
      cssFinal += `
            background: ${theme.colors.secondaryColor};
            border: 1px solid ${theme.colors.mainColor};
            color: ${theme.colors.mainColor};
            `
    }

    if (variante === 'En camino') {
      cssFinal += `
            background: ${theme.colors.thirdColor};
            border: 1px solid #A58B1D;
            color: ${theme.colors.secondaryColor};
            `
    }

    if (variante === 'Entregado') {
      cssFinal += `
            background: ${theme.colors.mainColor};
            border: 1px solid ${theme.colors.mainColor};
            color: ${theme.colors.secondaryColor};
            `
    }

    return css`
      ${cssFinal}
    `
  }}
`
