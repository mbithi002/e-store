import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllproducts } from '../features/user/shop/productThunks'

const useRelatedProducts = (category) => {
  const dispatch = useDispatch()
  const { products, fetching, error } = useSelector((state) => state.products)
  const [relatedProducts, setRelatedProducts] = useState([])

  useEffect(() => {
    if (!products || products.length === 0) {
      dispatch(fetchAllproducts())
    }
  }, [dispatch, products])

  useEffect(() => {
    if (products && products.length > 0 && category) {
      const relatedProds = products.filter(
        (prod) =>
          prod && prod.category?.toLowerCase() === category.toLowerCase()
      )
      setRelatedProducts(relatedProds)
    }
  }, [products, category])

  return { relatedProducts, fetching, error }
}

export default useRelatedProducts
