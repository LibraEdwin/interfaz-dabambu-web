import { Button } from 'components/common'
import { Card } from 'components/icons'
import { CardCalculadoraWrapper, CardCalculadoraItem, CardCalculadoraInput } from './cardCalculadora.styled'
import { useState, useEffect } from 'react'
import { alertMessage } from 'lib/AlertMessage'
// import ModalPago from '../Modal/ModalPago'
import ModalPagoVisaNet from '../Modal/PagoVisa/ModalPagoVisaNet'

const CardCalculadora = ({ precio, idProducto }) => {
  const [totalAmount, setTotalAmount] = useState(precio.toFixed(2))
  const [openModalPago, setOpenModalPago] = useState(false)
  const [order, setOrder] = useState({
    clienteId: '',
    total: totalAmount,
    detalles: [
      {
        productoId: idProducto,
        cantidad: 1,
        monto: totalAmount
      }
    ]
  })

  const totalCost = (cantidad) => {
    const total = precio * cantidad
    const result = Math.abs(total.toFixed(2))
    const resultToFixed = result.toFixed(2)
    console.log(resultToFixed, 'res')
    setTotalAmount(resultToFixed)

    // Seteando total //
    const objOrder = order
    objOrder.total = result
    setOrder({ ...order, objOrder })

    // Seteando monto //
    const detallesLocal = [...order.detalles]
    detallesLocal[0].monto = result
    setOrder({ ...order, detalles: detallesLocal })

    // Forma 2 //
    // setOrder(
    //   prevState => ({ ...prevState, total: result })
    // )
  }

  const handleChangeNumber = (e) => {
    const value = e.target.value
    const validateNumber = Math.abs(value)
    totalCost(validateNumber)

    // Seteando cantidad //
    const detallesLocal = [...order.detalles]
    detallesLocal[0].cantidad = validateNumber
    setOrder({ ...order, detalles: detallesLocal })
  }

  const payProduct = async () => {
    const url = `${process.env.URI_API}/api-dabambu-service/pedidos`

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    })
      .then(res => {
        if (res.status !== 201) {
          alertMessage('Ocurrio un error al intentar generar el pedido', 'error', 'Error')
        }

        return res
      })
      .then(res => res.json())
      .then(res => {
        // successMessage('Pedido generado!', 'Presiona OK para continuar con el pago')
        // .then()
        setOrder(res.body)
        //Guardar pedido en el local storage
        localStorage.setItem('pedidoGenerado', JSON.stringify(res.body))
        setOpenModalPago(true)
      }
      )
      .catch(err => console.log(err))
  }

  useEffect(() => {
    const cliente = JSON.parse(localStorage.getItem('data_cliente'))
    setOrder({ ...order, clienteId: cliente._id })
  }, [])

  return (
    <CardCalculadoraWrapper>
      <CardCalculadoraItem>
        <label>Precio:</label>
        <span>S/. {precio.toFixed(2)}</span>
      </CardCalculadoraItem>
      <CardCalculadoraItem>
        <label>Cantidad:</label>
        <CardCalculadoraInput
          type="number"
          min={1}
          defaultValue={1}
          onChange={(e) => handleChangeNumber(e)}
        />
      </CardCalculadoraItem>
      <CardCalculadoraItem className='line' />
      <CardCalculadoraItem>
        <label>TOTAL:</label>
        <span
        >S/. {totalAmount}</span>
      </CardCalculadoraItem>
      <CardCalculadoraItem className='item-button'>
        <Button
          variante="primary"
          width='-webkit-fill-available'
          onClick={() => payProduct()}
        >
          <Card /> Ir a pagar
        </Button>

        {/* Modal de VisaNET */}

        {openModalPago && (
          // <ModalPago
          //   close={() => setOpenModalPago(false)}
          //   monto={totalAmount}
          //   idPedido={order._id}
          // />
          <ModalPagoVisaNet monto={parseFloat(totalAmount)} />
          // <ModalPago close={() => setOpenModalPago(false)} monto={totalAmount} />
        )}
      </CardCalculadoraItem>
    </CardCalculadoraWrapper>
  )
}

export default CardCalculadora
