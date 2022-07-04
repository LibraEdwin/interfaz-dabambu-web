import {
  ModalAdminWrapper,
  ModalAdminContainer,
  ModalAdminTitle,
  ModalAdminData,
  ModalAdminEncabezado,
  ModalAdminCerrar
} from './modalAdmin.styled'
import { Close, SaveAdmin } from 'components/icons'
import { Button } from 'components/common'
import { useState } from 'react'

const ModalDireccionDespacho = ({ title, setPedidos, children, onClick, datos, distritos, selectDistritoEstado, desde, hasta }) => {
  const [loadinEditar, setLoadinEditar] = useState(false)
  let cliente = {}

  if (datos.Distrito) {
    cliente = {
      nombre: datos.nombre,
      celular: datos.celular,
      distrito: datos.Distrito,
      direccion: datos.direccion
    }
  }

  if (!datos.Distrito) {
    cliente = {
      nombre: datos.nombre,
      celular: datos.celular,
      distrito: datos.distrito._id,
      direccion: datos.direccion
    }
  }
  const asyncPostCall = async () => {
    if (distritos.length >= 1) {
      if (!selectDistritoEstado) {
        if (datos.Distrito !== 'Seleccione...') {
          setLoadinEditar(true)
          await fetch(`${process.env.URI_API}/api-dabambu-service/clientes/${datos._id}`, {
            method: 'PATCH',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
          })
          const respuesta = await fetch(`${process.env.URI_API}/api-dabambu-service/detallepedido/buscar?fechaRegistro=${desde},${hasta}`)
          const { body } = await respuesta.json()
          const listaDetalles = body.map(detallePedido => {
            return {
              _id: detallePedido.pedidoId._id,
              fechaPedido: detallePedido.pedidoId.fechaPedido,
              cliente: detallePedido.pedidoId.clienteId,
              producto: detallePedido.productoId,
              total: detallePedido.monto,
              cantidad: detallePedido.cantidad,
              estado: detallePedido.pedidoId.estado
            }
          }).filter(dataDetalle => dataDetalle.estado !== 'Pendiente')
          setPedidos(listaDetalles)
          setLoadinEditar(false)
          onClick()
        }
      }
    }
  }

  return (
    <ModalAdminWrapper>
      <ModalAdminContainer>
        <ModalAdminEncabezado>
          <ModalAdminTitle>
            {title}
          </ModalAdminTitle>
          <ModalAdminCerrar onClick={onClick}>
            <Close />
            Cerrar
          </ModalAdminCerrar>
        </ModalAdminEncabezado>
        <ModalAdminData>{children}</ModalAdminData>
        <div>
          <Button isLoading={loadinEditar} width='100%' variante='guardar' border='50' onClick={() => asyncPostCall()}>
            <SaveAdmin />Guardar
          </Button>
        </div>
      </ModalAdminContainer>
    </ModalAdminWrapper>
  )
}

export default ModalDireccionDespacho
