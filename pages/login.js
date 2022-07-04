import React from 'react'
import Image from 'next/image'
import Button from 'components/common/Button'
import { useForm } from 'react-hook-form'
import { useGlobalContext } from 'context/GlobalContext'

export default function login() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { signInUser } = useGlobalContext()

  const sendValues = ({ email, password }) => {
    signInUser(email, password)
  }

  return (
    <section className="grid__login">
      <div></div>
      <div className="container__login">
        <div className="container__login--logo">
          <Image src="/logo_verde2.svg" width={212} height={42} />
        </div>
        <h6 className="container__login--titulo">Acceso a plataforma</h6>
        <form className="container__login--formulario">
          <input
            placeholder="Usuario"
            id="usuario"
            name="usuario"
            type="email"
            className="validate"
            {...register('email', { required: '* Correo inválido' })}
          />
          {
            errors.usuario && <span className='show__errors'>{errors.usuario.message}</span>
          }
          <input
            placeholder="Contraseña"
            id="contraseña"
            name="contraseña"
            type="password"
            {...register('password', {
              required: '* Contraseña inválida',
              minLength: {
                value: 8,
                message: 'La contraseña debe tener mínimo 8 caracteres'
              }
            })}
          />
          {
            errors.password && <span className='show__errors'>{errors.password.message}</span>
          }
          {/* <button
            type="button"
            className="login__formulario--boton"
            onClick={handleClick}
          >
            ACCEDER
          </button> */}
          <Button
            variante="primary"
            type="submit"
            onClick={handleSubmit(sendValues)}
          >
            acceder
          </Button>
        </form>
      </div>
      <div></div>

      <style jsx>{`
          .grid__login {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 50px auto auto;
          }

          .container__login {
            display: flex;
            flex-direction: column;
            justify-self: center;
            align-self: center;
            justify-content: center;
            margin-top: 5rem;
          }

          .container__login--logo {
            text-align: center;
          }

          .container__login--titulo {
            justify-self: center;
            font-size: 24px;
            margin-top: 2.5rem;
            margin-bottom: 1rem;
            font-family: Comfortaa;
            text-align: center;
            font-weight: 400;
          }

          .container__login--formulario {
            display: grid;
            grid-template-rows: repeat(3, auto);
            row-gap: 1rem;
            margin-top: 1rem;
            justify-content: center;
          }

          input {
            height: 3rem;
            border: 1px solid #517201;
            border-radius: 5px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            color: #517201;
            padding-left: 1rem;
            width: 350px;
            height: 56px;
          }

          input::placeholder {
            color: #517201;
            font-family: Montserrat;
            font-size: 16px;
          }

          input:focus {
            outline: none;
            border-color: #517201;
          }

          .login__formulario--boton {
            width: 350px;
            height: 42px;
            border: 1px solid #517201;
            border-radius: 5px;
            background-color: #517201;
            color: #ffff;
            font-size: 18px;
            margin-top: 1rem;
            font-weight: 600;
            cursor: pointer;
            font-family: Montserrat;
            font-size: 18px;
          }

          .show__errors {
            color: red;
            font-size: 12px;
            font-weight: 500;
            height: 15px;
          }
        `
      }</style>
    </section>
  )
}

login.layout = 'Admin'
