import styled from 'styled-components'
import { MEDIA_BREAKPOINTS } from 'theme/variables'

// TABLA CATEGORIAS
export const TablaCategoriasWrapper = styled.table`
  width: 100%;
`

export const TablaCategoriasName = styled.th`
  width: 60%;
  text-align: left;
  padding-left: 2rem;
`

export const TablaCategoriasActions = styled.th`
  width: 15%;
`
export const ButtonActions = styled.button`
  padding: 0.4rem;
  cursor: pointer;
  background: transparent;
  border-style: none;
  margin-left: 0.3rem;
`

export const ButtonEditAction = styled.label`
  cursor: pointer;
  display: inline-block;
  padding: 0.4rem;

  input {
    display: none;
  }
`

export const InputNameEdit = styled.input`
  padding: 0.5rem 0.7rem;
  height: auto;
  background-color: rgba(0,0,0,0.02);
  border-color: rgba(0,0,0,0.1);

  &:disabled {
    border: none;
    background: none;
  }
`

// INPUT
export const InputGroupInput = styled.input`
  border: none;
  width: 100%;
  padding-left: 3rem;

  &:focus {
    border: none;
  }
`
export const InputGroupButton = styled.button`
  position: absolute;
  left: initial;
  top: 0.25rem;
  right: 0.25rem;
  bottom: 0.25rem;
  cursor: pointer;
  color: var(--main-color);
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 700;
  padding-left: 1rem;
  padding-right: 1rem;
  background: white;
  border-style: none;
  transition: 0.3s ease-in;
  border-radius: 0.4rem;

  &:hover {
    background: #efefef;
  }
  &:active {
    background: #e7ede0;
    transform: scale(0.9);
  }
`

export const InputGroupIcon = styled.span`
  position: absolute;
  top: 1rem;
  left: 0.8rem;
  color: black;
`

export const InputGroupWrapper = styled.label`
  border: 1px solid #565656;
  border-radius: 0.4rem;
  position: relative;
  display: flex;
`

export const ModalCategorasContainer = styled.div`
  width: 98%;
  max-width: 660px;
  padding: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: white;
  overflow: hidden;

  ${MEDIA_BREAKPOINTS.tablet} {
    padding: 2rem;
  }
`

export const ModalCategoriasWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalCategoriasLoader = styled.span`
  display: block;
`

export const ModalButtonClose = styled.button`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  background: transparent;
  border-style: none;
  margin-left: auto;
  margin-bottom: 1rem;
  cursor: pointer;
`
