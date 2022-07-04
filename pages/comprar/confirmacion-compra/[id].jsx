import ConfirmacionCompra from 'components/sections/ConfirmacionCompra'
import { ContainerMain } from 'theme/mixins'

export default function ConfirmacionCompraPage({ comprobante, detallePedido }) {
  return (
    <ContainerMain className="mt-5 mb-5">
      <ConfirmacionCompra comprobante={comprobante} detallePedido={detallePedido} />
    </ContainerMain>
  )
}

export async function getServerSideProps({ params }) {
  const { id } = params

  const res = await fetch(`${process.env.URI_API}/api-dabambu-service/comprobantes/${id}`)
  const data = await res.json()
  const { pedidoId } = data.body
  const resDetalle = await fetch(`${process.env.URI_API}/api-dabambu-service/detallepedido/pedidoId/${pedidoId._id}`)
  const dataDetalle = await resDetalle.json()

  return {
    props: {
      comprobante: data.body,
      detallePedido: dataDetalle.body
    }
  }
}
