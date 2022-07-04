import React from 'react'

export default function Mensaje() {
  return (
    <section className="container__mensaje">
      <h1 className="container__mensaje--title">
        Un parte de la naturaleza contigo
      </h1>
      <p className="container__mensaje--info">
        Ya sea en un rincón del hogar o en oficinas, un bambú es la mejor
        companía.
      </p>
      <button className="container__mensaje--button button">IR A TIENDA</button>
      <style jsx>{`
          .container__mensaje {
            background-image: url("img_parallaxv2.jpg");
            background-color: rgba(42, 60, 1, 0.3);
            display: grid;
            height: 50vh;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
          }

          .container__mensaje--title {
            /* font-size: 36px; */
            font-size: 8vw;
            text-align: center;
            padding: 1.3em 2.5em 0 2.5em;
            /* border:solid; */
          }

          .container__mensaje--info {
            color: white;
            /* font-size: 24px; */
            font-size: 4.2vw;
            /* border:solid; */

            text-align: center;
            padding: 0 2rem;
          }

          .container__mensaje--button {
            padding: 0.5rem 3.4rem;
            font-size: 18px;
            margin-bottom: 1.5rem;
          }

          @media screen and (min-width: 620px) {
            .container__mensaje {
              height: 35vh;
              justify-content: normal;
            }

            .container__mensaje--title {
              font-size: 36px;
              text-align: center;
              padding-top: 1.4em;
            }

            .container__mensaje--info {
              color: white;
              font-size: 18px;
              text-align: center;
              padding: 1em 0;
            }

            .container__mensaje--button {
              margin-bottom: 0;
            }

            @media screen and (min-width: 960px) {
              .container__mensaje {
                height: 50vh;
              }

              .container__mensaje--title {
                font-size: 64px;
                padding: 0;
                margin: 1em 2.7em 0 2.7em;
              }

              .container__mensaje--info {
                font-size: 24px;
              }
            }

            @media screen and (min-width: 1200px) {
              .container__mensaje--title {
                margin: 1em 4.5em 0 4.5em;
              }
            }
          }
        `
      }</style>
    </section>
  )
}
