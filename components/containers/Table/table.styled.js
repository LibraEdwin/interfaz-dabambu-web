import styled from 'styled-components'

export const TableWrapper = styled.table`
  width: 100%;
  font-family: "Montserrat",sans-serif;
  border: none;
`

export const TableHead = styled.thead``

export const TableBody = styled.tbody``

export const TableRow = styled.tr`
  width: 100%;

  th, td {
    font-size: 13px;
  }
`

export const TableCol = styled.th`
  padding: 0.5rem 0.24rem;
  width: ${({ size }) => size * 10}%;
`

export const TableColTd = styled.td.attrs({
  colSpan: 7
})`
  padding: 0.5rem 0.24rem;
  width: ${({ size }) => size * 10}%;
  text-align: center;
`
