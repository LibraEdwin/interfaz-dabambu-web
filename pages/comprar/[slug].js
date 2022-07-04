import { WrapperCompra } from 'theme/mixins'
import DetalleCompra from 'components/containers/DetalleCompra'
import ActionsDetail from 'components/containers/ActionsDetail'
import UserLogin from 'components/common/UserLogin'
import { useGlobalContext } from 'context/GlobalContext'
import React from 'react'
import Cuenta from '../cuenta'

const Comprar = ({ producto }) => {
  const { loggedInClient, isToken } = useGlobalContext()

  return (
    <>
      {isToken
        ? <WrapperCompra>
          <ActionsDetail>
            <UserLogin user={loggedInClient.nombre} />
          </ActionsDetail>
          <DetalleCompra
            name={producto?.nombre}
            description={producto?.descripcion}
            price={producto?.precio}
            picture={`${process.env.DOMAIN_IMAGES + producto?.fotoProducto}`}
            id={producto._id}
          />
        </WrapperCompra>
        : <Cuenta />
      }
    </>
  )
}

export async function getServerSideProps({ params }) {
  const idProducto = await params.slug.split('-')[0]
  const urlProducto = `${process.env.URI_API}/api-dabambu-service/producto/${idProducto}`
  const resProducto = await fetch(urlProducto)
  const productoJson = await resProducto.json()
  const dataProducto = productoJson.body

  return {
    props: {
      producto: dataProducto.body
    }
  }
}

export default Comprar
