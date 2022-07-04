import styled, { css, keyframes } from 'styled-components'

const Spiner = keyframes`
to {
transform: rotate(360deg);
}
`
export const ButtonStyled = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => (props.border ? `${props.border}px` : '4px')};
  padding: 0.5em 1em;
  margin: 0;
  font-weight: 600;
  cursor: pointer;
  font-family: Montserrat;
  font-size: 1.1rem;
  column-gap: 0.5rem;
  background-color: transparent;
  text-transform: ${(props) => (props.text ? `${props.text}` : 'uppercase')};
  height: ${(props) => (props.height ? `${props.height}px` : '42px')};
  width: ${(props) => (props.width ? `${props.width}` : 'auto')};

  &:disabled {
    background:rgba(81, 114, 1, 0.4);
    color:white;
    border: none;
    cursor: no-drop;
  }
  
  @media screen and (max-width: 960px){
    font-size: 0.8rem;
  }

  ${({ variante, theme }) => {
    let cssFinal = ''

    if (variante === 'primary') {
      cssFinal += `
            background: ${theme.colors.mainColor};
            border: 1px solid ${theme.colors.mainColor};
            color: ${theme.colors.secondaryColor};
            `
    }

    if (variante === 'outline') {
      cssFinal += `
            background: ${theme.colors.secondaryColor};
            border: 2px solid ${theme.colors.mainColor};
            color: ${theme.colors.mainColor};
            `
    }

    if (variante === 'banner') {
      cssFinal += `
            background: ${theme.colors.thirdColor};
            border: 1px solid ${theme.colors.thirdColor};
            color: ${theme.colors.secondaryColor};
            width: 233px;
            height: 44px;
            font-size: 18px!important;
            `
    }
    if (variante === 'cerrar') {
      cssFinal += `
            background: ${theme.colors.thirdColor};
            border: 1px solid ${theme.colors.thirdColor};
            color: ${theme.colors.secondaryColor};
            width: 233px;
            height: 44px;
            font-size: 18px!important;
            `
    }

    if (variante === 'guardar') {
      cssFinal += `
            font-family: Montserrat;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 22px;
            color: #517201;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 0.5rem;
            margin-top: 1.5rem;
            cursor: pointer;
            width: 170px;
            margin: auto;
            margin-right: 0;
            `
    }

    return css`
      ${cssFinal}
    `
  }}

  ${({ isLoading }) => isLoading && css`
  position: relative;

    &::before,
    &::after {
      content: '';
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 10;
    }

    &::before {
      background-color: white;
      border-radius: 0.25rem;
    }

    &::after {
      box-sizing: border-box;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;
      margin-top: -10px;
      margin-left: -10px;
      border-radius: 50%;
      border: 2px solid white;
      border-top-color: ${({ theme }) => theme.colors.mainColor};
      animation: ${Spiner} .6s linear infinite;
    }
  `}

  @media print {
    display: none;
  }
`
