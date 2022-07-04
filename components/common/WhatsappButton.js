import React from 'react'

const WhatsappButton = (props) => {
  const {
    ...rest
  } = props

  const link = 'DaBambu' + `. Me interesa este producto:%0A${process.env.URI_WEB}` + rest.link

  return (
    <>
      <a className="whatsapp-button" {...rest ? { href: `https://api.whatsapp.com/send?phone=51${'950209380'}&text=Hola%2C%20${link.toString().split(' ').join('%20')}` } : { href: '#!' }} target="_blank" {...rest}>
        <img src="/wasap-green.svg" alt="" />
        <span>Hacer pedido</span>
      </a>

      <style jsx>{`
        .whatsapp-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: .6rem;
          padding: .5rem 0;
          border-radius: 4px;
          background-color: #fff;
          color: #517201;
          border: 1px solid #517201;
        }

        .whatsapp-button img {
          width: 17px;
        }

        .whatsapp-button span {
          text-transform: uppercase;
          font-size: 1rem;
        }

        @media screen and (min-width: 540px) {
          .whatsapp-button {
            gap: 1rem;
          }

          .whatsapp-button img {
            width: 24px;
          }

          .whatsapp-button span {
            font-size: 1rem;
            font-weight: 600;
          }
        }`}</style>
    </>
  )
}

export default WhatsappButton
