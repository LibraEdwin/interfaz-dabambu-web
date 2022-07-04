import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  FormControl,
  FormRow,
  FormCol,
  FormLabel,
  FormWrapper,
  FormButton,
  FormGroup,
  FormErrorMessage
} from './form.styled'
import { alertMessage, successMessage } from 'lib/AlertMessage'

const RegistroCliente = ({ setTabLogin }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [departments, setDepartments] = useState([])
  const [provinces, setProvinces] = useState([])
  const [districts, setDistricts] = useState([])
  const password = useRef({})
  const { register, handleSubmit, formState: { errors }, watch } = useForm()

  password.current = watch('password', '')

  const onSubmit = (data) => {
    setIsLoading(true)

    fetch(`${process.env.URI_API}/api-dabambu-service/clientes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _id: data.email,
        nombre: data.nombre,
        celular: Number(data.celular),
        distrito: data.distrito,
        direccion: data.direccion,
        documento: data.documento,
        password: data.password
      })
    }).then(res => res.json())
      .then(res => {
        setIsLoading(false)

        if (res.codigo !== 201) {
          const errors = res.errores.join(',')
          return alertMessage(errors, 'error', 'Error')
        }

        successMessage('Registro completo!', 'Se registró correctamente')
        setTabLogin()
      })
      .catch(err => console.log(err))
  }

  const handleChangeDepartment = (e) => {
    const idDepartment = e.target.value
    fetch(`${process.env.URI_API}/api-dabambu-service/departamentos/${idDepartment}/provincias`)
      .then(res => res.json())
      .then(res => {
        const data = res.body
        setProvinces(data)
        setDistricts([])
      }).catch(err => console.log(err.message))
  }

  const handleChangeProvince = (e) => {
    const idProvice = e.target.value
    fetch(`${process.env.URI_API}/api-dabambu-service/provincias/${idProvice}/distritos`)
      .then(res => res.json())
      .then(res => {
        const data = res.body
        setDistricts(data)
      }).catch(err => console.log(err.message))
  }

  useEffect(() => {
    fetch(`${process.env.URI_API}/api-dabambu-service/departamentos`)
      .then(res => res.json())
      .then(res => {
        const data = res.body
        setDepartments(data)
      })
      .catch(err => console.log(err.message))
  }, [])

  return (
    <FormWrapper onSubmit={e => e.preventDefault()}>
      <FormRow>
        <FormCol size={4}>
          <FormGroup error={errors.email}>
            <FormLabel>Correo Electrónico</FormLabel>
            <FormControl
              type="email"
              {...register('email', { required: 'Por favor verifique el correo electrónico', pattern: /^\S+@\S+$/i })}
            />
            {errors.email && <FormErrorMessage>{errors.email.message}</FormErrorMessage>}
          </FormGroup>
        </FormCol>
        <FormCol size={5}>
          <FormGroup error={errors.nombre}>
            <FormLabel>Nombre y apellidos</FormLabel>
            <FormControl
              type="text"
              {...register('nombre', { required: 'Complete sus nombres y apellidos por favor' })}
            />
            {errors.nombre && <FormErrorMessage>{errors.nombre.message}</FormErrorMessage>}
          </FormGroup>
        </FormCol>
        <FormCol size={3}>
          <FormGroup error={errors.documento}>
            <FormLabel>Documento de identidad</FormLabel>
            <FormControl
              type="text"
              autocomplete="off"
              {...register('documento', { required: 'El documento de identidad es requerido' })}
            />
            {errors.documento && <FormErrorMessage>{errors.documento.message}</FormErrorMessage>}
          </FormGroup>
        </FormCol>
      </FormRow>
      <FormRow>
        <FormCol size={4}>
          <FormGroup>
            <FormLabel>Departamento de despacho</FormLabel>
            <FormControl as="select" onChange={handleChangeDepartment}>
              <option value="">Departamentos</option>
              {departments.length > 0 && departments.map(department => (
                <option
                  key={`departments-${department._id}`}
                  value={department._id}
                >
                  {department.nombre}
                </option>
              )
              )}
            </FormControl>
          </FormGroup>
        </FormCol>
        <FormCol size={4}>
          <FormGroup>
            <FormLabel>Provincia de despacho</FormLabel>
            <FormControl as="select" onChange={handleChangeProvince}>
              <option value="">Provincias</option>
              {provinces.length > 0 && provinces.map(province => (
                <option
                  key={`provinces-${province._id}`}
                  value={province._id}
                >
                  {province.nombre}
                </option>
              )
              )}
            </FormControl>
          </FormGroup>
        </FormCol>
        <FormCol size={4}>
          <FormGroup error={errors.distrito}>
            <FormLabel>Distrito de despacho</FormLabel>
            <FormControl
              as="select"
              {...register('distrito', { required: 'El distrito es obligatorio' })}>
              <option value="">Distritos</option>
              {districts.length > 0 && districts.map(district => (
                <option
                  key={`districts-${district._id}`}
                  value={district._id}
                >
                  {district.nombre}
                </option>
              )
              )}
            </FormControl>
            {errors.distrito && <FormErrorMessage>{errors.distrito.message}</FormErrorMessage>}
          </FormGroup>
        </FormCol>
      </FormRow>
      <FormRow>
        <FormCol size={6}>
          <FormGroup error={errors.direccion}>
            <FormLabel>Dirección para el despacho del producto</FormLabel>
            <FormControl
              type="text"
              autocomplete="off"
              {...register('direccion', { required: 'La dirección de despacho es obligatoria' })}
            />
            {errors.direccion && <FormErrorMessage>{errors.direccion.message}</FormErrorMessage>}
          </FormGroup>
        </FormCol>
        <FormCol size={6}>
          <FormGroup error={errors.celular}>
            <FormLabel>Celular de contacto</FormLabel>
            <FormControl
              type="text"
              {...register('celular', { required: 'El celular es requerido' })}
            />
            {errors.celular && <FormErrorMessage>{errors.celular.message}</FormErrorMessage>}
          </FormGroup>
        </FormCol>
      </FormRow>
      <FormRow>
        <FormCol size={4}>
          <FormGroup error={errors.password}>
            <FormLabel>Contraseña</FormLabel>
            <FormControl
              name="password"
              type="password"
              autocomplete="off"
              {...register('password', {
                required: 'Por favor ingrese su contraseña',
                minLength: {
                  value: 8,
                  message: 'La contraseña debe tener mínimo 8 caracteres'
                }
              })}
            />
            {errors.password && <FormErrorMessage>{errors.password.message}</FormErrorMessage>}
          </FormGroup>
        </FormCol>
        <FormCol size={4}>
          <FormGroup error={errors.password_repeat}>
            <FormLabel>Confirme su contraseña</FormLabel>
            <FormControl
              name="password_repeat"
              type="password"
              {...register('password_repeat', {
                validate: value => value === password.current || 'Las contraseñas no coinciden'
              })}
            />
            {errors.password_repeat && <FormErrorMessage>{errors.password_repeat.message}</FormErrorMessage>}
          </FormGroup>
        </FormCol>
        <FormCol size={4}>
          <FormButton
            fullWidth
            type="submit"
            className="mt-4"
            isLoading={isLoading}
            onClick={handleSubmit(onSubmit)}
          >registra tu cuenta</FormButton>
        </FormCol>
      </FormRow>
    </FormWrapper>
  )
}

export default RegistroCliente
