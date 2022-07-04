import {
  DetalleCompraWrapper,
  DetalleCompraContainer,
  DetalleCompraProducto,
  FotoProducto,
  DetailProductContainer,
  DetailProductTitle,
  DetailProductDescription
} from './detalleCompra.styled'
import CardCalculadora from '../CardCalculadora'
import TitleCompra from 'components/common/Title/TitleCompra'
import Image from 'next/image'

const DetalleCompra = ({ name, description, price, picture, id }) => {
  return (
    <DetalleCompraWrapper>
      <DetalleCompraContainer>
        <TitleCompra title="Detalle de la compra" />
        <div className="row">
          <DetalleCompraProducto>
            <FotoProducto>
              <Image
                src={picture}
                width={325}
                height={325}
              />
            </FotoProducto>
            <DetailProductContainer>
              <DetailProductTitle>{name}</DetailProductTitle>
              <DetailProductDescription>
                {description}
              </DetailProductDescription>
            </DetailProductContainer>
          </DetalleCompraProducto>
          <CardCalculadora precio={price} idProducto={id} />
        </div>
      </DetalleCompraContainer>
    </DetalleCompraWrapper>
  )
}

export default DetalleCompra
