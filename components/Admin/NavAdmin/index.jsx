import { NavWrapper, NavContainer, NavItem, NavUser, ButtonLogout, ButtonAction, NavButtonBack } from './navAdmin.styled'
import Link from 'next/link'
import Image from 'next/image'
import router from 'next/router'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { ArrowDown, LogoutIcon, ArrowBack } from '../../../components/icons'
import { useGlobalContext } from 'context/GlobalContext'

const NavAdmin = ({ title, user }) => {
  const [showBtnAction, setShowBtnAction] = useState(false)
  const { logout } = useGlobalContext()

  return (
    <NavWrapper>
      <NavContainer>
        <NavItem>
          <NavButtonBack className='back-button' onClick={() => router.push('/admin')}><ArrowBack/></NavButtonBack>
          <Link href="/admin">
            <a>
              <Image src="/logo_verde2.svg" width={170} height={44}/>
            </a>
          </Link>
        </NavItem>
        <NavItem>{title}</NavItem>
        <NavItem>
          <Image src="/profile.svg" width={30} height={28} />
          <NavUser>{user}</NavUser>
          <ButtonLogout onClick={() => setShowBtnAction(!showBtnAction)}><ArrowDown /></ButtonLogout>
          {showBtnAction && (
            <ButtonAction>
              <li>
                <button onClick={logout}><LogoutIcon/> Cerrar sesion</button>
              </li>
            </ButtonAction>
          )}
        </NavItem>
      </NavContainer>
    </NavWrapper>
  )
}

NavAdmin.propTypes = {
  title: PropTypes.string,
  user: PropTypes.string
}

export default NavAdmin
