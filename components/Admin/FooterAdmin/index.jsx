import React from 'react'
import { FooterAdminWrapper } from './footerAdmin.styled'

const FooterAdmin = ({ children }) => {
  return (
    <FooterAdminWrapper>
      {children}
    </FooterAdminWrapper>
  )
}

export default FooterAdmin
