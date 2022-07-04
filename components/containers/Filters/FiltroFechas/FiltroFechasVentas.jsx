import PropTypes from 'prop-types'
import { Button } from 'components/common'
import { Search } from 'components/icons'
import { FilterWrapper, FormControl, FormLabel } from './filter.styled'
import { formatDate } from 'lib/AlertMessage'

const FiltroFechasVentas = ({
  labelDesde,
  labelHasta,
  onChangeDesde,
  onChangeHasta,
  getResultados,
  isLoading
}) => {
  const today = formatDate(new Date(), 'YYYY-MM-DD')

  return (
    <FilterWrapper>
      <div>
        <FormLabel>{labelDesde}</FormLabel>
        <FormControl
          defaultValue={today}
          type="date"
          name='desde'
          onChange={onChangeDesde} />
      </div>
      <div>
        <FormLabel>{labelHasta}</FormLabel>
        <FormControl
          defaultValue={today}
          type="date"
          name='hasta'
          onChange={onChangeHasta} />
      </div>
      <Button
        variante="outline"
        onClick={getResultados}
        isLoading={isLoading}
      ><Search /> Consultar </Button>
    </FilterWrapper>
  )
}

FiltroFechasVentas.propTypes = {
  labelDesde: PropTypes.string,
  labelHasta: PropTypes.string,
  isLoading: PropTypes.bool,
  onChangeDesde: PropTypes.func,
  onChangeHasta: PropTypes.func,
  getResultados: PropTypes.func
}

export default FiltroFechasVentas
