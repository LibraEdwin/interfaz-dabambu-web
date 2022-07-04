import React, { useEffect } from 'react'
import BackButton from 'components/common/BackButton'
import WhatsappButton from 'components/common/WhatsappButton'
import ProductsCarousel from 'components/sections/ProductsCarousel'
import Head from 'next/head'
import Button from 'components/common/Button'
import { Card } from 'components/icons'
import 'react-medium-image-zoom/dist/styles.css'
import { useRouter } from 'next/router'
import FancyBox from 'components/containers/FancyBox'
import { useGlobalContext } from 'context/GlobalContext'

function Product({ product }) {
  const { isFallback } = useRouter()
  // const [tokenExist, setTokenExist] = useState(false)
  const router = useRouter()
  const { handleButtonBuy } = useGlobalContext()

  const back = () => {
    router.push('/tienda')
    localStorage.removeItem('url')
  }

  useEffect(() => {
    // if (product) {
    //   const tokenExist = localStorage.getItem('tokenCliente')
    //   if (tokenExist) {
    //     setTokenExist(true)
    //   }
    // }
  }, [])

  if (isFallback) {
    return <> Página cargando .... </>
  }

  return (
    <>
      <Head>
        <title>Dabambu-{product?.nombre}</title>
        <meta name="title" content={`Dabambu- ${product?.nombre}`} />
        <meta name="description" content={`${product?.descripcion}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${process.env.HOST_NAME}/product?o/${product?.nombreURL}`} />
        <meta property="og:title" content={`Dabambu- ${product?.nombre}`} />
        <meta property="og:description" content={`${product?.descripcion}`} />
        <meta property="og:image" content={`${process.env.DOMAIN_IMAGES}${product?.fotoProducto}`} />
      </Head>
      <section className="product">
        <div className="product__container">
          <BackButton text="Ir a tienda" onClick={() => back()} />
          <div className="product__grid">
            <FancyBox options={{ infinite: false }}>
              <div className="product__gallery gallery">
                <div className="gallery__pictures">
                  {product?.fotosAnexas.length > 0 && product?.fotosAnexas
                    .filter(photo => typeof photo === 'string')
                    .map((photo, index) => (
                      <a key={index}
                        data-fancybox="gallery"
                        data-src={process.env.DOMAIN_IMAGES + photo}>
                        <figure style={{ width: '130px' }}>
                          <img
                            alt="that wanaka tree"
                            src={process.env.DOMAIN_IMAGES + photo}
                            width="100%"
                          />
                        </figure>
                      </a>
                    ))}
                </div>
                <div className="gallery__main-picture">
                  <a
                    data-fancybox="gallery"
                    data-src={process.env.DOMAIN_IMAGES + product?.fotoProducto}
                  >
                    <figure>
                      <img src={process.env.DOMAIN_IMAGES + product?.fotoProducto} alt="" />
                    </figure>
                  </a>
                </div>
              </div>
            </FancyBox>
            <div className="product__content">
              <h1 className="product__title">{product?.nombre}</h1>
              <p className="product__paragraph">{product?.descripcion}</p>
              <span className="product__price">S/. {product?.precio}</span>
              <WhatsappButton link={`/producto/${product?.nombreURL}`} />
              <Button variante="primary" as="a" onClick={() => handleButtonBuy(product.nombreURL)} ><Card />Comprar con tarjeta</Button>
            </div>
          </div>
        </div>

        {/* Carrusel de productos vinculados */}

        <div className="product__carousel">
          {
            product.productosAccesorios.length && (
              <ProductsCarousel
                title="Accesorios"
                items={product.productosAccesorios}
              />
            )
          }
        </div>
      </section>

      <style jsx>{`      
        .product__container {
          padding: 0 1rem;
          max-width: 1300px;
          width: 100%;
          margin: 80px auto 0 auto;
        }

        .product__content {
          display: flex;
          flex-direction: column;
          row-gap: 0.5rem;
        }

        .product__grid {
          display: grid;
          grid-row-gap: 2rem;
          margin-top: 2rem;
        }

        .gallery {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          grid-gap: .5rem;
          grid-auto-flow: column;
        }

        .gallery figure {
          margin: 0;
          height: fit-content;
        }

        .gallery img {
          width: 100%;
        }

        .gallery__pictures {
          grid-column-end: span 1;
          display: grid;
          grid-row-gap: .5rem;
          height: fit-content;
        }

        .gallery__main-picture {
          grid-column-end: span 4;
        }

        .product__title {
          font-size: 24px;
          color: #517201;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .product__paragraph {
          font-weight: 300;
          color: #517201;
          margin-bottom: 1rem;
        }

        .product__price {
          align-self: flex-end;
          font-size: 24px;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .product__carousel {
          margin: 3rem 0;
        }

        @media screen and (min-width: 720px) {
          .product__grid {
            grid-gap: 2rem;
            grid-template-columns: repeat(5, 1fr);
            grid-row-gap: 0;
            margin-top: 3rem;
          }

          .product__gallery {
            grid-column-end: span 3;
          }

          .product__content {
            grid-column-end: span 2;
          }

          .gallery,
          .gallery__pictures {
            grid-gap: 1rem;
          }

          .product__title {
            font-size: 28px;
            margin-bottom: 2rem;
          }

          .product__paragraph,
          .product__price {
            margin-bottom: 2rem;
          }

          .product__carousel {
            margin: 5rem 0;
          }
        }

        @media screen and (min-width: 960px) {
          .product__grid {
            grid-gap: 3rem;
          }

          .gallery {
            grid-gap: 1.5rem;
          }
        }`}</style>
    </>
  )
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const id = await params.slug.split('-')[0]

  const resProd = await fetch(`${process.env.URI_API}/api-dabambu-service/producto/${id}`)
  const prodJson = await resProd.json()
  const producto = prodJson.body
  const { body } = producto

  return {
    props: {
      product: body
    },
    revalidate: 10
  }
}

export default Product

/*
export async function getStaticProps({ params }) {

  const codigo = await params.slug.split('-')[0]
  const { body } = await getData(`${process.env.URI_API}/api-dabambu-service/producto?codigo=${codigo}`)

  return {
    props: { product: body[0] }, revalidate: 30
  }
}
*/

/*
export async function getServerSideProps(context) {
  const { query } = context;

  try {
    const res = await fetch(`${process.env.URI_API}/api-dabambu-service/producto?codigo=${query.slug.split('-')[0]}`);
    const data = await res.json();
    product = data.body[0];
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      product
    },
  }
}
*/
