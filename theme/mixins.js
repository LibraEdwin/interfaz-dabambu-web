import styled, { css } from 'styled-components'
import { MEDIA_BREAKPOINTS, CONTAINER_MAX_WIDTHS } from './variables'
const gutterX = '1rem'

export const container = styled.div` 
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding-left: ${gutterX};
  padding-right: ${gutterX};
  display: flex;
  flex-direction: column;
`

export const section = styled.section` 
  padding-top: 6.5rem;
`

export const wrapperComprar = styled.div` 
  padding: 3rem 1rem 1rem;
  
  @media screen and (min-width: 1200px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }  
`

export const ContainerPedidos = styled.div` 
  padding: 2rem 10.6rem 13rem;
`

export const Container = styled(container)``

export const Wrapper = styled(section)``

export const ButtonBack = styled(section)`

`

export const ContainerMain = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding-left: ${gutterX};
  padding-right: ${gutterX};

  ${p => p.fluid ?? css`
    ${MEDIA_BREAKPOINTS.mobile} {
      max-width: ${CONTAINER_MAX_WIDTHS.sm};
    }
    ${MEDIA_BREAKPOINTS.tablet} {
      max-width: ${CONTAINER_MAX_WIDTHS.md};
    }
    ${MEDIA_BREAKPOINTS.laptop} {
      max-width: ${CONTAINER_MAX_WIDTHS.lg};
    }
    ${MEDIA_BREAKPOINTS.desktop} {
      max-width: ${CONTAINER_MAX_WIDTHS.xl};
    }
    ${MEDIA_BREAKPOINTS.desktopL} {
      max-width: ${CONTAINER_MAX_WIDTHS.xxl};
    }
  `}
`

export const ContainerPrint = styled.div`
  border: 6px solid rgba(0,0,0,0.3);
  padding: 2rem;
  min-height: 90vh;
  margin-top: 2rem;

  @media print{
    border: 0;
    padding: 0;
  }
`

export const WrapperCompra = styled(wrapperComprar)``
