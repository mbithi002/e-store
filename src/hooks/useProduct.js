import { useSelector } from 'react-redux'

const useProduct = (productId) => {
  const { products, fetching, error } = useSelector((state) => state.products)

  const product = products.find((prod) => prod.$id === productId)

  return { fetching, error, product }
}

export default useProduct
