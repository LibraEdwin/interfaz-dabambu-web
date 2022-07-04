import { DivSelectValidados, SelectModalContainer } from 'components/common/SelectModal/selectModal.styled'
import { useEffect, useState } from 'react'
import ModalDireccionDespacho from '../ModalAdmin/ModalDireccionDespacho'
import { InputModalContainer, InputModalItem, InputModalWrapper } from 'components/common/InputModal/inputModal.styled'
import InputTextareaModal from 'components/common/InputModal/inputTextareaModal'

const ModalDatosDespacho = ({ setPedidos, close, cliente, setCliente, desde, hasta }) => {
  const [selectDistritoEstado, setSelectDistritoEstado] = useState(false)
  const [departamento, setDepartamento] = useState([])
  const [provincia, setProvincia] = useState([])
  const [distritos, setDistritos] = useState([])

  const departamentoData = async () => {
    const filtro = await fetch('http://localhost:3002/api-dabambu-service/departamentos')
    const { body } = await filtro.json()
    setDepartamento(body)
  }

  const provinciaData = async (idDepartamento) => {
    const filtro = await fetch(`http://localhost:3002/api-dabambu-service/departamentos/${idDepartamento}/provincias`)
    const { body } = await filtro.json()
    setProvincia(body)
  }

  const distritoData = async (idProvincia) => {
    const filtro = await fetch(`http://localhost:3002/api-dabambu-service/provincias/${idProvincia}/distritos`)
    const { body } = await filtro.json()
    setDistritos(body)
  }

  const lugar = (cliente) => {
    departamentoData()
    provinciaData(cliente.distrito.departamentoId)
    distritoData(cliente.distrito.provinciaId)
  }

  useEffect(() => {
    lugar(cliente)
  }, [])

  const handleImputChange = (e) => {
    if ([e.target.name] == 'Departamento') {
      provinciaData(e.target.value)
      setDistritos([])
    }
    if ([e.target.name] == 'Provincia') {
      distritoData(e.target.value)
      setSelectDistritoEstado(true)
    }
    if ([e.target.name] == 'Distrito') {
      setSelectDistritoEstado(false)
    }
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value
    })
  }

  return (
    <ModalDireccionDespacho
      title="Direccion de despacho"
      setPedidos={setPedidos}
      onClick={close}
      datos={cliente}
      distritos={distritos}
      selectDistritoEstado={selectDistritoEstado}
      desde={desde}
      hasta={hasta}>
      <InputModalWrapper>
        <span>Comprador</span>
        <InputModalContainer>
          <InputModalItem
            disabled
            name="nombre"
            onChange={handleImputChange}
            value={cliente && cliente.nombre} />
        </InputModalContainer>
      </InputModalWrapper>
      <SelectModalContainer width='290' >
        <span>Departamento</span>

        {departamento.length >= 1 && (
          <select
            defaultValue={cliente.distrito.departamentoId}
            name="Departamento"
            onChange={handleImputChange}>
            {
              departamento.map(e =>
                <option key={e.nombre + e._id} value={e._id}> {e.nombre} </option>
              )
            }
          </select>
        )}
      </SelectModalContainer>

      <SelectModalContainer width='290' >
        <span>Provincia</span>
        <DivSelectValidados>
          {provincia.length >= 1 && (
            <select
              defaultValue={cliente.distrito.provinciaId}
              name="Provincia"
              onChange={handleImputChange}>
              <option >Seleccione...</option>
              {
                provincia.map(e =>
                  <option key={e.nombre + e._id} value={e._id}> {e.nombre} </option>
                )
              }
            </select>
          )}
          {provincia.length < 1 &&
            <select name="Provincia">
              <option >Seleccione...</option>
            </select>
          }
          {distritos.length <= 1 &&
            <span>seleccione provincia*</span>
          }
        </DivSelectValidados>
      </SelectModalContainer>

      <SelectModalContainer width='290' >
        <span>Distrito:</span>
        <DivSelectValidados>
          {
            distritos.length >= 1 && (
              <select
                defaultValue={cliente.distrito._id}
                name='Distrito'
                onChange={handleImputChange}>
                <option >Seleccione...</option>
                {
                  distritos.map(e =>
                    <option key={e.nombre + e._id} value={e._id}> {e.nombre} </option>
                  )
                }
              </select>
            )}
          {distritos.length < 1 && (
            <select
              name='Distrito'
              onChange={handleImputChange}
              value='seleccion'>
              <option value='seleccion'>Seleccione...</option>
            </select>
          )}
          {(distritos.length <= 1 || selectDistritoEstado || cliente.Distrito == 'Seleccione...') &&
            <span>seleccione distrito*</span>
          }
        </DivSelectValidados>
      </SelectModalContainer>
      <InputTextareaModal
        label="Direccion:"
        name="direccion"
        onChange={handleImputChange}
        value={cliente && cliente.direccion} />
    </ModalDireccionDespacho>
  )
}

export default ModalDatosDespacho
