import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

const Layout = ({ children }) => {
  const router = useRouter()

  return router.pathname !== '/login' &&
    router.pathname !== '/registro-de-producto' &&
    router.pathname !== '/productos-vinculados' &&
    router.pathname !== '/admin'
    ? (
      <>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </>)
    : (
      <>{children}</>)
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
