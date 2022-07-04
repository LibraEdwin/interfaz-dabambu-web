import PropTypes from 'prop-types'
import { ButtonStyled } from './button.styled'

const Button = ({
  children,
  variante,
  onClick,
  as,
  href,
  className,
  disabled,
  text,
  type,
  width,
  height,
  border,
  isLoading
}) => {
  return (
    <ButtonStyled
      variante={variante}
      onClick={onClick}
      as={as}
      href={href}
      className={className}
      disabled={disabled}
      text={text}
      type={type}
      width={width}
      height={height}
      border={border}
      isLoading={isLoading}
    >
      {children}
    </ButtonStyled>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired

}

export default Button
