import {
  FormControl,
  FormLabel,
  FormWrapper,
  FormButton,
  FormGroup,
  FormErrorMessage
} from './form.styled'
import { useForm } from 'react-hook-form'
import { useGlobalContext } from 'context/GlobalContext'

const LoginCliente = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { signInClient, isLoginLoading } = useGlobalContext()

  const sendValues = ({ email, password }) => {
    signInClient(email, password)
  }

  return (
    <FormWrapper
      maxWidth={550}
      onSubmit={e => e.preventDefault()}>
      <FormGroup error={errors.email}>
        <FormLabel>
          Correo Electrónico
        </FormLabel>
        <FormControl
          type="email"
          required
          {...register('email', { required: 'Correo inválido', pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <FormErrorMessage>{errors.email.message}</FormErrorMessage>}
      </FormGroup>
      <FormGroup error={errors.password}>
        <FormLabel>
          Contraseña
        </FormLabel>
        <FormControl
          type="password"
          {...register('password', {
            required: 'Contraseña inválida',
            minLength: {
              value: 8,
              message: 'La contraseña debe tener mínimo 8 caracteres'
            }
          })}
        />
        {errors.password && <FormErrorMessage>{errors.password.message}</FormErrorMessage>}
      </FormGroup>
      <FormButton
        fullWidth
        type="submit"
        isLoading={isLoginLoading}
        onClick={handleSubmit(sendValues)}
      >
        Iniciar Sesión de compra
      </FormButton>
    </FormWrapper>
  )
}

export default LoginCliente
