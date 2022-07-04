import styled from 'styled-components'

export const NavWrapper = styled.nav`
  border: 1px solid rgba(81, 114, 1, 0.3);
  padding: 0 1.5rem;
  position: fixed;
  width: 100%;
  z-index: 100;
`

export const NavContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`

export const NavItem = styled.li`
    &:nth-child(1) {
    cursor: pointer;
    display: flex;
  }

  &:nth-child(2) {
    color: black;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
  }

  &:nth-child(3) {
    border: 1px solid rgba(81, 114, 1, 0.5);
    border-radius: 5px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  @media screen and (min-width: 768px){
    &:nth-child(2) {
      font-size: 18px;
    }

    &:nth-child(3) {
      padding: 10px 25px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  @media screen and (min-width: 920px){
    &:nth-child(2) {
      font-size: 24px;
    }
  }
`

export const NavUser = styled.span``

export const NavButtonBack = styled.button`
  display: inline-flex;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;
  border-style: none;
  background: transparent;
  text-decoration: none;
  color: #517201;
  border: 1px solid transparent;
  line-height: 1.75;
  font-weight: 400;
  margin-right: 1.5rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
`

export const ButtonLogout = styled.button`
  display: inline-flex;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;
  border-style: none;
  background: transparent;
  text-decoration: none;
  color: #517201;
  border: 1px solid transparent;
  line-height: 1.75;
  font-weight: 400;
  cursor: pointer;
`

export const ButtonAction = styled.ul` 
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 1.5rem;
  top: calc(100% + 0.1rem);
  background: white;
  padding: 0.5rem;
  border-radius: 0.25rem;
  box-shadow: 0px 0px 20px rgb(93 124 17 / 39%);

  &::before {
    content: '';
    display: block;
    position: absolute;
    bottom: 100%;
    right: 0.5rem;
    border-left: 10px solid transparent;
    border-top: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid white;
  }

  button {
    display: inline-flex;
    gap: 0.4rem;
    justify-content: center;
    align-items: center;
    border-style: none;
    background: transparent;
    text-decoration: none;
    color: #517201;
    border: 1px solid transparent;
    line-height: 1.75;
    font-weight: 400;

    border-radius: 0.25rem;
    white-space: nowrap;
    transition: 0.3s ease;
    padding: 0.55rem 1.2rem;
    cursor: pointer;

    &:hover {
      background-color: rgb(93 124 17 / 39%);
    }
  }

  li {
    display: flex;
    flex-direction: column;
  }
`
