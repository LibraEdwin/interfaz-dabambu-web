import { useState } from 'react'
import { formatToSoles } from '../lib/AlertMessage'

export default function BusquedaProducto({
  placeholder,
  arrProducto,
  handleDisplayProducto,
  closeModal
}) {
  const [filteredProducto, setFilteredProducto] = useState([])
  const [valueInput, setValueInput] = useState('')

  const handleFilter = (e) => {
    setValueInput(e.target.value)
    const searchWord = e.target.value
    const newFilter = arrProducto.filter(producto => {
      return producto.nombre.toLowerCase().includes(searchWord.toLowerCase())
    })

    if (searchWord === '') {
      setFilteredProducto([])
    } else {
      setFilteredProducto(newFilter)
    }
  }

  return (
    <>
      <div className='modal__busqueda modal__container' >
        <span className="close__modal--busqueda" onClick={closeModal} > X CERRAR</span>
        <input type='text' placeholder={placeholder} onChange={handleFilter} value={valueInput} />

        <table id='producto' >
          <thead>
            <tr>
              <th>Id producto</th>
              <th>Nombre de producto</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              filteredProducto.length >= 1
                ? filteredProducto?.slice(0, 4).map(producto => {
                  return (
                    <tr key={producto._id} className="item">
                      <td>{producto._id}</td>
                      <td>{producto.nombre}</td>
                      <td>{producto.categoria?.nombreCategoria}</td>
                      <td>{formatToSoles(producto.precio)}</td>
                      <td>{producto.precio}</td>

                      <td
                        className="close__modal--busqueda"
                        onClick={handleDisplayProducto}
                        id={producto._id}
                        style={{ textDecoration: 'underline', cursor: 'pointer' }}
                      >Ver producto
                      </td>

                    </tr>
                  )
                })
                : arrProducto?.slice(0, 4).map(producto => {
                  return (
                    <tr key={producto._id} className="item">
                      <td>{producto._id}</td>
                      <td>{producto.nombre}</td>
                      <td>{producto.categoria?.nombreCategoria}</td>
                      <td>{formatToSoles(producto.precio)}</td>
                      <td
                        className="close__modal--busqueda"
                        onClick={handleDisplayProducto}
                        id={producto._id}
                        style={{ textDecoration: 'underline', cursor: 'pointer' }}
                      >Ver producto
                      </td>

                    </tr>
                  )
                })
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
      </div>
      <div className="overlay" ></div>
      <style jsx>{`
        .modal__busqueda { 
          border: 1px solid #FFFFFF;
          height: auto;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          display:grid;
          row-gap: 1rem;
          background: #FFFFFF;
          padding: 1rem 2rem 2rem;
          position: fixed;
        }

        .hidden{
          display:none
        }

        .modal__busqueda > span {
          font-size: 15px;
          font-weight: 700;
          color: #000000;
          justify-self: end;
        }
        
        .modal__busqueda a {
          color: #4D4C4C;
          font-family: Roboto;
          font-weight: 400;
          text-decoration-line: underline;
        }

        .close__modal--busqueda{
          text-decoration: underline;
          cursor: pointer
        }

        .close__modal--busqueda:first-child{
          cursor: pointer;
          text-decoration: none
        }

        .item:hover {
          background-color: rgba(158, 158, 158, 0.4);
        }
      `}
      </style>
    </>
  )
}
