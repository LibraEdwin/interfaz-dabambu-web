import ModalAdmin from '../ModalAdmin'
import SelectModal from 'components/common/SelectModal'
import InputModal from 'components/common/InputModal'

const ubigeo = ['Cercado de Lima', 'Comas', 'Los Olivos']

const data = {
  comprador: 'Jorge Winder Avila',
  direccion: 'Avenida Tupac Amaru 4545'
}

const ModalDespacho = ({ close }) => {
  return (
    <ModalAdmin title="Direccion de despacho" onClick={close}>
      <InputModal label="Comprador:" value={data.comprador} />
      <SelectModal label="Departamento:" options={ubigeo} width="290" />
      <SelectModal label="Provincia:" options={ubigeo} width="290" />
      <SelectModal label="Distrito:" options={ubigeo} width="290" />
      <InputModal label="Direccion:" value={data.direccion} />
    </ModalAdmin>
  )
}

export default ModalDespacho
