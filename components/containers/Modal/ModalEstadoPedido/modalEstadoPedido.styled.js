import styled from 'styled-components'

export const ModalInputContainer = styled.div` 
  height: 40px;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1rem;
  color: #4C2913;

  span {
    font-size: 18px;
  }

  input {
    border: none;
    font-size: 18px;
    line-height: 22px;
    color: #4C2913;
    font-weight: 600;
    height: 40px;
    // width: 260px;    

    &:hover {
      border-radius: 5px;
      outline: none;
      border: 1px solid gray;
    }
  }
`

export const ModalSelectContainer = styled.div` 
  height: 40px;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1rem;

  span {
    font-size: 18px;
  }

  select {
    height: 40px;
    width: 260px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #4C2913;
  }
`
