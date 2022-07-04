import { PlaylistAdd, Save, Search } from 'components/icons'
import { useEffect, useRef } from 'react'
import { InputGroupWrapper, InputGroupIcon, InputGroupInput, InputGroupButton } from './modalCategorias.styled'

export default function InputGroup({ issetCategory, defaultValue, onChange, handleAdd, handleEdit, id }) {
  const refInput = useRef(null)

  useEffect(() => {
    refInput.current.focus()
  }, [defaultValue])
  return (
    <InputGroupWrapper htmlFor="input-search">
      <InputGroupIcon> <Search /> </InputGroupIcon>
      <InputGroupInput
        ref={refInput}
        id="input-search"
        name="name"
        type="text"
        value={defaultValue}
        placeholder="Nombre de categoría"
        onChange={onChange}
      />
      {!issetCategory && (
        <InputGroupButton onClick={() => handleAdd()}>
          <PlaylistAdd /> CREAR
        </InputGroupButton>
      )}
      {id && (
        <InputGroupButton onClick={() => handleEdit()}>
          <Save /> EDITAR
        </InputGroupButton>
      )}
    </InputGroupWrapper>
  )
}
