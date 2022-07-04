import styled, { css, keyframes } from 'styled-components'

const Spiner = keyframes`
to {
transform: rotate(360deg);
}
`

export const ModalAdminWrapper = styled.div` 
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0; 
  // background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;


  animation: ease-in-out aparecer 1s;

  @keyframes aparecer {
    0%{
      opacity: 0.1;
      transform: scale(0.1);
    }
    75%{
      opacity: 0.3;
      transform: scale(1.2);
    }
    to{
      opacity: 1;
      transform: scale(1);
    }
  }
`

export const ModalAdminContainer = styled.div`   
  max-width: 550px;
  padding: 2.7rem 3rem 2.6rem;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.2);
  background: #FFFFFF;
  border-radius: 8px;
  overflow: hidden;
  color: #4C2913;
`
export const ModalAdminEncabezado = styled.div` 
  display: flex;
  margin: auto;
`

export const ModalAdminTitle = styled.h2` 
  font-weight: 700;
  font-size: 1.1rem;
  line-height: 22px;
  color: #4C2913;
  margin-bottom: 2rem;
  text-align: initial;
`

export const ModalAdminData = styled.div` 
  

`

export const ModalAdminSave = styled.h3` 
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
  width: 100px;
  margin: auto;
  margin-right: 0;

  ${({ cargando }) => cargando && css`
  
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
`

export const ModalAdminCerrar = styled.h3` 
  font-family: Montserrat;
  font-style: normal;
  display: flex;
  align-items: right;
  justify-content: flex-end;
  cursor: pointer;
  margin: auto;
  margin-top: 0;
  margin-right: 0;

  font-weight: 700;
  font-size: 1.1rem;
  line-height: 22px;
  color: black;
  margin-bottom: 2rem;
  text-align: initial;
`
