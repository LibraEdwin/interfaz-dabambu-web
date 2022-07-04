import { useState } from 'react'

const useSearch = (uri) => {
  const [data, setData] = useState([])
  const [isSearching, setIsSearching] = useState(false)

  const searchHanlder = async (query) => {
    try {
      setIsSearching(true)
      console.log(`${uri}?${query}`)
      // const response = await fetch(`${uri}?${query}`)
      // const data = await response.json()
      // console.log(body)
    } catch (error) {
      console.log(error)
    } finally {
      setIsSearching(false)
    }
  }

  return {
    searchHanlder,
    isSearching,
    data
  }
}

export default useSearch
