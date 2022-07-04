import Image from 'next/image'

export default function NavbarRegistro() {
  return (
    <nav className="navbar__registro">
      <ul className="navbar__registro--items">
        <li>
          <Image src="/logo_verde2.svg" width={170} height={44} />
        </li>
        <li>Registro de producto</li>
        <li>
          <Image src="/profile.svg" width={30} height={28} />
          <span>Emily Barrios</span>
        </li>
      </ul>
      <style jsx>{`
        .navbar__registro {
          border: 1px solid rgba(81, 114, 1, 0.3);
          padding: 0 25px 0 25px;
          position: fixed;
          width: 100%;
          z-index: 100;
        }

        .navbar__registro--items {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100px;
        }

        .navbar__registro--items li:nth-child(2) {
          color: black;
          font-weight: 400;
          font-size: 24px;
        }

        .navbar__registro--items li:nth-child(3) {
          border: 1px solid rgba(81, 114, 1, 0.5);
          border-radius: 5px;
          padding: 10px 25px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
      `}</style>
    </nav>
  )
}
