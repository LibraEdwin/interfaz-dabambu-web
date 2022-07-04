import React from 'react'
import Button from './common/Button'

export default function Banner() {
  return (
    <>
      <section className="banner">
        <div className="banner__inner">
          <h1 className="banner__title">Das lo que<span>recibes</span></h1>
          <p className="banner__info">De los <span>regalos</span> más sencillos, el más <span>útil</span><br /> y de los
            más <span>resistentes</span>, el más tierno y<br /> <span>generoso</span> .</p>
          {/* <button className="banner__button button">DA UN BAMBÚ</button> */}
          <Button variante="banner">Da un bambú</Button>
        </div>
      </section>

      <style jsx>{`
        .banner {
          height: 100vh;
          background-image: linear-gradient(171.46deg, rgba(42, 60, 1, 0.5) 4.48%, rgba(81, 114, 1, 0.15) 96.71%), url('banner-mobile.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: -1%;
          display: flex;
          align-items: center;
          padding: 0 1rem;
          justify-content: center;
        }

        .banner__inner {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .banner__title {
          font-size: 48px;
          padding-top: 9rem;
          text-align: center;
        }

        .banner__title span::before {
          content: "a";
          white-space: pre;
        }

        .banner__info {
          color: white;
          font-weight: 700;
          line-height: 1.8;
          font-size: 3.35vw;
          text-align: center;
          margin: 3rem 0;
        }

        .banner__button {
          font-size: 18px;
          padding: 0.6rem 3.4rem;
        }

        @media screen and (min-width: 620px) {
          .banner {
            background-image: linear-gradient(171.46deg, rgba(42, 60, 1, 0.5) 4.48%, rgba(81, 114, 1, 0.15) 96.71%), url('banner_1.jpg');
            background-position: top right 20%;
            height: 100vh;
          }

          .banner__title {
            padding-top: 0;
          }

          .banner__info {
            font-size: 18px;
            margin-top: 2rem;
            margin-bottom: 3rem
          }
        }

        @media screen and (min-width: 960px) {
          .banner {
            height: 100vh;
            background-image: url('banner_1.jpg');
            display: flex;
            justify-content: flex-start;
            padding: 0 0 0 4.5rem;
          }

          .banner__inner {
            align-items: flex-start;
          }

          .banner__title {
            text-align: initial;
            font-size: 64px;
            margin-left: -0.5rem;
            color: #517201;
            padding: initial;
            text-align: left;
          }

          .banner__info {
            text-align: left;
            font-size: 24px;
            font-weight: 300;
            color: #517201;
            padding: 2.5rem 0 3rem;
            line-height: normal;
          }

          .banner__info span {
            font-weight: 600;
          }

          .banner__button {
            font-size: 18px;
            padding: 0.5em 3em;
          }

          @media screen and (min-width: 1200px) {
            .banner__title span::before {
              content: inherit;
              margin-left: 1rem
            }

            .banner__title span {
              margin-left: 1.3rem
            }
          }
        }`}</style>
    </>
  )
}
