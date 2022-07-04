import { SelectModalContainer } from './selectModal.styled'
import PropTypes from 'prop-types'
import { useEffect, useRef } from 'react'

export const SelecModalDatosCliente = ({ label, width, state, id }) => {
  const first = useRef()

  const titulo = label.toLowerCase()
  // console.log(state)
  // console.log(id)

  useEffect(() => {
    // setTimeout(() => {
    if (titulo === 'departamento') {
      first.current.selectedIndex = parseInt(id) - 1
      console.log(first.current.selectedIndex)
    } else if (titulo === 'provincia') {
      console.log('provincia', id)
      first.current.value = id
      console.log(first.current.value)
    } else if (titulo === 'distrito') {
      console.log('distrito', id)
      first.current.value = id
      console.log(first.current.value)
    }
    // }, 1000);
  }, [])
  // document.addEventListener('DOMContentLoaded', (event) => {
  //   console.log('123')
  // });

  return (
    id && (
      <SelectModalContainer width={width} >
        <span>{label}</span>
        <select
          name={titulo}
          ref={first}>
          {
            state.map((element, i) => {
              return (
                <option key={`select-datos-clientes-${element._id + i}`} value={element._id} >{element.nombre}</option>
              )
            })
          }
        </select>
      </SelectModalContainer>
    )
  )
}

SelecModalDatosCliente.propTypes = {
  width: PropTypes.string
}
