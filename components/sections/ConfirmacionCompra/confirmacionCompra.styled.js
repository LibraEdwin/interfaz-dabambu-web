import styled from 'styled-components'
import { MEDIA_BREAKPOINTS } from 'theme/variables'

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`

export const Lead = styled.h5`
  text-align: center;
  color: black;
  font-size: 1rem;
`

export const HeadDetail = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  ${MEDIA_BREAKPOINTS.tablet} {
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
  }
`

export const HeadDetailCol = styled.div`
  border-bottom: 1px dashed #aaa;
  padding: 1rem;
  text-align: center;
  color: #2c2c2c;

  h5 {
    color: black;
    margin-bottom: 1rem;
  }

  ${MEDIA_BREAKPOINTS.tablet} {
    text-align: left;
    padding: 0 1rem 0 0;
    border-bottom: none;
    border-right: 1px dashed #aaa;

    &:last-child {
      border-right: none;
    }
  }
`

export const TitleTable = styled.div``

export const Wrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`

export const Content = styled.div`
  background: #fafafa;
  padding: 1.5rem;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 10px;
    background-color: transparent;
    background-image: radial-gradient(farthest-side, rgba(0, 0, 0, 0) 6px, rgba(250,250,250, 1) 0);
    background-size: 15px 15px;
  }

  &::before {
    top: -10px;
    background-position: -3px -5px, 0 0;
  }

  &::after {
    bottom: -10px;
    background-position: -3px 2px, 0 0;
  }

  ${MEDIA_BREAKPOINTS.tablet} {
    padding: 3rem 2rem;
  }
`

export const Details = styled.table`
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  border: none;
  font-family: inherit;

  tr {
    border-bottom: none;
  }

  th,
  td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px dashed #aaa;

    &:last-child {
      text-align: right;
    }
  }
`

export const DetailsHead = styled.thead`
  width: 100%;

  th:first-child {
    width: 65%;

    ${MEDIA_BREAKPOINTS.tablet} {
      width: 80%;
    }
  }
`

export const DetailsBody = styled.tbody`
  color: #2c2c2c;
`

export const DetailsFoot = styled.tfoot`
  border-bottom: 3px double #aaa;
`

export const InfoTable = styled.table`
  font-family: inherit;
  border: none;
  margin: 0 auto;
  table-layout: auto;
  box-sizing: initial;

  tr {
    border-bottom: none;
    height: 0;
  }

  th,
  td {
    padding: 0 0.75rem;
    text-align: left;
    border-right: 1px dashed #aaa;
    border-bottom: 0;
    height: auto;
    white-space: nowrap;

    &:last-child {
      text-align: right;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const InfoTableHead = styled.thead`
  th {
    font-size: 12px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`
export const InfoTableBody = styled.tbody`
  td {
    padding-top: 0.75rem;
    font-size: 14px;
  }

  span {
    display: none;
  }

  @media (max-width: 768px) {
    display: block;
    width: 100%;

    tr {
      display: flex;
      flex-direction: column;
      height: auto;
      width: 100%;
    }

    td,
    th {
      padding: 0.5rem;
      height: auto;
      border-right: none;
      width: 100%;
      display: flex;
      border-bottom: 1px dashed #aaa;

      &:last-child {
        text-align: left;
    }

      span {
        font-weight: 700;
        font-size: 12px;
        display: block;
        margin-right: auto;
      }
    }
  }
`
