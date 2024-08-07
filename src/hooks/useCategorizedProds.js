import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const useCategorizedProds = (category) => {
  const [relatedCategories, setRelatedCategories] = useState([])
  const { products, fetching, error } = useSelector((state) => state.products)

  useEffect(() => {
    const fetchRelatedCategories = () => {
      const rel = products.filter((x) => x.category === category)
      setRelatedCategories(rel)
    }

    fetchRelatedCategories()
  }, [category, products])

  return { relatedCategories, fetching, error }
}

export default useCategorizedProds
