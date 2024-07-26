import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAddresses } from '../features/user/addresses/addressThunks'

const useAddresses = ({ userData }) => {
  const dispatch = useDispatch()
  const { addresses, fetching, error } = useSelector((state) => state.addresses)

  useEffect(() => {
    if (!addresses && userData.$id) dispatch(fetchAddresses(userData.$id))
  }, [dispatch, addresses])

  return { addresses, fetching, error }
}

export default useAddresses
