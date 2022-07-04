import ModalAdmin from '../ModalAdmin'
import InputModal from 'components/common/InputModal'
import { DivSelectValidados, SelectModalContainer } from 'components/common/SelectModal/selectModal.styled'
import { useEffect, useState } from 'react'
import InputTextareaModal from 'components/common/InputModal/inputTextareaModal'

const ModalDatosCliente = ({ close, cliente, setCliente, setDataFiltroFecha, fecha, dataFiltro }) => {
  const [selectDistritoEstado, setSelectDistritoEstado] = useState(false)
  const [departamento, setDepartamento] = useState([])
  const [provincia, setProvincia] = useState([])
  const [distritos, setDistritos] = useState([])

  const departamentoData = async () => {
    const filtro = await fetch(`${process.env.URI_API}/api-dabambu-service/departamentos`)
    const { body } = await filtro.json()
    setDepartamento(body)
  }

  const provinciaData = async (idDepartamento) => {
    const filtro = await fetch(`${process.env.URI_API}/api-dabambu-service/departamentos/${idDepartamento}/provincias`)
    const { body } = await filtro.json()
    setProvincia(body)
  }

  const distritoData = async (idProvincia) => {
    const filtro = await fetch(`${process.env.URI_API}/api-dabambu-service/provincias/${idProvincia}/distritos`)
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

  // Cascada
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
    <ModalAdmin
      title="Datos del Cliente"
      onClick={close} datos={cliente}
      setDataFiltroFecha={setDataFiltroFecha}
      fecha={fecha}
      distritos={distritos}
      selectDistritoEstado={selectDistritoEstado}
      dataFiltro={dataFiltro}>
      <InputModal
        label="Comprador:"
        name="nombre"
        onChange={handleImputChange}
        value={cliente && cliente.nombre} />
      <InputModal
        label="Celular:"
        name="celular"
        onChange={handleImputChange}
        value={cliente && cliente.celular} />

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
          {(distritos.length <= 1 || selectDistritoEstado || cliente.Distrito === 'Seleccione...') &&
            <span>seleccione distrito*</span>
          }
        </DivSelectValidados>
      </SelectModalContainer>

      <InputTextareaModal
        label="Direccion:"
        name="direccion"
        onChange={handleImputChange}
        value={cliente && cliente.direccion} />

    </ModalAdmin>
  )
}

export default ModalDatosCliente
