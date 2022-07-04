import { useState, useEffect } from 'react'
import { ProductCard } from 'components/containers'

const Index = ({ products }) => {
  const [activeVerTodos, setActiveVerTodos] = useState(true)
  const [activeCategories, setActiveCategories] = useState(false)

  const [categorias, setCategorias] = useState([])
  const [productosFiltrados, setProductosFiltrados] = useState([])

  const handleDisplayVerTodos = () => {
    setActiveVerTodos(true)
    setActiveCategories(false)
  }

  const handleDisplayProductosFiltrados = async (codigo) => {
    const res2 = await fetch(`${process.env.URI_API}/api-dabambu-service/producto/categoria/${codigo}`)
    const json = await res2.json()
    const dataFilter = json.body
    setProductosFiltrados(dataFilter)
    setActiveVerTodos(false)
    // setActiveCategories(true)
  }

  useEffect(async () => {
    const resCategorias = await fetch(`${process.env.URI_API}/api-dabambu-service/categoria`)
    const jsonCategorias = await resCategorias.json()
    const dataCategorias = jsonCategorias.body
    setCategorias(dataCategorias)
  }, [])

  return (
    <section className="store">
      <div className="store__container">
        <div className="store__grid store-grid">
          <div className="store-grid__aside">
            <div className="store__sticky">
              <h1 className="store__title">Catálogo de regalos</h1>
              <ul className="store-filter">

                <li
                  className={
                    activeVerTodos
                      ? 'store-filter__item store-filter__item--active'
                      : 'store-filter__item'
                  }
                  onClick={handleDisplayVerTodos}
                >Ver todos
                </li>
                {
                  categorias.map((categoria, index) => {
                    return (
                      <li
                        key={index}
                        className={
                          activeCategories
                            ? 'store-filter__item store-filter__item--active'
                            : 'store-filter__item'
                        }
                        onClick={() => handleDisplayProductosFiltrados(categoria._id)}
                      >
                        {categoria.nombreCategoria}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
          <div className="store-grid__content">
            {
              activeVerTodos &&
              (
                <div className="products-grid">
                  {
                    products.map((producto) => {
                      return (
                        <div className="products-grid__cell" key={producto._id}>
                          <ProductCard
                            title={producto.nombre}
                            price={producto.precio}
                            thumbnail={producto.fotoProducto}
                            to={producto.nombreURL}
                            btn={producto}
                          />
                        </div>
                      )
                    }
                    )
                  }
                </div>
              )
            }

            {!activeVerTodos && (
              <div className="products-grid">
                {
                  productosFiltrados?.map((producto) => {
                    return (
                      <div className="products-grid__cell" key={producto._id}>
                        <ProductCard
                          title={producto.nombre}
                          price={producto.precio}
                          thumbnail={producto.fotoProducto}
                          to={producto.nombreURL}
                          btn={producto}
                        />
                      </div>
                    )
                  }
                  )
                }
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`

        .products-grid__cell {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .store__container {
          padding: 0 1rem;
          max-width: 1300px;
          width: 100%;
          margin: 0 auto 3rem;
        }

        .store__sticky {
          position: sticky;
          top: 160px;
        }

        .store__title {
          white-space: nowrap;
          color: #517201;
          font-size: 24px;
          text-align: center;
          margin-bottom: 2rem;
          font-weight: 400;
        }

        .store-filter {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-direction: row-reverse;

          display: grid;
          grid-template-columns: repeat(2, 2fr);
          gap: 5px;
        }

        .store-filter__item {
          border-radius: 12px;
          border: 1px solid #BFA122;
          color: #BFA122;
          text-transform: uppercase;
          background-color: #fff;
          cursor: pointer;
          padding: .75rem 1rem;
          font-size: 12px;
          white-space: nowrap;
          text-align: center;
        }

        .store-filter__item:hover,
        .store-filter__item--active {
          background-color: #BFA122;
          color: #fff;
        }

        .store-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          grid-gap: 2rem;
        }

        .store-grid__aside {
          grid-column-end: span 2;
        }

        .store-grid__content {
          grid-column-end: span 2;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          row-gap: 2rem;
          column-gap: 1rem;
        }

        @media screen and (min-width: 620px) {
          .store-filter{
            display: grid;
            grid-template-columns: repeat(4, auto);
          }
        }

        @media screen and (min-width: 540px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .store-filter__item {
            font-size: 14px;
          }
        }

        @media screen and (min-width: 720px) {   
          .store-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .store-grid__aside {
            grid-column-end: span 1;
          }

          .store__title {
            text-align: left;
          }

          .store-filter {
            display: block;
          }

          .store-filter__item {
            border-radius: 0;
            border: 1px solid #ACACAC;
            color: #517201 !important;
            font-size: 16px;
            text-align: initial;
          }

          .store-filter__item:not(:last-child) {
            border-bottom: 0;
          }

          .store-filter__item:hover,
          .store-filter__item--active {
            background-color: #D2BD64;
          }

          .products-grid {
            margin-top: 60px;
          }
        }

        @media screen and (min-width: 960px) {
          .store-grid,
          .products-grid {
            grid-gap: 3rem;
          }

          .products-grid {
            margin-top: 70px;
          }

          .store__title {
            font-size: 36px;
          }
        }`}</style>
    </section>
  )
}

export async function getServerSideProps() {
  let products = []

  try {
    const res = await fetch(`${process.env.URI_API}/api-dabambu-service/producto/`)
    const data = await res.json()
    products = data.body
  } catch (e) {
    console.log(e)
  }

  return {
    props: {
      products
    }
  }
}

export default Index
