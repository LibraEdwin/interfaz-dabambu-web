const { createContext, useEffect, useState } = require('react')

export const initialCategoryState = []

export const CategoryCtx = createContext(null)

export function CategoryProvider ({ children }) {
  const [categorias, setCategorias] = useState(initialCategoryState)
  const [filtroCategoria, setFiltroCategoria] = useState([])

  const getAllCategories = () => {
    fetch(`${process.env.URI_API}/api-dabambu-service/categoria`)
      .then(res => res.json())
      .then(res => {
        setCategorias(res.body)
        setFiltroCategoria(res.body)
      })
  }

  useEffect(() => {
    getAllCategories()
  }, [])
  return (
    <CategoryCtx.Provider
      value={{
        categorias,
        setCategorias,
        filtroCategoria,
        setFiltroCategoria
      }}
    >
      {children}
    </CategoryCtx.Provider>
  )
}
