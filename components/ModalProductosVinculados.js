import { useEffect, useRef } from 'react'
import { formatToSoles } from '../lib/AlertMessage'

export default function productosVinculados({
  placeholder,
  addProductoVinculado,
  deleteProductoVinculado,
  productoVinculadoSelected,
  arrProductosVinculadosSelected,
  filteredProducto,
  handleFilter,
  inputValue
}) {
  const modalProductosVinculados = useRef('')
  const overlay = useRef('')

  const closeModalProductosVinculados = function () {
    modalProductosVinculados.current.classList.add('hidden')
    overlay.current.classList.add('hidden')
  }

  useEffect(() => {
    const btnOpenModalProductosVinculados = document.querySelector('.show__modal--productos-vinculados')

    const openModalProductosVinculados = function () {
      modalProductosVinculados.current.classList.remove('hidden')
      overlay.current.classList.remove('hidden')
    }

    btnOpenModalProductosVinculados.addEventListener('click', openModalProductosVinculados)
  }, [])

  return (
    <>
      <div className='modal__productos-vinculados modal__wrapper hidden' ref={modalProductosVinculados}>
        <span className="close__modal--productos-vinculados" onClick={closeModalProductosVinculados}>X CERRAR</span>
        <input type="text" placeholder={placeholder} onChange={handleFilter} value={inputValue} />
        {filteredProducto.length !== 0 && (
          <div className="dataResult">
            <table className="searchTable">
              <tbody>
                {
                  filteredProducto?.map((producto) => {
                    return (
                      <tr key={producto._id}>
                        <td className="imagen"><img src={`${process.env.URI_API}${producto.fotoProducto}`} width={70} height={70} /></td>
                        <td>{producto.nombre}</td>
                        <td>{producto.categoria?.nombreCategoria}</td>
                        <td>{formatToSoles(producto.precio)}</td>
                        <td><img src="/add.svg" width={39} height={27} onClick={addProductoVinculado} style={{ cursor: 'pointer' }} id={producto._id} /></td>
                      </tr>)
                  })
                }
              </tbody>
            </table>
          </div>)
        }
        {productoVinculadoSelected.length !== 0 && (
          <table>
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre de producto</th>
                <th>Categoría</th>
                <th>Precio</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                arrProductosVinculadosSelected.length !== 0 && (
                  arrProductosVinculadosSelected.map(producto => {
                    return (
                      <tr key={producto._id}>
                        <td className="imagen"><img src={`${process.env.URI_API}${producto.fotoProducto}`} width={70} height={70} /></td>
                        <td>{producto.nombre}</td>
                        <td>{producto.categoria?.nombreCategoria}</td>
                        <td>{formatToSoles(producto.precio)}</td>
                        <td><img src="/tacho.svg" width={23} height={30} onClick={deleteProductoVinculado} style={{ cursor: 'pointer' }} id={producto._id} /></td>
                      </tr>)
                  })

                )
              }
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
      <div
        className="overlay hidden"
        onClick={closeModalProductosVinculados}
        ref={overlay}
      ></div>
      <style jsx>{`
          .modal__productos-vinculados {
            display: grid;
            border: 1px solid #ffffff;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            padding: 1rem 2rem 2rem;
            margin: 5rem auto;
            width: 975px;
            height: auto;
            border-collapse: inherit;
          }

          .hidden {
            display: none;
          }

          .agregar__productos--vinculados {
            border: 1px solid #a8a8a8;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 4px;
            margin: 0;
            border-style: none;
          }

          .agregar__productos--vinculados > tr,
          td {
            border-style: none;
          }

          .modal__productos-vinculados > span {
            font-family: Roboto;
            font-size: 15px;
            font-weight: 700;
            color: #000000;
            justify-self: end;
            cursor: pointer;
            margin-bottom: 1rem;
          }

          tr {
            height: 5rem;
          }

          .imagen {
            padding: 0.5rem 0 0.3rem;
            height: auto;
          }

          .searchTable {
            border: none;
          }

          .searchTable tr {
            border-bottom: none;
          }
          .searchTable th,
          td {
            width: 800px;
          }

          .searchTable::-webkit-scrollbar {
            display: none;
          }

          .dataResult {
            height: 200px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border: 1px solid #a8a8a8;
            border-top: none;
            border-radius: 4px;
            overflow: hidden;
            overflow-y: auto;
            position: absolute;
            background: white;
            margin: 110px 30px 0px 30px;
            // margin-top:110px;
            z-index: 600;
          }

          .dataResult::-webkit-scrollbar {
            display: none;
          }
        `
      }</style>
    </>
  )
}
