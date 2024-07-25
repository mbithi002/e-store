import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllproducts } from '../features/user/shop/productThunks'

const useFeaturedProducts = () => {
  const dispatch = useDispatch()
  const { products, fetching, error } = useSelector((state) => state.products)
  const [featuredProducts, setFeaturedProducts] = useState([])

  useEffect(() => {
    if (!products || products.length === 0) {
      dispatch(fetchAllproducts())
    }
  }, [dispatch, products])

  useEffect(() => {
    if (products && products.length > 0) {
      const featuredProds = products.filter(
        (prod) => prod?.new || prod?.featured
      )
      setFeaturedProducts(featuredProds)
    }
  }, [products])

  return { featuredProducts, fetching, error }
}

export default useFeaturedProducts
