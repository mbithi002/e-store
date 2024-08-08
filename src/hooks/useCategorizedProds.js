import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllproducts } from '../features/user/shop/productThunks'

const useCategorizedProds = (category) => {
  const [relatedCategories, setRelatedCategories] = useState([])
  const { products, fetching, error } = useSelector((state) => state.products)
  if (!products) useDispatch(fetchAllproducts())

  useEffect(() => {
    const fetchRelatedCategories = () => {
      const rel = products?.filter((x) => x.category === category)
      setRelatedCategories(rel)
    }

    fetchRelatedCategories()
  }, [category, products, useDispatch])

  return { relatedCategories, fetching, error }
}

export default useCategorizedProds
