import { Close } from 'components/icons'
import { CategoryCtx } from 'context/Category'
import { useContext, useState } from 'react'
import Swal from 'sweetalert2'
import InputGroup from './InputGroup'
import { ModalCategorasContainer, ModalCategoriasWrapper, ModalButtonClose } from './modalCategorias.styled'
import TablaCategorias from './TablaCategorias'

const stateInitial = {
  _id: null,
  nombreCategoria: ''
}

export default function ModalCategorias({ close }) {
  const { categorias, setCategorias, filtroCategoria, setFiltroCategoria } = useContext(CategoryCtx)
  const [inputCategory, setInputCategory] = useState(stateInitial)

  // useEffect(() => {
  //   getAllCategories()
  // }, [])

  const getAllCategories = () => {
    fetch(`${process.env.URI_API}/api-dabambu-service/categoria`)
      .then(res => res.json())
      .then(res => {
        setCategorias(res.body)
        setFiltroCategoria(res.body)
      })
  }

  const handleOnChaneInput = (e) => {
    const { value } = e.target
    setInputCategory({ ...inputCategory, nombreCategoria: value })
    if (!inputCategory._id) {
      searchCategory(value)
    }
  }

  const searchCategory = (str) => {
    const results = categorias.filter(categoria => {
      return categoria.nombreCategoria.toLowerCase().includes(str.toLowerCase())
    })

    setFiltroCategoria(results)
  }

  const successResponse = (text) => {
    getAllCategories()
    setInputCategory(stateInitial)
    Swal.fire({
      icon: 'success',
      text,
      confirmButtonColor: '#517201'
    })
  }

  const addCategory = () => {
    fetch(`${process.env.URI_API}/api-dabambu-service/categoria`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(inputCategory)
    })
      .then(res => res.json())
      .then(res => {
        successResponse('Se creó correctamente')
      })
      .catch(err => console.log(err.message))
  }

  const editCategory = () => {
    fetch(`${process.env.URI_API}/api-dabambu-service/categoria/${inputCategory._id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(inputCategory)
    })
      .then(res => res.json())
      .then(res => {
        successResponse('Se actualizó correctamente')
      })
      .catch(err => console.log(err.message))
  }

  const getCategory = (id) => {
    const categoria = categorias.find(categoria => categoria._id === id)

    setInputCategory(categoria)
  }

  const deleteCategory = (id) => {
    Swal.fire({
      icon: 'warning',
      title: 'Importante',
      text: '¿Estás seguro que deseas eliminar la categoría?',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      denyButtonText: 'No',
      confirmButtonColor: '#517201'
    })
      .then(result => {
        if (result.isConfirmed) {
          fetch(`${process.env.URI_API}/api-dabambu-service/categoria/${id}`, {
            method: 'DELETE'
          })
            .then(res => {
              getAllCategories()
              Swal.fire({
                icon: 'success',
                text: 'Se eliminó la categoría',
                confirmButtonColor: '#517201'
              })
            })
            .catch(err => console.log(err.message))
        }
      })
  }

  return (
    <ModalCategoriasWrapper>
      <ModalCategorasContainer>
        <ModalButtonClose onClick={close}><Close /> CERRAR</ModalButtonClose>
        <InputGroup
          issetCategory={filtroCategoria.length > 0}
          defaultValue={inputCategory.nombreCategoria}
          onChange={handleOnChaneInput}
          handleAdd={addCategory}
          handleEdit={editCategory}
          id={inputCategory._id}
        />
        <TablaCategorias
          categorias={filtroCategoria}
          handleEdit={getCategory}
          handleDelete={deleteCategory}
        />
      </ModalCategorasContainer>
    </ModalCategoriasWrapper>
  )
}
