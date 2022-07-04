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

const ModalAdmin = ({ title, children, onClick, datos, setDataFiltroFecha, fecha, distritos, selectDistritoEstado, dataFiltro }) => {
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
          if (dataFiltro) {
            const res = await fetch(`${process.env.URI_API}/api-dabambu-service/clientes/search?nombre=${dataFiltro}`)
            const { data } = await res.json()
            setDataFiltroFecha(data)
          } else {
            const filtro = await fetch(`${process.env.URI_API}/api-dabambu-service/clientes/search?fechas=${fecha.desde},${fecha.hasta}`)
            const { data } = await filtro.json()
            setDataFiltroFecha(data)
          }
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

export default ModalAdmin
