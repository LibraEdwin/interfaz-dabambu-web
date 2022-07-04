import styled from 'styled-components'

// Contenedor

export const DetallePedidoWrapper = styled.div` 
  border: 8px solid rgba(0, 0, 0, 0.3);
  padding: 2rem 1rem 10rem;
  color: #585858;
  height: auto;
  overflow-x: auto;
`

export const DetallePedidoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  // font-family: "Comfortaa";

  h3 {
    font-size: 14px;
  }

  @media screen and (min-width: 768px){
    padding-left: 1rem;
    padding-right: 3rem;

    h3 {
      font-size: 18px!important;
    }
  }
`

export const DetallePedidoTitle = styled.div`
 span {
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;  
  color: #878787
 }
`

export const DetallePedidoDates = styled.div`
  display: flex;
  gap: 2rem;
`

export const DateContainer = styled.div` 
  display: flex;
  flex-direction: column;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 5rem;
`

export const TableName = styled.h3` 
  // font-family: Comfortaa;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #2E2E2E;
  margin-bottom: 1rem;

  @media screen and (min-width: 768px){
    font-size: 22px;
    margin-bottom: 2rem;
  }
`

// Tabla

export const DetallePedidoTable = styled.table`
  width: 100%;
  line-height: 18px;
  color: #585858;
  border: none;
  margin-bottom: 5rem;
  font-family: "Montserrat",sans-serif;

  .headers {
    font-weight: 700;
  }

  th {
    width: auto;
    font-size: 14px;
    font-weight: 400
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: auto;
    justify-content: center;
    border: none;
  }
`

export const DetallePedidoTotal = styled.div`

  margin-top: 4rem;
  margin-right: 1rem;
  display: flex;
  justify-content: flex-end;
  gap: 2rem;

  span {
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    min-width: 400px;
    text-align: center;
    padding: 0.5rem 0;
  }
`
