import React from 'react'

const BackButton = (props) => {
  const {
    text,
    onClick
  } = props

  return (
    <>
      <div className="back-button" onClick={onClick} >
        <img className="back-button__image" src="/left_flecha.svg" />
        <span className="back-button__text">{text}</span>
      </div>

      <style jsx>{`
        .back-button {
          display: flex;
          align-items: center;
          width: fit-content;
          gap: 1rem;
          cursor: pointer;
        }

        .back-button__image {
          width: 14px;
        }

        .back-button__text {
          display: block;
          font-size: 1.1rem;
          font-weight: 700;
          color: #517201;
          font-family: Comfortaa;
        }

        @media screen and (min-width: 720px) {
          .back-button {
            gap: 2rem;
          }

          .back-button__text {
            font-size: 26px;
            font-weight: 400;
          }
        }`}</style>
    </>
  )
}

export default BackButton
