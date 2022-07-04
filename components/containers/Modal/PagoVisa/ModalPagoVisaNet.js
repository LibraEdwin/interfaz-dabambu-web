import React, { useState, useContext, useEffect } from 'react'
import { customAlphabet } from 'nanoid'

const nanoid = customAlphabet('123456789', 7)

const ModalPagoVisaNet = ({ monto }) => {

  // const sendPayment = () => {
  //   fetch(`${process.env.URI_API}/api-cieneguilla-service/notas-venta`, {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(notaVenta)
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       setOpenModalPagoSatisfactorio(true)
  //       setTimeout(() => {
  //         router.push(`/detalle-compra/${res.body._id}`)
  //       }, 1200)
  //     })
  //     .catch(err => console.log(err.message))
  // }

  const formatToCurrency = amount => {
    return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  }

  const openModalVisaNet = async () => {

    const codigoComercio = 456879852

      // Get token access (1)

      const email = "integraciones@niubiz.com.pe"
      const password = "_7z3@8fF"
      const base64 = Buffer.from(`${email}:${password}`).toString('Base64')

      const headers = new Headers()
      headers.append('Authorization', `Basic ${base64}`)

      const tokenVisanet = await fetch("https://apisandbox.vnforappstest.com/api.security/v1/security", {
        method: 'POST',
        headers: headers
      })
      .then(res => res.text())
      .then((data) => data);

      // Get token session (2)

      const headers2 = new Headers()
      headers2.append('Content-Type', `application/json`)
      headers2.append('Authorization', `${tokenVisanet}`)

      const year = new Date().getFullYear().toString()

      const pedido = JSON.parse(localStorage.getItem('pedidoGenerado'))
      const idPedido = pedido._id

      const codigoOperacion = idPedido //`${year[2]}${year[3]}${nanoid()}`
      console.log("Utilizando id pedido en modal VisNET", idPedido)
    //   localStorage.setItem('codigoOperacion', codigoOperacion)

      // Get data user

      const userMail = JSON.parse(localStorage.getItem('data_cliente'))._id
      const userID = JSON.parse(localStorage.getItem('data_cliente'))._id
    //   const userRegister = new Date(JSON.parse(localStorage.getItem('data_cliente')).createdAt)   
         
      const today = new Date()   

      const milisegDia = 24 * 60 * 60 * 1000
    //   const milisegTranscurridos = Math.abs(userRegister.getTime() - today.getTime())
      const diasTranscurridos = 1 //Math.round(milisegTranscurridos/milisegDia).toString()

      const tokenSession = await fetch("https://apisandbox.vnforappstest.com/api.ecommerce/v2/ecommerce/token/session/" + codigoComercio, {
        method: 'POST',
        headers: headers2,
        body: JSON.stringify(
          {
            "channel": "web",
            "amount":  monto.toFixed(2),
            "antifraud": {
              "clientIp": "179.6.171.41",
              "merchantDefineData": {
                "MDD4":  userMail,
                "MDD21": 0,
                "MDD32": userID,
                "MDD75": "Registrado",
                "MDD77": diasTranscurridos
              }
            }
          }
        )
      })
      .then(res => res.json())
      .then((data) => data);
      // console.log(tokenSession.sessionKey)


      // (3) Open botón de pago: Llamar funciones API VisaNet
      
      VisanetCheckout.configure({
        sessiontoken: tokenSession.sessionKey,
        channel: 'web',
        merchantid: codigoComercio,
        purchasenumber: codigoOperacion,
        amount: monto.toFixed(2),
        expirationminutes: '20',
        timeouturl: 'http://localhost:8080/',
        merchantlogo: 'https://i.postimg.cc/zBSYDhMt/logo-db.png',
        formbuttoncolor: '#517201',
        action: './verify?id=' + tokenVisanet + "&cc=" + codigoComercio + "&monto=" + monto.toFixed(2) + "&codigoOperacion=" + codigoOperacion,
        complete: function(params) {
          console.log("==> " + JSON.stringify(params))
          // alert(JSON.stringify(params));
        }
      });


      VisanetCheckout.open();


  }

  useEffect(() => {

    openModalVisaNet()
  
  }, [])
  

  return (
    <>
    </>
  )
}

export default ModalPagoVisaNet
