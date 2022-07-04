import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import SidebarNav from './SidebarNav'

const NavBar = () => {
  const router = useRouter()
  const listElement = useRef(null)
  const targetElement = useRef(null)
  const [targetElementWidth, setTargetElementWidth] = useState(0)
  const [targetElementLeft, setTargetElementLeft] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const moveTargetByElement = (element) => {
    const width = element.getBoundingClientRect().width
    const left = element.getBoundingClientRect().left + window.pageXOffset

    setTargetElementWidth(width)
    setTargetElementLeft(left)
  }

  const moveTagetByLoop = () => {
    const children = Object.values(listElement.current.children)

    children.forEach((item) => {
      const element = item.children[0]
      if (element.classList.contains('active')) {
        moveTargetByElement(element)
      }
    })
  }

  const moveTagetByHoverLeave = () => {
    if (router.pathname === '/') {
      setTargetElementWidth(0)
    } else {
      moveTagetByLoop()
    }
  }

  const onMouseEnter = (event) => moveTargetByElement(event.target)

  const onMouseLeave = () => moveTagetByHoverLeave()

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    moveTagetByHoverLeave()
  }, [router])

  useEffect(() => {
    const resizeListener = () => {
      moveTagetByLoop()
    }

    window.addEventListener('resize', resizeListener)

    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [])

  return (
    <>
      <SidebarNav isOpen={isOpen} toggle={handleToggle} />
      <nav className="navbar">
        <div className="bars" onClick={handleToggle}>
          <img
            className="menu"
            src="/menu.svg"
            alt="menu"
            width={24}
            height={16}
          />
        </div>
        <Link href="/">
          <img className="logo" src="/logo_green.png" alt="logo" />
        </Link>
        <ul ref={listElement}>
          <li>
            <Link href="/nosotros">
              <a
                className={router.pathname === '/nosotros' ? 'active' : ''}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                NOSOTROS
              </a>
            </Link>
          </li>
          <li>
            <Link href="/tienda">
              <a
                className={router.pathname.startsWith('/tienda') ? 'active' : ''}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                TIENDA
              </a>
            </Link>
          </li>
          <li>
            <Link href="/cuidados">
              <a
                className={router.pathname === '/cuidados' ? 'active' : ''}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                GUÍA DE CUIDADOS
              </a>
            </Link>
          </li>
        </ul>
        <div className="target" ref={targetElement} />

        <style jsx>{`
            .navbar {
              display: flex;
              align-items: center;
              position: sticky;
              width: 100%;
              height: 85px;
              padding: 0 1rem;
              z-index: 100;
              top: 0;
              left: 0;
            }

            .logo {
              max-width: 45%;
              margin: auto;
              cursor: pointer;
            }

            ul {
              display: none;
            }

            li a {
              padding: 1rem 0;
            }

            .target {
              display: none;
              position: absolute;
              height: 2px;
              width: ${targetElementWidth}px;
              background-color: #517201;
              transition: all 0.5s;
              top: 55px;
              left: ${targetElementLeft}px;
            }

            @media screen and (min-width: 620px) {
              .bars {
                display: none;
              }

              .target {
                display: block;
              }

              .navbar {
                justify-content: space-between;
                padding: 0 1rem;
              }

              ul {
                display: flex;
                list-style-type: none;
                position: relative;
              }

              li {
                font-size: 15px;
              }

              li:not(:last-child) {
                padding-right: 2rem;
              }

              .menu {
                display: none;
              }

              .logo {
                width: 160px;
                margin: 0;
              }
            }

            @media screen and (min-width: 960px) {
              ul {
                display: flex;
                list-style-type: none;
              }

              li:not(:last-child) {
                padding-right: 3rem;
              }

              .menu {
                display: none;
              }

              .navbar {
                justify-content: space-between;
                padding: 1.5rem 3rem;
              }

              .logo {
                width: 180px;
                margin: 0;
              }
            }

            @media screen and (min-width: 1200px) {
              li:not(:last-child) {
                padding-right: 5rem;
              }
            }

            @media print {
              .navbar {
                display: none;
              }
            }
          `}</style>
      </nav>
    </>
  )
}

export default NavBar
