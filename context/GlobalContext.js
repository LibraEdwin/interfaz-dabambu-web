import React, { useState, useEffect, useContext } from 'react'
import { alertMessage } from '../lib/AlertMessage'
import jwt from 'jsonwebtoken'
import { useRouter } from 'next/router'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const { push } = useRouter()

  //* States Clientes *\\
  const [loginClient, setLoginClient] = useState({
    email: '',
    password: ''
  })
  const [loggedInClient, setLoggedInClient] = useState({})
  const [loginErrors, setLoginErrors] = useState({})
  const [isToken, setIsToken] = useState(false)
  const [token, setToken] = useState(null)

  //* States User *\\
  const [isTokenUser, setIsTokenUSer] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState({})

  const [isLoginLoading, setIsLoginLoading] = useState(false)

  //* Capturar valor de inputs Login Cliente *\\
  const handleOnChangeInput = (e) => {
    const value = e.target.value
    const inputName = e.target.name
    setLoginClient({ ...loginClient, [inputName]: value })
    setLoginErrors({})
  }

  //* Validar campos de Login Cliente *\\
  const validateEmptyInputs = () => {
    const errors = {}
    let haveError = false

    if (!loginClient.email) {
      errors.emailError = '* Campo requerido'
      haveError = true
    }

    if (!loginClient.password) {
      errors.passwordError = '* Campo requerido'
      haveError = true
    }

    setLoginErrors(errors)
    return haveError
  }

  //* Inicio de Sesion de Cliente *\\
  const signInClient = async (email, password) => {
    setIsLoginLoading(true)

    const uri = `${process.env.URI_API}/api-dabambu-service/clientes/login`
    const base64 = Buffer.from(`${email}:${password}`).toString('Base64')

    const header = new Headers()
    // header.append('Content-Type', 'application/json')
    header.append('Authorization', `Basic ${base64}`)

    fetch(uri, {
      method: 'POST',
      headers: header
      // headers: {
      //   Authorization: `Basic ${base64}`
      // }
    }).then(res => res.json())
      .then(res => {
        setIsLoginLoading(false)
        const { codigo } = res
        if (codigo === 401) {
          alertMessage(res.mensaje, 'error')
          setIsLoginLoading(false)
        } else {
          const jwt = res.token
          localStorage.setItem('tokenCliente', jwt)
          setIsToken(true)
          setToken(jwt)
          //  Construyendo ruta  //
          const getUrl = localStorage.getItem('url_product')
          // const url = getUrl.replace(/['"]+/g, '')
          push(`/comprar/${getUrl}`)
        }
      })
      .catch(err => {
        setIsLoginLoading(false)
        alertMessage('Hubo un error con el servidor, intentalo más tarde', 'error')
        console.log(err, 'error')
      })
  }

  // Boton Comprar con Tarjeta
  const handleButtonBuy = (url) => {
    localStorage.setItem('url_product', url)
    if (!isToken) {
      push('/cuenta')
    } else {
      push(`/comprar/${url}`)
    }
  }

  // Obtener token y pasar payload de cliente
  useEffect(() => {
    const getToken = localStorage.getItem('tokenCliente')

    if (getToken) {
      const payload = jwt.decode(getToken)
      setLoggedInClient(payload.usuario)
      localStorage.setItem('data_cliente', JSON.stringify(payload.usuario))
      setToken(getToken)
      setIsToken(true)
    }
  }, [token, isToken])

  useEffect(() => {
    const tokenUser = sessionStorage.getItem('token_usuario')
    if (tokenUser) {
      setIsTokenUSer(true)
    }

    const usuario = JSON.parse(sessionStorage.getItem('data_usuario'))
    if (usuario) {
      setLoggedInUser(usuario)
    }
  }, [isTokenUser])

  /* LOGIN USUARIO */
  const signInUser = async (email, password) => {
    const uri = `${process.env.URI_API}/api-dabambu-service/usuario/login`
    const base64 = Buffer.from(`${email}:${password}`).toString('Base64')

    fetch(uri, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${base64}`
      }
    }).then(res => res.json())
      .then(res => {
        console.log(res, 'res2 user')
        const { codigo } = res
        if (codigo === 401) {
          alertMessage(res.mensaje, 'error')
        } else {
          const getJWT = res.token
          sessionStorage.setItem('token_usuario', getJWT)
          if (getJWT) {
            const payload = jwt.decode(getJWT)
            sessionStorage.setItem('data_usuario', JSON.stringify(payload.usuario))
            push('/admin')
            setIsTokenUSer(true)
          }
        }
      })
      .catch(err => {
        alertMessage('Hubo un error con el servidor, intentalo más tarde', 'error')
        console.log(err, 'error')
      })
  }

  const logout = () => {
    sessionStorage.removeItem('token_usuario')
    sessionStorage.removeItem('data_usuario')
    setTimeout(() => {
      push('/login')
      setLoggedInUser({})
    }, 1000)
  }

  return (
    <AppContext.Provider
      value={{
        handleOnChangeInput,
        validateEmptyInputs,
        signInClient,
        handleButtonBuy,
        loginErrors,
        loggedInClient,
        isLoginLoading,
        isToken,
        isTokenUser,
        signInUser,
        loggedInUser,
        logout
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
