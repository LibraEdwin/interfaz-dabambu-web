import { useEffect, useState } from 'react'

export default function FotoAnexaCard({
  labelFor,
  inputId,
  refImg,
  handleImageChange,
  isFile,
  previewFile,
  deleteFotoAnexa
}) {
  const [image, setImage] = useState(previewFile)

  useEffect(() => console.log(image))

  return (
    <div className="card">
      <label className="card__foto" htmlFor={labelFor} >
        <img
          src={isFile ? previewFile : '/file-imagen.png'}
          // src={isFile ? image : "/file-imagen.svg"}
          className={isFile ? 'preview-foto--anexa' : ''}
          onError={() => setImage(`${process.env.URI_WEB}/error-img.jpg`)}
          ref={refImg}
        />
      </label>
      {!isFile && (
        <label
          htmlFor={labelFor}
          className="card__cloud"
          style={{ cursor: 'pointer' }}>
          <img src="/cloud.svg" />
        </label>
      )}

      {isFile && (
        <div
          // htmlFor={icon ? "" :labelFor}
          className="card__cloud"
          onClick={deleteFotoAnexa}
          style={{ cursor: 'pointer' }}>
          <img src="/eliminar.svg" />
        </div>
      )}
      <input
        id={inputId}
        name="fotosAnexas"
        type="file"
        onChange={handleImageChange}
        accept="image/*"
      />
      <div></div>
      <style jsx>{`
        .card{
          border: 1px solid gray;
          height:260px;
          width:250px;
          display:flex;
          position:relative;
        }

        .card__cloud{
          position:absolute;
          padding: 10px 0 0 10px;
        }

        .card__foto{
          margin:auto;
        }
      `}</style>
    </div>
  )
}
