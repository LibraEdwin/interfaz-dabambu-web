import React from 'react'
import ProductsCarousel from './sections/ProductsCarousel'

export default function Destacados({ items }) {
  return (
    <>
      <section className="container__destacados">
        <h2 className="container__destacados--title title">Bambúes destacados</h2>
        <ProductsCarousel items={items} />
      </section>

      <style jsx>{`
        .container__destacados {
          padding: 4rem 0;
        }

        .container__destacados--title {
          text-align: center;
          margin: auto;
          font-size: 6.5vw
        }

        @media screen and (min-width: 620px) {
          .container__destacados--title {
            font-size: 4vw;
          }
        }

        @media screen and (min-width: 960px) {
          .container__destacados {
            padding: 6rem 0;
          }

          .container__destacados--title {
            font-size: 36px;
          }
        }`}</style>
    </>
  )
}
