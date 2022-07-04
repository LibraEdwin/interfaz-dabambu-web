import { Mail, Name, Card, Close } from 'components/icons'
import { Input, Button } from 'components/common'
import {
  ModalPagoClose,
  ModalPagoContainer,
  ModalPagoWrapper,
  ModalPagoImage,
  ModalPagoForm
} from './modalPago.styled'
import { useRouter } from 'next/router'

const ModalPago = ({ close, monto, idPedido }) => {
  const { push } = useRouter()
  const handleComprar = () => {
    /**
     * Si todos los datos de la tarjeta fueron correctos se realiza el
     * registro del comprobante y el cambio del estado del pedido
     */
    fetch(`${process.env.URI_API}/api-dabambu-service/comprobantes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ pedidoId: idPedido })
    })
      .then(res => res.json())
      .then(res => {
        const { body } = res
        if (body._id) {
          /**
           * Se cambia el estado del pedido
           */
          fetch(`${process.env.URI_API}/api-dabambu-service/pedidos/${idPedido}`,
            {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                estado: 'En proceso'
              })
            })
            .then(res => {
              push(`/comprar/confirmacion-compra/${body._id}`)
            })
            .catch(err => console.log(err))
        }
      }).catch(err => console.log(err))
  }

  return (
    <ModalPagoWrapper>
      <ModalPagoContainer>
        <ModalPagoClose onClick={close}>
          <Close />
        </ModalPagoClose>
        <ModalPagoImage src="/visanet.png" />
        <ModalPagoForm onSubmit={(e) => e.preventDefault()}>
          <div className="data-tc">
            <Input placeholder='Numero de tarjeta' icon={<Card />} />
            <Input className="cvv" placeholder='CVV' />
          </div>
          <Input placeholder='Nombre del titular' icon={<Name />} />
          <Input placeholder='Correo electronico' icon={<Mail />} />
          <Button
            variante="primary"
            width="-webkit-fill-available"
            border={8}
            as="a"
            onClick={handleComprar}
          >
            Pagar S/. {monto}
          </Button>
        </ModalPagoForm>
      </ModalPagoContainer>
    </ModalPagoWrapper>
  )
}

export default ModalPago
