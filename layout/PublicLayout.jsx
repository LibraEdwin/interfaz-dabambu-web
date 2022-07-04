import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import PropTypes from 'prop-types'

const LayoutPublic = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

LayoutPublic.propTypes = {
  children: PropTypes.node.isRequired
}

export default LayoutPublic
