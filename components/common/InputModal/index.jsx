import { InputModalWrapper, InputModalIcon, InputModalItem, InputModalContainer } from './inputModal.styled'
import { Edit } from 'components/icons'
import { useState } from 'react'
import Button from '../Button'

const InputModal = ({ label, type, ...res }) => {
  const [boton, setBoton] = useState(true)

  return (
    <InputModalWrapper>
      <span>{label}</span>
      <InputModalContainer>
        <InputModalItem type={type} disabled={boton} {...res} />
        <InputModalIcon>
          <Button onClick={() => setBoton(false)}>
            <Edit />
          </Button>
        </InputModalIcon>
      </InputModalContainer>
    </InputModalWrapper>
  )
}

export default InputModal
