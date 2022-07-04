import React from 'react'
import Banner from '../components/Banner'
import Beneficios from '../components/Beneficios'
import Destacados from '../components/Destacados'
import Marca from '../components/Marca'
import Parallax from '../components/Parallax'

const index = ({ products }) => {
  return (
    <>
      <Banner />
      <Destacados items={products} />
      <Parallax />
      <Beneficios />
      <Marca />
    </>
  )
}

export async function getServerSideProps(context) {
  let featuredProducts = []

  try {
    const res = await fetch(`${process.env.URI_API}/api-dabambu-service/producto`)
    const data = await res.json()
    featuredProducts = data.body.filter((item) => item.destacado)
  } catch (e) {
    console.log(e)
  }

  return {
    props: {
      products: featuredProducts
    }
  }
}

export default index
