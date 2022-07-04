import PropTypes from 'prop-types'
import { TitleCompraWrapper } from './title.styled'

const TitleCompra = ({ title }) => {
  return (
    <TitleCompraWrapper>
      <h2>{title}</h2>
      <div></div>
    </TitleCompraWrapper>
  )
}

TitleCompra.propTypes = {
  title: PropTypes.string
}

export default TitleCompra
