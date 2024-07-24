import { useSelector } from 'react-redux'

const useRelatedProducts = (categoryId) => {
  const { products, fetching, error } = useSelector((state) => state.products)

  const relatedProducts = products.filter(
    (prod) => prod && prod.categoryId === categoryId
  )

  return { relatedProducts, fetching, error }
}

export default useRelatedProducts
