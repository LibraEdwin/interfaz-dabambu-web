import styled, { css, keyframes } from 'styled-components'
import { MEDIA_BREAKPOINTS } from 'theme/variables'

export const FormWrapper = styled.form`
  padding: 2rem;
  border-radius: 0.5rem;
  max-width: ${({ maxWidth }) => `${maxWidth}px`};
  margin: 0 auto;
  
  ${MEDIA_BREAKPOINTS.laptop} {
    border: 1px solid ${({ theme }) => theme.colors.mainColor};
    border-radius: 1rem;
  }
`

const Spiner = keyframes`
to {
transform: rotate(360deg);
}
`

export const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* align-items: flex-end; */

  & > * {
    flex-shrink: 0;
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
`

export const FormCol = styled.div`
  ${MEDIA_BREAKPOINTS.laptop} {
    flex: 0 0 auto;
    width: ${({ size }) => handleWidth(size)}% !important;
  }
`

export const FormControl = styled.input`
  width: 100%;
  padding: 0.75rem 0.5rem;
  height: auto;
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.colors.mainColor};
`

export const FormLabel = styled.label`
  color: ${({ theme }) => theme.colors.mainColor};
  display: inline-block;
  margin-bottom: 0.4rem;
  font-weight: 700;
  font-size: 14px;
`

export const FormErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: 12px;
  font-weight: 500;
`

export const FormGroup = styled.div`
  position: relative;
  margin-bottom: 1.5rem;

  ${({ theme, error }) => error && css`
    &::after {
      content: '';
      display: block;
      width: 20px;
      height: 20px;
      position: absolute;
      top: 2.3rem;
      right: 1.3rem;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='red' class='bi bi-exclamation-circle' viewBox='0 0 16 16'%3E%3Cpath d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'/%3E%3Cpath d='M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain ;
    }

    ${FormControl} {
      &, &:focus {
        border-color: ${theme.colors.error} !important;
      }
    }
  `}
`

export const FormButton = styled.button`
  width: ${({ fullWidth }) => fullWidth && '100%'};
  background-color: ${({ theme }) => theme.colors.mainColor};
  border-style: none;
  padding: 0.75rem 0.5rem;
  color: white;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 18px;
  margin-bottom: 1.5rem;

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
      background-color: ${({ theme }) => theme.colors.mainColor};
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

function handleWidth (size) {
  switch (size) {
    case 1:
      return 8.33333333
    case 2:
      return 16.66666667
    case 3:
      return 25
    case 4:
      return 33.33333333
    case 5:
      return 41.66666667
    case 6:
      return 50
    case 7:
      return 58.33333333
    case 8:
      return 66.66666667
    case 9:
      return 75
    case 10:
      return 83.33333333
    case 11:
      return 91.66666667
    default:
      return 100
  }
}
