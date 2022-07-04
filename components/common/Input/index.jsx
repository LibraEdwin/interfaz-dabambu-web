import { Search } from 'components/icons'
import { InputWrapper, InputIcon, InputWrapperItem } from './input.styled'

const Input = ({ type, icon, ...res }) => {
  return (
    <InputWrapper type={type} {...res}>
      <Search />
      <InputIcon>{icon}</InputIcon>
      <InputWrapperItem type={type} {...res} />
    </InputWrapper>
  )
}

export default Input
