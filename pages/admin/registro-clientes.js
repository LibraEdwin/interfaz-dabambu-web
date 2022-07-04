import React, { useState } from 'react'
import NavAdmin from 'components/Admin/NavAdmin'
import FooterAdmin from 'components/Admin/FooterAdmin'
import { ContainerPrint, ContainerMain, Wrapper } from 'theme/mixins'
import Button from 'components/common/Button'
import { HeadPrint, TablaCliente } from 'components/containers'
import FiltroFechas from 'components/containers/Filters/FiltroFechas'
import * as XLSX from 'xlsx'
import { formatDate } from 'lib/AlertMessage'
import { useGlobalContext } from '../../context/GlobalContext'
import Login from '../login'
import { useRouter } from 'next/router'

const RegistroClientes = () => {
  const { isTokenUser, loggedInUser } = useGlobalContext()
  const [dataFiltroFecha, setDataFiltroFecha] = useState([])
  const [dataFiltro, setDataFiltro] = useState('')
  const router = useRouter()

  const [fecha, setFecha] = useState({})

  let toDate = 'dd/mm/aaaa'
  let fromDate = 'dd/mm/aaaa'

  if (fecha.desde) {
    fromDate = fecha.desde

    const año = fromDate.substring(0, 4)
    const exMes = fromDate.substring(10, 5)
    const mes = exMes.substring(0, 2)
    const dia = fromDate.substring(10, 8)

    fromDate = `${dia}/${mes}/${año}`
  }
  if (fecha.hasta) {
    toDate = fecha.hasta

    const año = toDate.substring(0, 4)
    const exMes = toDate.substring(10, 5)
    const mes = exMes.substring(0, 2)
    const dia = toDate.substring(10, 8)

    toDate = `${dia}/${mes}/${año}`
  }

  const handleChangeName = (e) => {
    const { value } = e.target

    if (value) {
      setDataFiltro(value)
      fetch(`${process.env.URI_API}/api-dabambu-service/clientes/search?nombre=${value}`)
        .then(res => res.json())
        .then(res => {
          const { data } = res
          setDataFiltroFecha(data)
        })
        .catch(err => console.log(err))
    } else {
      setDataFiltroFecha([])
    }
  }

  const datosExport = dataFiltroFecha.map(e => ({
    correo: e._id,
    nombre: e.nombre,
    celular: e.celular,
    direccion: e.direccion,
    distrito: e.distrito?.nombre
  }))

  const handleOnExport = () => {
    const wb = XLSX.utils.book_new()
    const ws = XLSX.utils.json_to_sheet(datosExport)

    XLSX.utils.book_append_sheet(wb, ws, 'Registro de Cliente')

    XLSX.writeFile(wb, `${formatDate(new Date(), 'DD/MM/YYYY')}_RegistroCliente.xlsx`)
  }

  function inactive() {
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
            <div className='noPrint'>
              <NavAdmin title="Registro de clientes" user={loggedInUser.nombre} />
            </div>
            <ContainerMain className='pt-5'>
              <Wrapper>
                <div className='noPrint paginaHorizontal'>
                  <FiltroFechas
                    labelDesde="Registro desde"
                    labelHasta="Registro hasta"
                    FiltroFecha={setDataFiltroFecha}
                    fecha={fecha}
                    setFecha={setFecha}
                    url={`${process.env.URI_API}/api-dabambu-service/clientes/search?fechas=${fecha.desde},${fecha.hasta}`}
                    onBlur={inactive}
                    setDataFiltro={setDataFiltro} />
                </div>
                <div className='input-search mt-4 noPrint'>
                  <span className='icon' />
                  <input type="text" placeholder='Buscar por Nombre' name="nombre" onChange={handleChangeName} />
                </div>
                <div className='Print'>
                  <ContainerPrint>
                    <HeadPrint title="Reporte de Clientes" fromDate={fromDate} toDate={toDate} />
                    <TablaCliente dataFiltroFecha={dataFiltroFecha} setDataFiltroFecha={setDataFiltroFecha} fecha={fecha} dataFiltro={dataFiltro} />
                  </ContainerPrint>
                </div>
              </Wrapper>
            </ContainerMain>
            <div className='noPrint'>
              <FooterAdmin>
                <Button variante="outline" onClick={handleOnExport} className='exportar'>Exportar</Button>
                <Button variante="outline" onClick={() => window.print()}>Imprimir</Button>
              </FooterAdmin>
            </div>
          </>
          : <Login />
      }
    </>
    // <>
    //   <div className='noPrint'>
    //     <NavAdmin title="Registro de clientes" />
    //   </div>
    //   <ContainerMain className='pt-5'>
    //     <Wrapper>
    //       <div className='noPrint paginaHorizontal'>
    //         <FiltroFechas
    //           labelDesde="Registro desde"
    //           labelHasta="Registro hasta"
    //           FiltroFecha={setDataFiltroFecha}
    //           fecha={fecha}
    //           setFecha={setFecha}
    //           url={`${process.env.URI_API}/api-dabambu-service/clientes/search?fechas=${fecha.desde},${fecha.hasta}`}
    //           onBlur={inactive} />
    //       </div>
    //       <div className='input-search mt-4 noPrint'>
    //         <span className='icon' />
    //         <input type="text" placeholder='Buscar por Nombre' name="nombre" onChange={handleChangeName} />
    //       </div>
    //       <div className='Print'>
    //         <ContainerPrint>
    //           <HeadPrint title="Reporte de Clientes" fromDate={fromDate} toDate={toDate} />
    //           <TablaCliente dataFiltroFecha={dataFiltroFecha} setDataFiltroFecha={setDataFiltroFecha} fecha={fecha} dataFiltro={dataFiltro} />
    //         </ContainerPrint>
    //       </div>
    //     </Wrapper>
    //   </ContainerMain>
    //   <div className='noPrint'>
    //     <FooterAdmin>
    //       <Button variante="outline" onClick={handleOnExport} className='exportar'>Exportar</Button>
    //       <Button variante="outline" onClick={() => window.print()}>Imprimir</Button>
    //     </FooterAdmin>
    //   </div>
    // </>
  )
}

RegistroClientes.layout = 'Admin'

export default RegistroClientes
