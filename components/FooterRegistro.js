import React, { useState } from 'react'
import Button from './common/Button'
import { Add } from './icons'
import ModalCategorias from './containers/Modal/ModalCategorias'

export default function FooterRegistro ({ handleRegistro, disabled, active, handleUpdate, handleNuevoProducto, disabledBtn, handleDeleteProducto }) {
  const [modalCategorias, setModalCategorias] = useState(false)
  return (
        <div className="footer__registro">
            <Button variante="outline" onClick={() => setModalCategorias(true)}><Add/>Categoría</Button>

            <Button variante="outline" className='button-secondary show__modal--productos-vinculados'>
                productos vinculados
            </Button>

            <Button variante="outline" className={ active ? 'button-secondary' : 'button-secondary disable-secondary'} disabled={disabledBtn} onClick={handleNuevoProducto}>nuevo</Button>

            <Button variante="outline" className={ active ? 'button-secondary' : 'button-secondary disable-secondary'} disabled={disabledBtn} onClick={handleDeleteProducto}>eliminar</Button>

            { active
              ? <Button variante="primary" onClick={handleUpdate}>actualizar</Button>
              : <Button variante="primary" onClick={handleRegistro}>registrar</Button>
            }
            {modalCategorias && (
              <ModalCategorias close={() => setModalCategorias(false)} />
            )}

            <style jsx>{/* css */`
            .footer__registro{
                height:70px;
                border: 1px solid rgba(0, 0, 0, 0.3);
                font-size:18px;
                display:flex;
                padding: 0 10rem;
                align-items:center;
                justify-content: flex-end;
                gap:20px;

                position: fixed;
                bottom: 0;
                z-index: 1;
                background-color: white;
                width: 100%;
            }

            `}</style>
        </div>
  )
}
