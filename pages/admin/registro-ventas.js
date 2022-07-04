import React, { useState } from 'react'
import NavAdmin from '../../components/Admin/NavAdmin'
import { Button } from 'components/common'
import FooterAdmin from 'components/Admin/FooterAdmin'
import { Wrapper, ContainerPrint, ContainerMain } from 'theme/mixins'
import { TableDetallePedido, TableTotal } from 'components/containers/Table'
import { HeadPrint } from 'components/containers'
import FiltroFechasVentas from 'components/containers/Filters/FiltroFechas/FiltroFechasVentas'
import { alertMessage, formatDate, formatToSoles } from 'lib/AlertMessage'
import * as XLSX from 'xlsx'
import Login from '../login'
import { useRouter } from 'next/router'
import { useGlobalContext } from '../../context/GlobalContext'

const RegistroVentas = () => {
  const [pedidos, setPedidos] = useState([])
  const [desde, setDesde] = useState(new Date())
  const [hasta, setHasta] = useState(new Date())
  const [totalVenta, setTotalVenta] = useState(0)
  const [cargando, setCargando] = useState(false)
  const { isTokenUser, loggedInUser } = useGlobalContext()
  const router = useRouter()

  function inactive() {
    setTimeout(() => {
      sessionStorage.removeItem('token_usuario')
      sessionStorage.removeItem('data_usuario')
      router.push('/login')
    }, 900000)
  }

  const getResultados = async () => {
    if (!desde || !hasta) {
      alertMessage('Las 2 fechas son requeridas', 'error', 'Fecha inválida')
    }

    if (desde > hasta) {
      alertMessage('La fecha inicial no puede ser mayor a la fecha final', 'error', 'Fecha inválida')
    }

    try {
      setCargando(true)
      const respuesta = await fetch(`${process.env.URI_API}/api-dabambu-service/detallepedido/buscar?fechaRegistro=${formatDate(desde, 'YYYY-MM-DD')},${formatDate(hasta, 'YYYY-MM-DD')}`)
      const data = await respuesta.json()
      const detallesPedidos = data.body
      if (detallesPedidos.length > 0) {
        const listaDetalles = detallesPedidos.map(detallePedido => {
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
        if (listaDetalles.length === 0) {
          setPedidos([])
          return alertMessage('No hay resultados para esta busqueda')
        }
        setPedidos(listaDetalles)
        setTotalVenta(listaDetalles.map(detalle => {
          if (detalle.total?.$numberDecimal) {
            return parseFloat(detalle.total?.$numberDecimal)
          }
          return 0.00
        }).reduce((a, b) => a + b, 0).toFixed(2))
      } else {
        alertMessage('No hay resultados para esta busqueda')
      }
    } catch (err) {
      console.log(err)
    } finally {
      setCargando(false)
    }
  }

  const datosExport = pedidos.map(e => (
    {
      OP: e._id,
      Fecha: e.fechaPedido,
      comprador: e.cliente.nombre,
      contacto: e.cliente.celular,
      producto: e.producto.nombre,
      cantidad: e.cantidad,
      MontoVenta: e.total?.$numberDecimal
    }
  ))

  const handleOnExport = () => {
    const wb = XLSX.utils.book_new()
    const ws = XLSX.utils.json_to_sheet(datosExport)

    XLSX.utils.book_append_sheet(wb, ws, 'Registro de Ventas')

    XLSX.writeFile(wb, `${formatDate(new Date(), 'DD/MM/YYYY')}_RegistroVentas.xlsx`)
  }

  return (
    <>
      {
        isTokenUser
          ? <>
            <div className='noPrint'>
              <NavAdmin title="Registro de ventas y pedidos" user={loggedInUser.nombre} />
            </div>
            <ContainerMain className='pt-5'>
              <Wrapper>
                <div className='noPrint'>
                  <FiltroFechasVentas
                    labelDesde="Ventas desde"
                    labelHasta="Ventas hasta"
                    onChangeDesde={(e) => setDesde(e.target.value)}
                    onChangeHasta={(e) => setHasta(e.target.value)}
                    getResultados={getResultados}
                    isLoading={cargando}
                    onBlur={inactive}
                  />
                  <h2 className='mt-4'>Detalles de pedidos</h2>
                </div>
                <div className='Print'>
                  <ContainerPrint>
                    <HeadPrint title="Reporte de ventas y pedidos" fromDate={formatDate(desde, 'DD/MM/YYYY')} toDate={formatDate(hasta, 'DD/MM/YYYY')} />
                    <TableDetallePedido
                      pedidos={pedidos}
                      setPedidos={setPedidos}
                      functionGetResultados={getResultados}
                      desde={desde}
                      hasta={hasta}
                    />
                    <TableTotal string={'Total venta:'} total={formatToSoles(totalVenta)} />
                  </ContainerPrint>
                </div>
              </Wrapper>
            </ContainerMain>
            <div className='noPrint'>
              <FooterAdmin>
                <Button variante="outline" onClick={handleOnExport} className='exportar'>Exportar</Button>
                <Button variante="outline" onClick={() => window.print()}>Imprimir</Button>
              </FooterAdmin>
            </div>
          </>
          : <Login />
      }
    </>
  )
}

RegistroVentas.layout = 'Admin'

export default RegistroVentas
