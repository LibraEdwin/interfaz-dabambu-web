import { SelectModalContainer } from './selectModal.styled'
import PropTypes from 'prop-types'

const SelectModal = ({ label, options, width, ...props }) => {
  return (
    <SelectModalContainer width={width} >
      <span>{label}</span>
      <select {...props}>
        {
          options.map((opt, key) => {
            return (
              <option key={key} value={opt.estado} >{opt}</option>
            )
          })
        }
      </select>
    </SelectModalContainer>
  )
}

SelectModal.propTypes = {
  width: PropTypes.string
}

export default SelectModal
