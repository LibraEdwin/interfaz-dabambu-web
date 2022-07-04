import { ButtonUpdateWrapper, ButtonUpdateIcon } from './buttonUpdate.styled'

const ButtonUpdate = ({ icon, ...rest }) => {
  return (
    <ButtonUpdateWrapper {...rest}>
      <ButtonUpdateIcon>{icon}</ButtonUpdateIcon>
    </ButtonUpdateWrapper>
  )
}

export default ButtonUpdate
