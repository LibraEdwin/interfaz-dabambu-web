import { Button } from 'components/common'
import { Edit } from 'components/icons'
import { TableBody, TableHead, TableWrapper, TableRow, TableCol, TableColTd } from '../table.styled'
import ModalDatosCliente from 'components/containers/Modal/ModalDatosCliente'
import React, { useState } from 'react'
import { formatDate } from 'lib/AlertMessage'

export default function TablaCliente({ dataFiltroFecha, setDataFiltroFecha, fecha, dataFiltro }) {
  const [datos, setDatos] = useState([])
  const [openModalDatosCliente, setOpenModalDatosCliente] = useState(false)

  const selecionDatos = (element) => {
    setDatos(element)
    setOpenModalDatosCliente(true)
  }

  return (
    <>
      <TableWrapper>

        <TableHead>
          <TableRow>
            <TableCol size={1.5} className="text-left">Fecha</TableCol>
            <TableCol size={1.5} className="text-left">Correo electrónico</TableCol>
            <TableCol size={2.7} className="text-left">Nombre de cliente</TableCol>
            <TableCol size={1.5} >Celular de contacto</TableCol>
            <TableCol size={2} >Distrito de despacho</TableCol>
            <TableCol size={3} >Dirección</TableCol>
            <TableCol size={1} className="text-right"></TableCol>
          </TableRow>
        </TableHead>

        <TableBody>
          {dataFiltroFecha.length > 0 && dataFiltroFecha.map((element, i) => (
            <TableRow key={i++}>
              <TableCol className="text-left">{formatDate(element.createdAt, 'DD/MM/YYYY hh:mm')}</TableCol>
              <TableCol className="text-left">{element._id}</TableCol>
              <TableCol as="td" className="text-left">{element.nombre}</TableCol>
              <TableCol as="td">{element.celular}</TableCol>
              <TableCol as="td" >{element.distrito?.nombre}</TableCol>
              <TableCol as="td" >{element.direccion}</TableCol>
              <TableCol as="td" className="text-right">
                <Button onClick={() => selecionDatos(element)}>
                  <Edit />
                </Button>
              </TableCol>
            </TableRow>
          ))}

          {dataFiltroFecha.length === 0 && (
            <TableRow >
              <TableColTd as="td" className="text-left" >No hay datos</TableColTd>
            </TableRow>
          )}
        </TableBody>

      </TableWrapper>
      {openModalDatosCliente && (
        <ModalDatosCliente
          close={() => setOpenModalDatosCliente(false)}
          cliente={datos}
          setCliente={setDatos}
          setDataFiltroFecha={setDataFiltroFecha}
          fecha={fecha}
          dataFiltro={dataFiltro} />
      )}
    </>
  )
}
