import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import WhatsappButton from 'components/common/WhatsappButton'
import Button from 'components/common/Button'
import { Card } from 'components/icons'
import { useGlobalContext } from 'context/GlobalContext'
import { CardWrapper } from './productCard.styled'

const ProductCard = (props) => {
  const {
    thumbnail,
    title,
    price,
    to,
    btn,
    ...rest
  } = props

  const [image, setImage] = useState(process.env.DOMAIN_IMAGES + thumbnail)
  const [imageIsLoaded, setImageIsLoaded] = useState(false)  
  const [tokenExist, setTokenExist] = useState(false)
  // console.log(tokenExist, 'token product card')

  const { handleButtonBuy } = useGlobalContext()

  useEffect(() => {
    const tokenExist = localStorage.getItem('tokenCliente')
    if (tokenExist) {
      setTokenExist(true)
    }
  }, [])


  // onError={() => setImage(process.env.DOMAIN_IMAGES + '/uploads/statics/error-img.jpg')}
  // placeholder="blur"
  // blurDataURL={`/_next/image?url=${image}&w=16&q=1`}

  // onLoad={(e) => {
  //   // e.target.src.indexOf('data:image/gif;base64') < 0 && ( setImageIsLoaded(true) ) 
  //   setImageIsLoaded(true) 
  // }}


  return (
    <>
      <CardWrapper {...rest}>
        <Link href={`/producto/${to}`}>
          <a className="product-card__body">
            <figure className="product-card__thumbnail">
              <Image
                layout='fill'
                objectFit='cover'
                src={image}
                onLoad={(e) => {
                  // e.target.src.indexOf('data:image/gif;base64') < 0 && ( setImageIsLoaded(true) ) 
                  setImageIsLoaded(true)
                }}
                alt="" />

              <div className="view">
                <img
                  src={process.env.DOMAIN_IMAGES + '/uploads/statics/loader.gif'}
                  alt=""
                  style={{ objectFit: 'cover' }} />
              </div>

            </figure>
            <div className="product-card__content">
              <h3 className="product-card__title">{title}</h3>
              <span className="product-card__price">S/.{price}</span>
            </div>
          </a>
        </Link>
        <div className='buttons-contain'>
          <WhatsappButton link={`/producto/${to}`} />
          <Button variante="primary" as="a" onClick={() => handleButtonBuy(to)}><Card />Comprar con tarjeta</Button>
        </div>
      {/* </article> */}
      </CardWrapper>

      <style jsx>{`

        .view {
          opacity: ${imageIsLoaded? 0: 1};
        }

        .product-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          width: 13rem;
        }

        .buttons-contain {
          display: flex;           
          flex-direction: column;
          row-gap: 0.5rem;
        }

        .product-card__thumbnail {
          margin: 0;
          width: 13rem;
          height: 13rem;
          position: relative;
          // width: 233px;
          // height: 233px;
        }

        .product-card__thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .product-card__content {
          padding: 1rem 0;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: nowrap;
        }

        .product-card__title,
        .product-card__price {
          font-size: 14px;
          font-weight: normal;
        }

        .product-card__title {
          width: 70%;
        }

        .product-card__price {
          width: 30%;
          text-align: right;
        }

        @media screen and (min-width: 540px) {
          .product-card__title,
          .product-card__price {
            font-size: 20px;
          }
        }

        @media screen and (min-width: 720px) {
          .product-card {
            margin: 0 auto;
          }

          .buttons-contain {
            row-gap: 1rem;
          }
        }

        @media screen and (min-width: 960px) {
          .product-card {
            width: 300px;
          }

          .product-card__thumbnail {
            width: 300px;
            height: 300px;
          }
        }

        @media screen and (min-width: 1200px) {
          .product-card {
            width: 350px;
          }

          .product-card__thumbnail {
            width: 350px;
            height: 350px;
          }
        }
			`}</style>
      
    </>
  )
}

export default ProductCard
