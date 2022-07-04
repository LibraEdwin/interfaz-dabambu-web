import { TableTotalWrapper } from './tableTotal.styled'
const TableTotal = ({ string, total }) => {
  return (
    <TableTotalWrapper>
      {string} {total}
    </TableTotalWrapper>
  )
}

export default TableTotal
