import PropTypes from 'prop-types'
import ModalWrapper from '../ModalAdmin/ModalWrapper'
import SelectModal from 'components/common/SelectModal'
import { SaveAdmin } from 'components/icons'
import { ModalAdminSave } from '../ModalAdmin/modalAdmin.styled'
import { useState } from 'react'

const options = ['Pendiente', 'En proceso', 'En camino', 'Entregado']

const ModalEstadoPedido = ({ close, id, estado, functionGetResultados }) => {
  const [estadoNuevo, setEstadoNuevo] = useState(null)
  const [cargando, setCargando] = useState(false)

  const handleOnChangeSelect = (e) => {
    const { value } = e.target
    if (value !== estado) {
      setEstadoNuevo(value)
    }
  }

  const actualizarEstado = () => {
    if (estadoNuevo) {
      setCargando(true)
      fetch(`${process.env.URI_API}/api-dabambu-service/pedidos/${id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            estado: estadoNuevo
          })
        })
        .then(res => res.json())
        .then(res => {
          functionGetResultados()
          setCargando(false)
        })
        .catch(err => console.log(err))
    }
  }

  return (
    <ModalWrapper title="Cambiar estado de pedido" close={close}>
      <SelectModal
        label="Despacho"
        options={options}
        onChange={handleOnChangeSelect}
        defaultValue={estado}
      />
      <div>
        <ModalAdminSave cargando={cargando} onClick={actualizarEstado}><SaveAdmin />Guardar</ModalAdminSave>
      </div>
    </ModalWrapper>
  )
}

ModalEstadoPedido.propTypes = {
  close: PropTypes.func,
  id: PropTypes.number,
  estado: PropTypes.string,
  functionGetResultados: PropTypes.func
}

export default ModalEstadoPedido
