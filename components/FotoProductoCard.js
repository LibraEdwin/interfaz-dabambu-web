export default function FotoProductoCard({
  handleImageChange,
  isFile,
  previewFile,
  refImg,
  icon,
  cleanFileInputFotoProducto
}) {
  const nothingToDo = () => { }

  const handlerErrorImage = () => {
    console.log(previewFile)
    console.log(isFile)
    console.log('SE VALIDO ERROR')
  }

  return (
    <div className="registro__producto--imagen-principal">
      <div className="imagen__principal-button">
        <label
          htmlFor="foto-producto"
          onClick={icon ? cleanFileInputFotoProducto : nothingToDo}
          className="card__cloud"
          style={{ cursor: 'pointer' }}
        >
          <img src={icon ? '/eliminar.svg' : '/cloud.svg'} />
          <span>{icon ? 'Eliminar' : 'Cargar'}</span>
        </label>
      </div>
      <label className="imagen__principal-file">
        <img
          src={isFile ? previewFile : '/file-imagen.svg'}
          // src={isFile ? image : "/file-imagen.svg"}
          className={isFile ? 'preview-foto--principal' : ''}
          ref={refImg}
          // onError={() => setImage(`${process.env.URI_WEB}/error-img.jpg`)}
          onError={() => handlerErrorImage()}
        />
      </label>
      <input
        id="foto-producto"
        type="file"
        name="fotoProducto"
        onChange={handleImageChange}
      />
      <style jsx>{`
        .registro__producto--imagen-principal {
          width: 50%;
          border: 1px solid gray;
          height: 540px;
          display: flex;
          position: relative;
          flex-direction: column;
        }

        .imagen__principal-button {
          padding: 20px 0 0 20px;
          display: flex;
          gap: 10px;
          color: black;
          position: absolute;
        }

        .imagen__principal-button label {
          display: flex;
        }

        .imagen__principal-button span {
          padding-left: 8px;
        }

        .imagen__principal-file {
          margin: auto;
        }
      `}</style>
    </div>
  )
}
