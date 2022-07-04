import React from 'react'
import Link from 'next/link'

export default function nosotros() {
  const fbLink = 'https://www.facebook.com/DaBambu-Bamb%C3%BAs-y-accesorios-109251668092906'
  const igLink = 'https://www.instagram.com/dabambuperu/'
  return (
    <section className="container__nosotros">
      <p className="container__nosotros--info">
        <span>Somos una tienda virtual de regalos de bambú y accesorios.</span>
        <br />
        El bambú obsequiado, despertará en aquella persona un balance
        espiritual, un armonioso bienestar y llenará de luz sus días. Además
        tendrán una pequeña pero importante conexión con la naturaleza.
        <br />
        Nuestra misión es que el agasajado, al igual que tú, desate su poder de
        dar con cualquiera de estos hermosos bambúes a otro ser querido. Dando
        así, lo que una vez recibió.
        <br />
      </p>
      <p className="container__nosotros--saludo">
        Dabambu,
        <br />
        Das lo que recibes.
      </p>
      {/* <Instagram/> */}
      <div className="container__nosotros--redes">
        <p>Síguenos en:</p>
        <div className="redes__logo" style={{ cursor: 'pointer' }}>
          <Link href={igLink}>
            <a target="_blank" className="redes__wrapper">
              <img
                className="redes__logo--ig"
                src="/instagram_green.svg"
                alt="instagram"
              />
              <span>dabambú</span>
            </a>
          </Link>
        </div>
        <div className="redes__logo" style={{ cursor: 'pointer' }}>
          <Link href={fbLink} >
            <a target="_blank" className="redes__wrapper">
              <img
                src="/facebook_green.svg"
                alt="facebook"
              />
              <span>dabambú</span>
            </a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .container__nosotros {
          padding: 3rem 2.5rem 2rem 2.5rem;
          font-size: 3.4vw;
        }

        .container__nosotros--info {
          line-height: 1.5rem;
          text-align: justify;
        }

        .container__nosotros--info span {
          line-height: 4;
        }

        .container__nosotros--saludo {
          padding-top: 1.5rem;
          line-height: 1.5rem;
        }

        .container__nosotros--redes {
          padding-top: 2rem;
          display: flex;
          flex-direction: column;
          line-height: 2.3rem;
          align-items: center;
        }

        .redes__logo {
          display: flex;
          gap: 1rem;
        }

        .redes__logo img {
          width: 1.6em;
        }

        .redes__wrapper{
          display:flex;
          column-gap: 10px;
        }

        @media screen and (min-width: 620px) {
          .container__nosotros {
            font-size: 2.5vw;
            padding: 4em 4em 2em;
          }

          .container__nosotros--info {
            line-height: 2rem;
          }

          .container__nosotros--info span {
            line-height: 4rem;
          }

          .container__nosotros--saludo {
            padding-top: 1.5rem;     
            line-height: 2rem;                   
          }

          .container__nosotros--redes p {
            padding-bottom: 1.2rem;
          }
          .container__nosotros--redes {
            line-height: 3rem;
          }

          .container__nosotros--redes span {
            font-size: 2.2vw;
          }

          .redes__logo img {
            width: 1.5em;
          }
        }

        @media screen and (min-width: 960px) {
          .container__nosotros {
            font-size: 24px;
            padding: 4em 5em 3em;
          }

          .container__nosotros--info {
            line-height: 1.8em;
          }

          .container__nosotros--saludo {
            padding-top: 2em;
            line-height: 1.8em;
          }

          .container__nosotros--redes {
            line-height: 4rem;
          }

          .container__nosotros--redes p {
            font-size: 36px;
            padding-bottom: 1em;
          }

          .container__nosotros--redes span {
            font-size: 24px;
          }

          .redes__logo--fb {
            width: 3rem;                        
          }
        }
    `}</style>
    </section>
  )
}
