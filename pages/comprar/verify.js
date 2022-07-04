import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { successAlert, errorAlert } from 'lib/AlertMessage'
const { customAlphabet } = require('nanoid')
const nanoid = customAlphabet('123456789', 7)

import Image from 'next/image'

import bodyParser from "express"
import { promisify } from "util"

function verify({ verificado, dataMap }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div> Página cargando .... </div>
  }

  const sendPayment = () => {

    const pedido = JSON.parse(localStorage.getItem('pedidoGenerado'))
    const idPedido = pedido._id


    /**
     * Si todos los datos de la tarjeta fueron correctos se realiza el
     * registro del comprobante y el cambio del estado del pedido
     */
    fetch(`${process.env.URI_API}/api-dabambu-service/comprobantes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ pedidoId: idPedido })
    })
      .then(res => res.json())
      .then(res => {
        const { body } = res
        if (body._id) {
          /**
           * Se cambia el estado del pedido
           */
          fetch(`${process.env.URI_API}/api-dabambu-service/pedidos/${idPedido}`,
            {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                estado: 'En proceso'
              })
            })
            .then(res => {
              router.push(`/comprar/confirmacion-compra/${body._id}`)
            })
            .catch(err => console.log(err))
        }
      }).catch(err => console.log(err))



  }

  useEffect(() => {

    setTimeout(() => {

      if (verificado.status) {
        // Operación exitosa
        localStorage.setItem('dataMap', JSON.stringify({
          ORDER: dataMap.ORDER,
          TRANSACTION_DATE: dataMap.TRANSACTION_DATE,
          BRAND: dataMap.BRAND,
          CARD: dataMap.CARD
        }))
        successAlert(verificado.mensaje)
        sendPayment()

      } else {
        // Operación denegada
        if (verificado.mensaje) {
          const message = `
            N° Pedido: ${dataMap.ORDER} <br>
            Fecha transacción: ${dataMap.TRANSACTION_DATE} <br>
            N° Tarjeta: ${dataMap.CARD} <br>,
            Marca de la Tarjeta: ${dataMap.BRAND} <br>
          `

          errorAlert('', verificado.mensaje, message).then(result => {
            if (result.isConfirmed) {
              window.history.back()
            }
          })
        }
        // verificado.mensaje? errorAlert(verificado.mensaje) : errorAlert("Error al procesar datos")
      }

    }, 3000)



  }, [])


  // if (isFallback) {

  //   return <>
  //       Loading .....
  //   </>
  // }


  return (
    <>
      <div className='container'>
        <div><Image src='/gif/payment-security.gif' width={470} height={300} /></div>
        <div><span>Falta poco. No salgas de esta pantalla.<br />Estamos validando la compra con tu tarjeta.</span> </div>
      </div>

      <style jsx>{
        /* css */ `

        .container{
          display: grid;
          grid-template: 1fr 200px / 1fr;
        }

        .container div{
          display: flex;
          align-items: flex-start;
          justify-content: center;
          text-align: center;
        }

        .container span{
          font-size: 18px;
          font-weight: bold;
          padding: 0 10px 0 10px;
        }

        @media screen and (min-width: 768px) {
          .container span{
            font-size: 26px;
          font-weight: bold;
          }
        }

        `
      }</style>


    </>
  )
}


// Get data body del formualario enviado por el metodo POST
const getBody = promisify(bodyParser.urlencoded({ extended: true }));

export async function getServerSideProps(context) {

  const { query, req, res } = context
  let verificado = {}
  let dataMap = {}

  // Manejo de la solicitud POST VisaNET para redireccionamiento a la página de detalle compra

  if (req.method === "POST") {

    await getBody(req, res)
    console.log(req.body)

    if (req.body.transactionToken) {

      // Autorización de transacción (4)

      const headers = new Headers()
      headers.append('Content-Type', `application/json`)
      headers.append('Authorization', `${query.id}`)

      await fetch("https://apisandbox.vnforappstest.com/api.authorization/v3/authorization/ecommerce/" + query.cc, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(
          {
            "channel": "web",
            "captureType": "manual",
            "countable": true,
            "order": {
              "tokenId": req.body.transactionToken,
              "purchaseNumber": query.codigoOperacion.toString(),
              "amount": query.monto,
              "currency": "PEN"
            }
          }
        )
      })
        .then(res => {
          console.log("Estatus => " + res.status)
          if (res.status === 200) {
            verificado['status'] = true
          } else {
            verificado['status'] = false
          }
          return res.json()
        })
        .then(res => {
          if (verificado.status) {
            // caso de exito
            verificado["mensaje"] = res.dataMap.ACTION_DESCRIPTION

            dataMap = {
              CARD: res.dataMap.CARD,
              BRAND: res.dataMap.BRAND,
              ORDER: query.codigoOperacion.toString(),
            }
          } else {
            // errores
            console.log(res)
            const { ACTION_DESCRIPTION, CARD, BRAND, TRANSACTION_DATE } = res.data
            verificado["mensaje"] = ACTION_DESCRIPTION
            dataMap = {
              CARD,
              BRAND,
              ORDER: query.codigoOperacion.toString(),
              TRANSACTION_DATE: new Date(Number(TRANSACTION_DATE)).toLocaleDateString(),
            }
          }
        })
    }

  }

  return {
    props: {
      verificado,
      dataMap
    },
  }


}

export default verify