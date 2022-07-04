import React from 'react'
import PropTypes from 'prop-types'

const LayoutAdmin = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}

LayoutAdmin.propTypes = {
  children: PropTypes.node.isRequired
}

export default LayoutAdmin
