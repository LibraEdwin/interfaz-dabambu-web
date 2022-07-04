import styled from 'styled-components'

export const ModalPagoWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0; 
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  // z-index: 999;
`

export const ModalPagoContainer = styled.div`
  width: 90%;
  max-width: 660px;
  padding: 1rem 1rem 3rem;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.2);
  background: #FFFFFF;
  border-radius: 8px;
  overflow: hidden;
  color: #4C2913;

  @media screen and (min-width: 768px){
    width: 588px;
    padding: 3rem;
  }
`

export const ModalPagoClose = styled.button`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  background: transparent;
  border-style: none;
  margin-left: auto;
  margin-bottom: 1rem;
  cursor: pointer;
`

export const ModalPagoImage = styled.img`
  width: 211px;
  height: 140px;
  display: flex;
  margin: auto;
`

export const ModalPagoForm = styled.form`
  .data-tc {
    display: flex;    
    gap: 1rem;
  }

  .cvv {
    padding: 0;
    text-align: center;
    width: 100%;
  }

  @media screen and (min-width: 768px){
    padding: 0 3rem 0;
  }
`
