import { Button } from 'components/common'
import { Search } from 'components/icons'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { FilterWrapper, FormControl, FormLabel } from './filter.styled'

export default function FiltroFechas({ labelDesde, labelHasta, FiltroFecha, fecha, setFecha, url, onBlur, setDataFiltro }) {
  const [cargando, setCargando] = useState(false)

  function handleChange(event) {
    setFecha({
      ...fecha,
      [event.target.name]: event.target.value
    })
  }

  const button = async () => {
    try {
      setCargando(true)
      if (fecha.desde && fecha.hasta) {
        if (fecha.desde <= fecha.hasta) {
          const filtro = await fetch(url)
          const { data } = await filtro.json()
          FiltroFecha(data)
          setDataFiltro('')
        } else if (fecha.desde > fecha.hasta) {
          Swal.fire({
            title: 'La fecha de fin de la consulta debe ser mayor a la fecha de inicio',
            icon: 'warning'
          })
        }
      } else if (!fecha.desde || !fecha.hasta) {
        Swal.fire({
          title: 'Ingrese las fechas',
          icon: 'warning'
        })
      }
    } finally {
      setCargando(false)
    }
  }
  return (
    <FilterWrapper>
      <div>
        <FormLabel>{labelDesde}</FormLabel>
        <FormControl type="date" onChange={handleChange} name='desde' onBlur={onBlur} />
      </div>
      <div>
        <FormLabel>{labelHasta}</FormLabel>
        <FormControl type="date" onChange={handleChange} name='hasta' onBlur={onBlur} />
      </div>
      <Button isLoading={cargando} variante="outline" onClick={() => { button() }}><Search /> Consultar </Button>
    </FilterWrapper>
  )
}
