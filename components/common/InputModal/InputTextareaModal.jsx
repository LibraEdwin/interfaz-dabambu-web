import { InputModalWrapper, InputModalIcon, InputModalContainer, TexareaModalItem } from './inputModal.styled'
import { Edit } from 'components/icons'
import { useState } from 'react'
import Button from '../Button'

const InputTextareaModal = ({ label, type, ...res }) => {
  const [boton, setBoton] = useState(true)

  return (
    <InputModalWrapper>
      <span>{label}</span>
      <InputModalContainer>
        <TexareaModalItem type={type} disabled={boton} {...res} />
        <InputModalIcon>
          <Button onClick={() => setBoton(false)}>
            <Edit />
          </Button>
        </InputModalIcon>
      </InputModalContainer>
    </InputModalWrapper>
  )
}

export default InputTextareaModal
