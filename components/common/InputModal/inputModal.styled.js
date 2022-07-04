import styled from 'styled-components'

export const InputModalWrapper = styled.div`
  border: none;
  width: 100%;
  height: 60px;
  font-size: 18px;
  column-gap: 1rem;

  display: flex;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: space-between;

  span {
    width: 140px;
    text-align: initial;

  }
`

export const InputModalContainer = styled.div` 
  display: flex;
  align-items: center;
  width: 290px;

  // &:hover {
  //   border-radius: 8px;
  //   color: var(--border-color);
  //   border: 1px solid #c4c4c4;
  //   background: gray;
  //   outline: none;
  // }
`

export const InputModalIcon = styled.div`
  display: flex;
  cursor: pointer;
`

export const InputModalItem = styled.input`
  height: 40px;
  width: 17rem;
  border: none;  

  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #4C2913;

  &:hover {
    border-radius: 8px;
    color: var(--border-color);
    background: rgb(158, 158, 158, 0.18);
    border: none;
  }

  // &:active {
  //   border-radius: 8px;
  //   color: var(--border-color);
  //   border: 1px solid #c4c4c4; 
  //   background: transparent;   
  // }
`

export const TexareaModalItem = styled.textarea`
  height: 80px;
  width: 17rem;
  border: none;  

  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #4C2913;

  &:hover {
    border-radius: 8px;
    color: var(--border-color);
    background: rgb(158, 158, 158, 0.18);
    border: none;
  }

  // &:active {
  //   border-radius: 8px;
  //   color: var(--border-color);
  //   border: 1px solid #c4c4c4; 
  //   background: transparent;   
  // }
`
