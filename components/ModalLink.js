import Image from 'next/image'
import { useEffect } from 'react'

export default function ModalLink({ url, refNombreURL, handleCopyURL }) {
  useEffect(() => {
    const overlay = document.querySelector('.overlay')
    const modalLink = document.querySelector('.modal__link')
    const btnsOpenModalLink = document.querySelector('.show__modal--link')
    const btnCloseModalLink = document.querySelector('.close__modal--link')

    const openModalLink = function () {
      modalLink.classList.remove('hidden')
      overlay.classList.remove('hidden')
    }

    const closeModalLink = function () {
      modalLink.classList.add('hidden')
      overlay.classList.add('hidden')
    }

    btnsOpenModalLink.addEventListener('click', openModalLink)
    btnCloseModalLink.addEventListener('click', closeModalLink)
    overlay.addEventListener('click', closeModalLink)
  }, [])

  return (
    <>
      <div className="modal__link hidden modal__container">
        <span style={{ color: 'black', fontSize: 25 }}>Link del producto</span>
        <h4 className="modal__link--url" ref={refNombreURL} id="nombreURL">
          {`${process.env.URI_WEB}/producto/${url}`}
        </h4>
        {/* <input className="modal__link--url" ref={refNombreURL} id="nombreURL"/> */}
        <div
          className="close__modal--link modal__link--copiar"
          onClick={handleCopyURL}
          style={{ cursor: 'pointer' }}
        >
          <Image src="/copiar.svg" width={19} height={22} />
          <span>Copiar</span>
        </div>
      </div>
      <div className="overlay hidden"></div>
      <style jsx>{`
        .modal__link {
          display: flex;
          flex-direction: column;
        }

        .modal__link--url {
          border: 1px solid #565656;
          border-radius: 5px;
          height: 56px;
          text-align: center;
          display: flex;
          align-items: center;
          padding-left: 15px;
          margin: 20px 0;
          color: black;
          font-weight: 400;
        }

        .modal__link--copiar {
          align-self: flex-end;
          display: flex;
          gap: 10px;
        }

        .hidden {
          display: none;
        }
      `}</style>
    </>
  )
}
