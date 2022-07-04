import styled from 'styled-components'

export const DetalleCompraWrapper = styled.div` 
  padding: 0 1rem;

  @media screen and (min-width: 1200px) {
    padding: 0 2rem;
  }  
`

export const DetalleCompraContainer = styled.div` 
  padding: 3rem 0 1rem;

  @media screen and (min-width: 620px) {
    padding: 4rem 0;

    .row {
      padding: 0 5rem;
    }
  } 

  @media screen and (min-width: 960px) {
    padding: 4rem 0;

    .row {
      display: flex;
      padding: 0;
      gap: 2rem;
      margin-top: 4rem;
    }
  } 

  @media screen and (min-width: 1200px) {
    padding: 5rem 0 12rem;

    .row {
      gap: 5rem;
      margin-top: 6rem;
    }
  }
`

export const DetalleCompraProducto = styled.div` 
  @media screen and (min-width: 960px) {
    display: flex;
    gap: 2rem;
  }
`

export const FotoProducto = styled.figure` 
  width: 325px;
  height: 325px;
  position: relative;
  margin: auto;
`

export const DetailProductContainer = styled.div` 
  margin-top: 2rem;
  margin-bottom: 1.5rem;

  @media screen and (min-width: 960px){
    width: 50%;
  }
`

export const DetailProductTitle = styled.h3` 
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
`
export const DetailProductDescription = styled.p` 
  line-height: 25px;
  text-align: justify;
`
