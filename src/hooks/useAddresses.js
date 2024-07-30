import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAddresses } from '../features/user/addresses/addressThunks'

const useAddresses = ({ userData }) => {
  const dispatch = useDispatch()
  const { addresses, fetching, error } = useSelector((state) => state.addresses)
  const [defaultAddress, setDefaultAddress] = useState({})

  useEffect(() => {
    if (!addresses && userData.$id) dispatch(fetchAddresses(userData.$id))
    setDefaultAddress(addresses.filter((x) => x.defaultAddress))
  }, [dispatch, addresses])

  return { addresses, fetching, error, defaultAddress }
}

export default useAddresses
