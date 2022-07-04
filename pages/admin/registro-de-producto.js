import Image from 'next/image'
import { useContext, useEffect, useRef, useState } from 'react'
import FooterRegistro from '../../components/FooterRegistro'
import ModalLink from '../../components/ModalLink'
import ModalBusqueda from '../../components/ModalBusqueda'
import ModalProductosVinculados from '../../components/ModalProductosVinculados'
import { getData, deleteData } from '../../lib/Api'
import FotoAnexaCard from '../../components/FotoAnexaCard'
import FotoProductoCard from '../../components/FotoProductoCard'
import { alertMessage, successMessage } from '../../lib/AlertMessage'
import NavAdmin from '../../components/Admin/NavAdmin'
import { CategoryCtx, CategoryProvider } from 'context/Category'
import { useGlobalContext } from '../../context/GlobalContext'
import Login from '../login'
import { useRouter } from 'next/router'

export default function ContentRegistro({ arrCategoria, arrProducto }) {
  return (
    <CategoryProvider>
      <RegistroProducto arrCategoria={arrCategoria} arrProducto={arrProducto} />
    </CategoryProvider>
  )
}

function RegistroProducto({ arrCategoria, arrProducto }) {
  const { categorias } = useContext(CategoryCtx)
  const formulario = useRef('')
  const refImg1 = useRef('')
  const refImg2 = useRef('')
  const refImg3 = useRef('')
  const refImg4 = useRef('')
  const refImg5 = useRef('')
  const refCategoriaId = useRef()
  const refNombreURL = useRef('')

  const router = useRouter()

  const [modalBusqueda, setModalBusqueda] = useState(false)
  const [productos, setProductos] = useState([...arrProducto])
  const [producto, setProducto] = useState({})
  const [destacado, setDestacado] = useState(false)
  const [active, setActive] = useState(false)
  const [disableBtn, setDisableBtn] = useState(true)
  const [fileFotoProducto, setFileFotoProducto] = useState('')
  const [previewFotoProducto, setPreviewFotoProducto] = useState('')
  const [fileAnexa2, setFileAnexa2] = useState('')
  const [fileAnexa3, setFileAnexa3] = useState('')
  const [fileAnexa4, setFileAnexa4] = useState('')
  const [fileAnexa5, setFileAnexa5] = useState('')
  const [previewFileAnexa2, setPreviewFileAnexa2] = useState('')
  const [previewFileAnexa3, setPreviewFileAnexa3] = useState('')
  const [previewFileAnexa4, setPreviewFileAnexa4] = useState('')
  const [previewFileAnexa5, setPreviewFileAnexa5] = useState('')
  const [iconFotoProducto, setIconFotoProducto] = useState(false)
  const [icon2, setIcon2] = useState(false)
  const [icon3, setIcon3] = useState(false)
  const [icon4, setIcon4] = useState(false)
  const [icon5, setIcon5] = useState(false)
  const [idProducto, setIdProducto] = useState()
  const { isTokenUser, loggedInUser } = useGlobalContext()
  const [tokenExist, setTokenExist] = useState()

  // Handle file change and preview
  const handleFileFotoProductoChange = (e) => {
    const selectedFile = e.target.files[0]

    // Changing filename
    if (selectedFile) {
      const blob = selectedFile.slice(0, selectedFile.size, selectedFile.type)
      const newFile = new File([blob], '1.png', { type: selectedFile.type })
      setFileFotoProducto(newFile)

      // Preview file
      const filePreview = URL.createObjectURL(selectedFile)
      refImg1.current.src = ''
      setIconFotoProducto(true)
      setPreviewFotoProducto(filePreview)
    }
  }

  const handleFileFotoAnexaChange2 = (e) => {
    const { files } = e.target
    const selectedFile = files[0]
    const newfileName = `2.${selectedFile.name.split('.')[1]}`

    if (files.length > 0) {
      // Changing filename
      const blob = selectedFile.slice(0, selectedFile.size, selectedFile.type)
      const newFile = new File([blob], newfileName, { type: selectedFile.type })
      setFileAnexa2(newFile)
      // Preview file
      const filePreview = URL.createObjectURL(selectedFile)
      refImg2.current.src = ''
      setPreviewFileAnexa2(filePreview)
      setIcon2(true)
    }
  }

  const handleFileFotoAnexaChange3 = (e) => {
    const { files } = e.target
    const selectedFile = files[0]
    const newfileName = `3.${selectedFile.name.split('.')[1]}`

    if (files.length > 0) {
      // Changing filename
      const blob = selectedFile.slice(0, selectedFile.size, selectedFile.type)
      const newFile = new File([blob], newfileName, { type: selectedFile.type })
      setFileAnexa3(newFile)
      // Preview file
      const filePreview = URL.createObjectURL(selectedFile)
      refImg3.current.src = ''
      setPreviewFileAnexa3(filePreview)
      setIcon3(true)
    }
  }

  const handleFileFotoAnexaChange4 = (e) => {
    const { files } = e.target
    const selectedFile = files[0]

    const newfileName = `4.${selectedFile.name.split('.')[1]}`

    if (files.length > 0) {
      // Changing filename
      const blob = selectedFile.slice(0, selectedFile.size, selectedFile.type)
      const newFile = new File([blob], newfileName, { type: selectedFile.type })
      setFileAnexa4(newFile)

      // Preview file
      const filePreview = URL.createObjectURL(selectedFile)
      refImg4.current.src = ''
      setPreviewFileAnexa4(filePreview)
      setIcon4(true)
    }
  }

  const handleFileFotoAnexaChange5 = (e) => {
    const { files } = e.target
    const selectedFile = files[0]
    const newfileName = `5.${selectedFile.name.split('.')[1]}`

    if (files.length > 0) {
      // Changing filename
      const blob = selectedFile.slice(0, selectedFile.size, selectedFile.type)
      const newFile = new File([blob], newfileName, { type: selectedFile.type })
      setFileAnexa5(newFile)

      // Preview file
      const filePreview = URL.createObjectURL(selectedFile)
      refImg5.current.src = ''
      setPreviewFileAnexa5(filePreview)
      setIcon5(true)
    }
  }

  // Handle change input producto

  const changeHandlerProducto = e => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value
    })
  }

  // Destacados

  const handleDestacado = () => {
    setDestacado(true)
    if (destacado === true) {
      setDestacado(false)
    }
  }

  // Copy NombreURL

  const handleCopyURL = () => {
    // creating input of html
    const input = document.createElement('input')
    // adding h4/nombreURL tag text to input
    input.value = refNombreURL.current.textContent
    document.body.appendChild(input)
    input.select()
    document.execCommand('Copy')
    // removing input after copy
    input.remove()
  }

  // Add producto vinculado

  const [productoVinculadoSelected, setProductoVinculadoSelected] = useState('')
  const [arrProductosVinculadosSelected, setArrProductosVinculadosSelected] = useState([])
  const [arrOfIdsProdVincSelected, setArrOfProdVincSelected] = useState([])
  const [filteredProducto, setFilteredProducto] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleFilter = (e) => {
    const searchWord = e.target.value
    setInputValue(searchWord)
    const newFilter = productos.filter(producto => {
      return producto.nombre.toLowerCase().includes(searchWord.toLowerCase())
    })

    if (searchWord === '') {
      setFilteredProducto([])
    } else {
      setFilteredProducto(newFilter)
    }
  }

  const addProductoVinculado = (e) => {
    const idProductoVinculado = Number(e.target.id)
    setArrOfProdVincSelected(prevState => [...prevState, idProductoVinculado])
    const isProducVincSelectedIncluded = arrOfIdsProdVincSelected.includes(idProductoVinculado)
    if (isProducVincSelectedIncluded === false) {
      const urlProductoById = `${process.env.URI_API}/api-dabambu-service/producto/${idProductoVinculado}`
      getData(urlProductoById)
        .then(res => {
          const productoVinculado = res.body.body
          setProductoVinculadoSelected(productoVinculado)
          setArrProductosVinculadosSelected(prevState => [...prevState, productoVinculado])
          setFilteredProducto([])
          setInputValue('')
        })
    }
  }

  // Submiting Producto

  const handleSubmitProducto = () => {
    const formData = new FormData(formulario.current)
    formData.append('destacado', destacado)

    if (arrProductosVinculadosSelected.length >= 1) {
      arrProductosVinculadosSelected.forEach(productoVinculado => {
        formData.append('productosAccesorios', productoVinculado._id)
      })
    }

    const bearer = `Bearer ${tokenExist}`

    fetch(`${process.env.URI_API}/api-dabambu-service/producto`, {
      method: 'POST',
      headers: {
        Authorization: bearer
      },
      body: formData
    }).then(res => {
      console.log(res.status, 'status')
      if (res.status === 401) {
        router.push('/login')
        return
      }
      if (res.status !== 200 && res.ok !== true)
        throw new Error('Completar la información requerida')
      setActive(true)
      setDisableBtn(false)
      res.json().then((data) => {
        const newProduct = data.body
        // console.log("mira",data.body)
        setProducto(newProduct)
        setProductos([...productos, newProduct])
        setIdProducto(data.body._id)
      })
      alertMessage('El producto fue guardado', 'success')
    }).catch(error => {
      alertMessage(error.message, 'error')
    })
  }

  // Nuevo Producto

  const handleNuevoProducto = () => {
    setProducto({
      nombre: '',
      precio: '',
      descripcion: '',
      productosAccesorios: []
    })
    setFileFotoProducto('')
    setFileAnexa2('')
    setFileAnexa3('')
    setFileAnexa4('')
    setFileAnexa5('')
    setDestacado(false)
    setActive(false)
    setIcon2(false)
    setIcon3(false)
    setIcon4(false)
    setIcon5(false)
    setIconFotoProducto(false)
    refCategoriaId.current.value = '0'
    setProductoVinculadoSelected('')
  }

  // cleanFileInputFotoProducto

  const cleanFileInputFotoProducto = () => {
    setFileFotoProducto('')
    setIconFotoProducto(false)
  }

  // Updating producto

  const handleUpdateProducto = () => {
    const formData = new FormData()

    if (producto.nombre) {
      formData.append('nombre', producto.nombre)
    }

    if (producto.descripcion) {
      formData.append('descripcion', producto.descripcion)
    }

    if (refCategoriaId.current.value) {
      formData.append('categoria', refCategoriaId.current.value)
    }

    if (producto.precio) {
      formData.append('precio', producto.precio)
    }

    if (destacado) {
      formData.append('destacado', destacado)
    }

    if (typeof fileFotoProducto === 'object') {
      formData.append('fotoProducto', fileFotoProducto)
    }

    if (arrProductosVinculadosSelected.length >= 1) {
      arrProductosVinculadosSelected.forEach(productoVinculado => {
        formData.append('productosAccesorios', productoVinculado._id)
      })
    }

    if (fileAnexa2 && previewFileAnexa2) {
      formData.append('anexa1', fileAnexa2)
    }

    if (fileAnexa3 && previewFileAnexa3) {
      formData.append('anexa2', fileAnexa3)
    }

    if (fileAnexa4 && previewFileAnexa4) {
      formData.append('anexa3', fileAnexa4)
    }

    if (fileAnexa5 && previewFileAnexa5) {
      formData.append('anexa4', fileAnexa5)
    }

    for (const pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1])
    }

    const bearer = `Bearer ${tokenExist}`

    fetch(`${process.env.URI_API}/api-dabambu-service/producto/${idProducto}`, {
      method: 'PATCH',
      headers: {
        Authorization: bearer
      },
      body: formData
    }).then(res => {
      if (res.status === 401) {
        router.push('/login')
        return
      }
      if (res.status !== 200 && res.ok !== true) {
        throw new Error('Algo salió mal intentelo más tarde')
      } else {
        if (fileAnexa5) setFileAnexa5('/' + fileAnexa5.name)
        alertMessage('El producto fue actualizado', 'success')
      }
      setActive(true)
    }).catch(error => {
      alertMessage(error.message, 'error')
    })
  }

  // Delete foto anexa

  const handleDeleteFotoAnexa = (numeroAnexa, fileName) => {
    const formData = new FormData()

    if (!fileName) {
      if (numeroAnexa === '1') refImg2.current.src = '/file-imagen.png'
      if (numeroAnexa === '2') refImg3.current.src = '/file-imagen.png'
      if (numeroAnexa === '3') refImg4.current.src = '/file-imagen.png'
      if (numeroAnexa === '4') refImg5.current.src = '/file-imagen.png'
      return false
    }

    formData.append('removeAnexa', numeroAnexa)
    formData.append('removeFileName', fileName)

    if (numeroAnexa === '1') {
      if (typeof fileAnexa2 === 'string') {
        fetchDelete(formData)
      }
      setFileAnexa2('')
      setIcon2(false)
    }

    if (numeroAnexa === '2') {
      if (typeof fileAnexa3 === 'string') {
        fetchDelete(formData)
      }
      setFileAnexa3('')
      setIcon3(false)
    }

    if (numeroAnexa === '3') {
      if (typeof fileAnexa4 === 'string') {
        fetchDelete(formData)
      }
      setFileAnexa4('')
      setIcon4(false)
    }

    if (numeroAnexa === '4') {
      if (typeof fileAnexa5 === 'string') {
        fetchDelete(formData)
      }
      setFileAnexa5('')
      setIcon5(false)
    }
  }

  const bearer = `Bearer ${tokenExist}`

  function fetchDelete (formData) {
    fetch(`${process.env.URI_API}/api-dabambu-service/producto/${idProducto}`, {
      method: 'PATCH',
      headers: {
        Authorization: bearer
      },
      body: formData
    }).then(res => {
      if (res.status === 401) {
        router.push('/login')
        return
      }
      successMessage('', 'Se eliminó correctamente la foto')
    }).catch(error => {
      alertMessage(error.message, 'error')
    })
  }

  // Delete producto

  const handleDeleteProducto = () => {
    const urlProducto = `${process.env.URI_API}/api-dabambu-service/producto/${idProducto}`
    const form = new FormData(formulario.current)
    const bearer = `Bearer ${tokenExist}`
    const header = new Headers()
    header.append('Authorization', bearer)
    deleteData(urlProducto, form, header)
    alertMessage('El producto fue eliminado satisfactoriamente', 'success')
    handleNuevoProducto()
    setIcon2(false)
    setIcon3(false)
    setIcon4(false)
    setIcon5(false)
    setDisableBtn(true)

    const newProducts = productos.filter(product => product._id !== idProducto)
    setProductos(newProducts)
  }

  // Delete Producto Vinculado

  const deleteProductoVinculado = (e) => {
    const copyArrProdVincSelected = [...arrProductosVinculadosSelected]
    const idProductoVinculado = Number(e.target.id)
    const newArrProdVincSelected = copyArrProdVincSelected.filter(producto => producto._id !== idProductoVinculado)
    setArrProductosVinculadosSelected(newArrProdVincSelected)
    if (newArrProdVincSelected.length === 0) {
      setProductoVinculadoSelected('')
    }
  }

  const clearImages = () => {
    setFileFotoProducto('')
    setPreviewFotoProducto('')
    setFileAnexa2('')
    setFileAnexa3('')
    setFileAnexa4('')
    setFileAnexa5('')
    setPreviewFileAnexa2('')
    setPreviewFileAnexa3('')
    setPreviewFileAnexa4('')
    setPreviewFileAnexa5('')
  }

  // Display producto

  const handleDisplayProducto = (e) => {
    const codigoProducto = Number(e.target.id)
    setIdProducto(codigoProducto)

    fetch(`${process.env.URI_API}/api-dabambu-service/producto/${codigoProducto}`)
      .then(res => res.json())
      .then(res => {
        const producto = res.body.body
        setProducto(producto)
        setDestacado(producto.destacado)
        setDisableBtn(false)
        setActive(true)
        if (producto.productosAccesorios.length >= 1) {
          setProductoVinculadoSelected(producto.productosAccesorios)
          setArrProductosVinculadosSelected(producto.productosAccesorios)
        }

        clearImages()

        setTimeout(() => {
          setIconFotoProducto(true)
          setFileFotoProducto(producto.fotoProducto)
          refImg1.current.src = `${process.env.DOMAIN_IMAGES}${producto.fotoProducto}`

          if (producto?.fotosAnexas.length >= 1) {
            if (producto?.fotosAnexas[0]) {
              setFileAnexa2(producto.fotosAnexas[0])
              refImg2.current.src = `${process.env.DOMAIN_IMAGES}${producto.fotosAnexas[0]}`
              setIcon2(true)
            }
            if (producto?.fotosAnexas[1]) {
              setFileAnexa3(producto.fotosAnexas[1])
              refImg3.current.src = `${process.env.DOMAIN_IMAGES}${producto.fotosAnexas[1]}`
              setIcon3(true)
            }
            if (producto?.fotosAnexas[2]) {
              setFileAnexa4(producto.fotosAnexas[2])
              refImg4.current.src = `${process.env.DOMAIN_IMAGES}${producto.fotosAnexas[2]}`
              setIcon4(true)
            }
            if (producto?.fotosAnexas[3]) {
              setFileAnexa5(producto.fotosAnexas[3])
              refImg5.current.src = `${process.env.DOMAIN_IMAGES}${producto.fotosAnexas[3]}`
              setIcon5(true)
            }
          }
          setModalBusqueda(false)
        }, 500)
      })
  }

  useEffect(() => {
    const tok = sessionStorage.getItem('token_usuario')
    console.log(tok, 'tokko')
    setTokenExist(tok)
  }, [])

  function inactive () {
    setTimeout(() => {
      sessionStorage.removeItem('token_usuario')
      sessionStorage.removeItem('data_usuario')
      router.push('/login')
    }, 900000)
  }

  return (
    <>
      {
        isTokenUser
          ? <>
        <NavAdmin title="Registro de productos" user={loggedInUser.nombre}/>
        <form className="registro__producto" ref={formulario}>
          <h3 className="titulo__producto">Datos de producto</h3>
          <div className="registro__producto--datos">
            <div className="registro__producto--datos-left">
              <div className="datos__nombre">
                <input
                  placeholder="Nombre de producto"
                  type="text"
                  name="nombre"
                  value={producto.nombre}
                  onChange={changeHandlerProducto}
                  onBlur={inactive}
                />
                {destacado
                  ? (
                  <div onClick={handleDestacado} className="destacado">
                    <Image src="/star_destacado.svg" width={36} height={36} />
                    <span>
                      <b>Producto destacado</b>
                    </span>
                  </div>
                    )
                  : (
                  <div onClick={handleDestacado} className="destacado">
                    <img src="/star.svg" />
                    <span>Producto destacado</span>
                  </div>
                    )}
              </div>
              <textarea
                placeholder="Descripción de producto"
                name="descripcion"
                value={producto.descripcion}
                onChange={changeHandlerProducto}
                onBlur={inactive}
              />
            </div>
            <div className="registro__producto--datos-right">
              <select
                name="categoria"
                value={producto.categoria?._id}
                onChange={changeHandlerProducto}
                ref={refCategoriaId}
              >
                <option value="0">Categoría</option>
                {categorias.map((categoria) => (
                  <option key={categoria._id} value={categoria?._id}>
                    {categoria.nombreCategoria}
                  </option>
                ))}
              </select>

              <input
                placeholder="Precio"
                type="number"
                name="precio"
                // value={producto.precio ? formatToSoles(producto.precio) :  "0.00" }
                value={producto?.precio}
                onChange={changeHandlerProducto}
                onBlur={inactive}
              />
              <button
                type="button"
                className="button__registro--producto"
                onClick={() => setModalBusqueda(true)}
              >
                <img src="/buscar.svg" />
                Búsqueda
              </button>
              <button
                type="button"
                className={
                  active
                    ? 'button__registro--producto show__modal--link'
                    : 'button__registro--producto disable show__modal--link'
                }
                disabled={!active}
              >
                <img src="/ver.svg" />
                Ver URL
              </button>
              {/* <Button variante="outline" className="show__modal--busqueda" text="capitalize">
                        <Search/>Búsqueda
                    </Button> */}
              {/* <Button variante="outline" className={active ? "button__registro--producto show__modal--productos-vinculados" : "button__registro--producto disable show__modal--productos-vinculados"}text="capitalize" disabled={!active}>
                        <Eye/>ver URL
                    </Button> */}
            </div>
          </div>
          <ModalLink
            url={producto?.nombreURL}
            refNombreURL={refNombreURL}
            handleCopyURL={handleCopyURL}
          />
          {modalBusqueda && (
            <ModalBusqueda
              arrProducto={productos}
              placeholder="Escribe  el nombre del producto"
              handleDisplayProducto={handleDisplayProducto}
              closeModal={() => setModalBusqueda(false)}
            />
          )}
          <h3 className="titulo__imagenes">Cargar imágenes de producto</h3>
          <div className="registro__producto--imagenes">
            <FotoProductoCard
              handleImageChange={handleFileFotoProductoChange}
              cleanFileInputFotoProducto={cleanFileInputFotoProducto}
              icon={iconFotoProducto}
              isFile={fileFotoProducto}
              previewFile={previewFotoProducto}
              refImg={refImg1}
            />
            <div className="registro__producto--imagenes-anexas">
              {/* {console.log(fileAnexa3.split('/')[fileAnexa3.split('/').length - 1])} */}

              <FotoAnexaCard
                labelFor="foto-anexa2"
                inputId="foto-anexa2"
                isFile={fileAnexa2}
                handleImageChange={handleFileFotoAnexaChange2}
                deleteFotoAnexa={() =>
                  handleDeleteFotoAnexa(
                    '1',
                    typeof fileAnexa2 === 'string'
                      ? fileAnexa2.split('/')[fileAnexa2.split('/').length - 1]
                      : null
                  )
                }
                previewFile={previewFileAnexa2}
                refImg={refImg2}
                icon={icon2}
              />
              <FotoAnexaCard
                labelFor="foto-anexa3"
                inputId="foto-anexa3"
                isFile={fileAnexa3}
                handleImageChange={handleFileFotoAnexaChange3}
                deleteFotoAnexa={() =>
                  handleDeleteFotoAnexa(
                    '2',
                    typeof fileAnexa3 === 'string'
                      ? fileAnexa3.split('/')[fileAnexa3.split('/').length - 1]
                      : null
                  )
                }
                previewFile={previewFileAnexa3}
                refImg={refImg3}
                icon={icon3}
              />
              <FotoAnexaCard
                labelFor="foto-anexa4"
                inputId="foto-anexa4"
                isFile={fileAnexa4}
                handleImageChange={handleFileFotoAnexaChange4}
                deleteFotoAnexa={() =>
                  handleDeleteFotoAnexa(
                    '3',
                    typeof fileAnexa4 === 'string'
                      ? fileAnexa4.split('/')[fileAnexa4.split('/').length - 1]
                      : null
                  )
                }
                previewFile={previewFileAnexa4}
                refImg={refImg4}
                icon={icon4}
              />
              <FotoAnexaCard
                labelFor="foto-anexa5"
                inputId="foto-anexa5"
                isFile={fileAnexa5}
                handleImageChange={handleFileFotoAnexaChange5}
                deleteFotoAnexa={() =>
                  handleDeleteFotoAnexa(
                    '4',
                    typeof fileAnexa5 === 'string'
                      ? fileAnexa5.split('/')[fileAnexa5.split('/').length - 1]
                      : null
                  )
                }
                previewFile={previewFileAnexa5}
                refImg={refImg5}
                icon={icon5}
              />
            </div>
          </div>
        </form>
        <FooterRegistro
          handleRegistro={handleSubmitProducto}
          handleNuevoProducto={handleNuevoProducto}
          handleUpdate={handleUpdateProducto}
          handleDeleteProducto={handleDeleteProducto}
          active={active}
          disabledBtn={disableBtn}
        />
        <ModalProductosVinculados
          addProductoVinculado={addProductoVinculado}
          handleFilter={handleFilter}
          filteredProducto={filteredProducto}
          deleteProductoVinculado={deleteProductoVinculado}
          arrProducto={arrProducto}
          productoVinculadoSelected={productoVinculadoSelected}
          arrProductosVinculadosSelected={arrProductosVinculadosSelected}
          placeholder="Escribe  el nombre del producto"
          inputValue={inputValue}
        />
        <style jsx>{
          `
            .registro__producto {
              padding: 9rem 10rem 3rem 10rem;
              margin-bottom: 50px;
            }
            .titulo__producto {
              grid-row: 1/2;
              font-size: 20px;
              color: black;
              padding-bottom: 20px;
              font-family: Comfortaa;
              font-weight: 700;
            }
            .registro__producto--datos {
              grid-row: 2/3;
              display: flex;
              gap: 20px;
            }
            .registro__producto--datos-left {
              display: flex;
              flex-direction: column;
              gap: 20px;
              width: 80%;
            }
            .datos__nombre {
              display: flex;
              height: 56px;
              border: 1px solid gray;
              border-radius: 5px;
              justify-content: space-between;
            }
            .datos__nombre:focus-within {
              border: 2px solid #517201;
            }
            .datos__nombre input {
              width: 50%;
              height: 50px;
              border: transparent;
            }
            .destacado {
              display: flex;
              align-items: center;
              gap: 5px;
              padding-right: 10px;
            }
            .destacado span {
              color: #517201;
              font-size: 16px;
            }
            .registro__producto--datos-right {
              display: flex;
              flex-direction: column;
              width: 20%;
              gap: 20px;
            }
            button img {
              padding-right: 8px;
            }
            .titulo__imagenes {
              grid-row: 3/4;
              font-size: 20px;
              color: black;
              padding-bottom: 20px;
              padding-top: 20px;
              font-family: Comfortaa;
              font-weight: 700;
              margin-top: 1.5rem;
            }
            .registro__producto--imagenes {
              grid-row: 4/5;
              display: flex;
              gap: 30px;
            }
            .registro__producto--imagenes input {
              display: none;
            }
            .registro__producto--imagenes-anexas {
              width: 50%;
              display: flex;
              grid-column-gap: 21px;
              grid-row-gap: 20px;
              flex-wrap: wrap;
            }
            input[type="number"]:focus {
              border: 2px solid #517201;
              border-radius: 5px;
            }
          `
        }</style>
      </>
          : <Login/>
      }
    </>
  )
}

export async function getServerSideProps() {
  // const endpointCategorias = `${process.env.URI_API}/api-dabambu-service/categoria`
  // const resCategorias = await fetch(endpointCategorias)
  // const dataCategorias = await resCategorias.json()

  const urlProductos = `${process.env.URI_API}/api-dabambu-service/producto`
  const resProductos = await fetch(urlProductos)
  const dataProductos = await resProductos.json()

  // console.log('all categories')

  return {
    props: {
      // arrCategoria: dataCategorias.body,
      arrProducto: dataProductos.body
    }
  }
}

ContentRegistro.layout = 'Admin'
