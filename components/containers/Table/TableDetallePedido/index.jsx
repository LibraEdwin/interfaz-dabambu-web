import { useState } from 'react'
import { DetallePedidoTable } from './tableDetallePedido.styled'
import { ButtonUpdate, TagStatus } from 'components/common'
import { Home, Update } from 'components/icons'
import ModalEstadoPedido from 'components/containers/Modal/ModalEstadoPedido'
import ModalDatosDespacho from 'components/containers/Modal/ModalDatosCliente/ModalDatosDespacho'
import { formatToSoles, formatWithHour } from 'lib/AlertMessage'
import { TableBody, TableCol, TableColTd, TableHead, TableRow } from '../table.styled'

const TableDetallePedido = ({ pedidos, setPedidos, total, functionGetResultados, desde, hasta }) => {
  const [openModalDespacho, setOpenModalDespacho] = useState(false)
  const [openModalEstadoPedido, setOpenModalEstadoPedido] = useState(false)
  const [idSelected, setIdSelected] = useState(null)
  const [estado, setEstado] = useState('')
  const [clienteSelected, setClienteSelected] = useState({})

  const handleSelectModalEstado = (id, estado) => {
    setOpenModalEstadoPedido(true)
    setIdSelected(id)
    setEstado(estado)
  }

  const handleSelectModalDespacho = (cliente) => {
    setClienteSelected(cliente)
    setOpenModalDespacho(true)
  }

  return (
    <>
      <DetallePedidoTable>
        <TableHead>
          <TableRow >
            <TableCol size={1.5} className="text-left">N°.OP</TableCol>
            <TableCol size={2.7} className="text-left">Fecha y Hora</TableCol>
            <TableCol size={1.5}>Nombre de comprador</TableCol>
            <TableCol size={2}>Celular contacto</TableCol>
            <TableCol size={3} >Nombre de Producto</TableCol>
            <TableCol size={1.5}>Cantidad</TableCol>
            <TableCol size={1.5}>Monto de venta (S/)</TableCol>
            <TableCol size={1} className="noPrint text-right "></TableCol>
          </TableRow>
        </TableHead>
        <TableBody>
          {pedidos.length > 0 && pedidos.map((pedido, key) => (
            <TableRow key={key}>
              <TableCol className="text-left">{pedido._id}</TableCol>
              <TableCol as="td" className="text-left">{formatWithHour(pedido.fechaPedido)}</TableCol>
              <TableCol as="td">{pedido?.cliente.nombre}</TableCol>
              <TableCol as="td">{pedido?.cliente.celular}</TableCol>
              <TableCol as="td">{pedido?.producto.nombre}</TableCol>
              <TableCol as="td">{pedido?.cantidad}</TableCol>
              <TableCol as="td">{formatToSoles(pedido.total?.$numberDecimal)}</TableCol>
              <TableCol as="td" className="noPrint text-right">
                <div className='actions'>
                  <TagStatus id="prueba" variante={pedido.estado}>{pedido.estado}</TagStatus>
                  <ButtonUpdate htmlFor="prueba" icon={<Update />} onClick={() => handleSelectModalEstado(pedido._id, pedido.estado)} />
                  <ButtonUpdate icon={<Home />} onClick={() => handleSelectModalDespacho(pedido.cliente)} />
                </div>
              </TableCol>
            </TableRow>
          ))}

          {pedidos.length === 0 && (
            <TableRow >
              <TableColTd as="td" className="text-left" >No hay datos</TableColTd>
            </TableRow>
          )}
        </TableBody>
      </DetallePedidoTable>
      {openModalEstadoPedido && (
        <ModalEstadoPedido
          id={idSelected}
          estado={estado}
          close={() => setOpenModalEstadoPedido(false)}
          functionGetResultados={functionGetResultados}
        />
      )}
      {openModalDespacho && (
        <ModalDatosDespacho
          setPedidos={setPedidos}
          cliente={clienteSelected}
          setCliente={setClienteSelected}
          close={() => setOpenModalDespacho(false)}
          desde={desde}
          hasta={hasta} />
      )}
    </>
  )
}

export default TableDetallePedido
