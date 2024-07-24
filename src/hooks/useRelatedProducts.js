import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllproducts } from '../features/user/shop/productThunks'

const useRelatedProducts = (categoryId) => {
  const dispatch = useDispatch()
  const { products, fetching, error } = useSelector((state) => state.products)
  const [relatedProducts, setRelatedProducts] = useState([])

  useEffect(() => {
    if (!products || products.length === 0) {
      dispatch(fetchAllproducts())
    }
  }, [dispatch, products])

  useEffect(() => {
    if (products && products.length > 0 && categoryId) {
      const relatedProds = products.filter(
        (prod) => prod && prod.categoryId === categoryId
      )
      setRelatedProducts(relatedProds)
    }
  }, [products, categoryId])

  return { relatedProducts, fetching, error }
}

export default useRelatedProducts
