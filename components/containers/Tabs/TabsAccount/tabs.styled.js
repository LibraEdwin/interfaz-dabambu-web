import styled from 'styled-components'
import { MEDIA_BREAKPOINTS } from 'theme/variables'

export const TabsWrapper = styled.div``

export const Tabs = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 0 auto;
  width: 100%;

  ${MEDIA_BREAKPOINTS.laptop} {
    margin-bottom: 3rem;
  }
`

export const TabsItem = styled.li``

export const TabsButton = styled.button`
  background-color: transparent;
  border-style: none;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(0,0,0,0.4);
  cursor: pointer;
  color: ${({ theme }) => theme.colors.mainColor};
  font-weight: 400;
  font-family: "Montserrat",sans-serif;
  font-size: 18px;

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.colors.mainColor};
    font-weight: 600;
  }

  ${MEDIA_BREAKPOINTS.laptop} {
    font-size: 1.4rem;
  }
`

export const TabContent = styled.div``
