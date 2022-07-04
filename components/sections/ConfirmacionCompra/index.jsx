import { Button } from 'components/common'
import { formatToSoles, formatWithHour } from 'lib/AlertMessage'
import {
  Wrapper,
  Title,
  Lead,
  InfoTable,
  InfoTableHead,
  InfoTableBody,
  Content,
  Details,
  DetailsHead,
  DetailsBody,
  DetailsFoot
} from './confirmacionCompra.styled'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function ConfirmacionCompra({ comprobante, detallePedido = [] }) {
  const { isFallback } = useRouter()
  const [dataMap, setDataMap] = useState({})
  const pedido = comprobante.pedidoId
  const cliente = pedido.clienteId
  const distrito = cliente.distrito
  const provincia = distrito.provinciaId

  if (isFallback) return <div>Página cargando...</div>

  useEffect(() => {
    setDataMap(JSON.parse(localStorage.getItem('dataMap')))
    console.log(dataMap)
  }, [])

  return (
    <Wrapper>
      <Button
        variante="primary"
        onClick={() => window.print()}
      >
        IMPRIMIR</Button>
      <Title>Confirmación de compra</Title>
      <Lead className="mb-4">¡Gracias!. Tu pedido ha sido recibido</Lead>

      <Content>
        <InfoTable>
          <InfoTableHead>
            <tr>
              <th>
                CÓDIGO OP
              </th>
              <th>
                DOCUMENTO
              </th>
              <th>
                TITULAR
              </th>
              <th>
                FECHA Y HORA
              </th>
              <th>
                TELÉFONO
              </th>
            </tr>
          </InfoTableHead>
          <InfoTableBody>
            <tr>
              <td> <span>CÓDIGO OP: </span> {pedido._id}</td>
              <td> <span>DOCUMENTO: </span> {cliente.documento}</td>
              <td> <span>TITULAR: </span> {cliente.nombre}</td>
              <td> <span>FECHA Y HORA: </span> {formatWithHour(comprobante.fechaEmision)}</td>
              <td> <span>TELÉFONO: </span> {cliente.celular}</td>
            </tr>
          </InfoTableBody>
        </InfoTable>
        <Lead className="mt-4 mb-4">Datos de la tarjeta</Lead>
        <InfoTable>
          <InfoTableHead>
            <tr>
              <th>
                N° DE TARJETA
              </th>
              <th>
                MARCA DE LA TARJETA
              </th>
              <th>
                TIPO DE MONEDA
              </th>
            </tr>
          </InfoTableHead>
          <InfoTableBody>
            <tr>
              <td> <span>N° DE TARJETA: </span> {dataMap.CARD}</td>
              <td> <span>MARCA DE LA TARJETA: </span> {dataMap.BRAND}</td>
              <td> <span>TIPO DE MONEDA: </span> Soles</td>
            </tr>
          </InfoTableBody>
        </InfoTable>
        <Lead className="mt-4 mb-4">Dirección de despacho</Lead>
        <InfoTable>
          <InfoTableHead>
            <tr>
              <th>
                DIRECCION
              </th>
              <th>
                DISTRITO
              </th>
              <th>
                PROVINCIA
              </th>
            </tr>
          </InfoTableHead>
          <InfoTableBody>
            <tr>
              <td>{cliente.direccion}</td>
              <td>{distrito.nombre}</td>
              <td>{provincia.nombre}</td>
            </tr>
          </InfoTableBody>
        </InfoTable>

        <Lead className="mt-4 mb-4">Detalle de compra</Lead>
        <Details>
          <DetailsHead>
            <tr>
              <th>Producto</th>
              <th>SubTotal</th>
            </tr>
          </DetailsHead>
          <DetailsBody>
            {detallePedido.length > 0 && detallePedido.map(detalle => (
              <tr key={`detalle-${detalle._id}`}>
                <td>
                  <small>
                    {detalle.productoId.nombre}
                    &nbsp;- <b>Cantidad: {detalle.cantidad}</b></small>
                </td>
                <td>{formatToSoles(detalle.productoId.precio)}</td>
              </tr>
            ))}
          </DetailsBody>
          <DetailsFoot>
            <tr>
              <th>Total</th>
              <th><h2>{formatToSoles(pedido.total.$numberDecimal)}</h2></th>
            </tr>
          </DetailsFoot>
        </Details>

      </Content>
    </Wrapper>
  )
}
