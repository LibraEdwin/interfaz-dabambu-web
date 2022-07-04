import {
  ModalAdminWrapper,
  ModalAdminContainer,
  ModalAdminTitle,
  ModalAdminData,
  ModalAdminEncabezado,
  ModalAdminCerrar
} from './modalAdmin.styled'
import { Close } from 'components/icons'

const ModalWrapper = ({ children, title, close }) => {
  return (
    <ModalAdminWrapper>
      <ModalAdminContainer>
        <ModalAdminEncabezado>
          <ModalAdminTitle>
            {title}
          </ModalAdminTitle>
          <ModalAdminCerrar onClick={close}>
            <Close />
            Cerrar
          </ModalAdminCerrar>
        </ModalAdminEncabezado>
        <ModalAdminData>{children}</ModalAdminData>
      </ModalAdminContainer>
    </ModalAdminWrapper>
  )
}

export default ModalWrapper
