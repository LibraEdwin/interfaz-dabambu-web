import styled from 'styled-components'

export const SelectModalContainer = styled.div` 
  height: 40px;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 1rem;
  justify-content: space-between;    

  span {
    font-size: 18px;
    width: 140px;
    text-align: initial;
  }

  select {
    height: 40px;
    width: ${(props) => (props.width ? `${props.width}px` : '269px')};
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #4C2913;
  }
`

export const DivSelectValidados = styled.div` 
  width: 288.75px;
  .selectNormal{
    margin-top: 23px;
  }
  span{
    color: red;
    font-size: 14px;
    font-weight: bold;
    position: absolute;
    width: 288.75px;
  }
`
