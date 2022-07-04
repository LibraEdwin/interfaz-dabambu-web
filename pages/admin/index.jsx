import React from 'react'
import ButtonAdmin from 'components/common/ButtonAdmin'
import ArrowRight from 'components/icons/ArrowRight'
import Image from 'next/image'
import { useGlobalContext } from 'context/GlobalContext'
import Login from '../login'

const Admin = () => {
  const { isTokenUser } = useGlobalContext()

  return (
    <>
      {
        isTokenUser
          ? <div className="container">
            <div className="logo"><Image src="/logo_verde2.svg" width={212} height={42} /></div>
            <div className="grid-buttons">
              <ButtonAdmin to="/admin/registro-de-producto">Registro de Producto <ArrowRight /> </ButtonAdmin>
              <ButtonAdmin to="/admin/registro-ventas">Registro de Ventas <ArrowRight /> </ButtonAdmin>
              <ButtonAdmin to="/admin/registro-clientes">Registro de Clientes <ArrowRight /> </ButtonAdmin>
            </div>
          </div>
          : <Login />
      }
      <style jsx>{`
        .container {
          width: 95%;
          height: 100vh;
          max-width: 1000px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .grid-buttons {
          display: grid;
          gap: 2rem;            
        }

        .logo {
          text-align: center;
          margin-bottom: 3rem;
        }

        @media (min-width: 768px) {
          grid-template-columns: repeat(2, 1fr);
        }
      `}</style>
    </>
  )
}

Admin.layout = 'Admin'

export default Admin
