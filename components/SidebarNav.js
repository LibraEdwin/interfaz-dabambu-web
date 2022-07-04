import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

const SidebarNav = props => {
  const { isOpen, toggle } = props

  return (
    <>
      <div className="sidebar-nav">
        <svg
          className="sidebar-nav__close"
          viewBox="0 0 50 50"
          onClick={toggle}
        >
          <line x2="50" y2="50" />
          <line x1="50" y2="50" />
        </svg>
        <ul className="sidebar-nav__items">
          <li className="sidebar-nav__item" onClick={toggle}>
            <Link href="/nosotros">
              <a href="">Nosotros</a>
            </Link>
          </li>
          <li className="sidebar-nav__item" onClick={toggle}>
            <Link href="/tienda">
              <a href="">Tienda</a>
            </Link>
            Tienda
          </li>
          <li className="sidebar-nav__item" onClick={toggle}>
            <Link href="/cuidados">
              <a href="">Guía de cuidados</a>
            </Link>
            Guía de cuidados
          </li>
        </ul>
        <figure className="sidebar-nav__brand">
          <img src="/LogoSideBar.svg" alt="" />
        </figure>
      </div>

      <style jsx>{`
          .sidebar-nav {
            background: #517201;
            // width: 85%;
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            transition: left 0.3s ease-in-out;
            z-index: 9999;
            left: ${isOpen ? '0' : '-100vw'};
            opacity: ${isOpen ? 1 : 0};
          }

          .sidebar-nav__items {
            margin-top: 1rem;
          }

          .sidebar-nav__item {
            opacity: ${isOpen ? 1 : 0};
            margin-top: 1.5rem;
            transform: translateX(${isOpen ? 0 : -30}px);
            transition: all 0.3s ease-in-out;
          }

          .sidebar-nav__item a {
            color: #fff;
            font-size: 24px;
            font-weight: 300;
          }

          .sidebar-nav__item:nth-child(1) {
            transition-delay: 0.3s;
          }

          .sidebar-nav__item:nth-child(2) {
            transition-delay: 0.4s;
          }

          .sidebar-nav__item:nth-child(3) {
            transition-delay: 0.5s;
          }

          .sidebar-nav__close {
            cursor: pointer;
            align-self: flex-end;
            width: 20px;
            height: 20px;
            stroke: #fff;
            stroke-width: 8px;
            overflow: visible;
            margin-left: auto;
          }

          .sidebar-nav__close line {
            fill: #fff;
          }

          .sidebar-nav__brand {
            margin-top: auto;
            align-self: center;
          }
        `}</style>
    </>
  )
}

export default SidebarNav
