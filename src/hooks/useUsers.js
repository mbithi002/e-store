import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUsers } from '../features/admin/userThunks'

const useUsers = () => {
  const dispatch = useDispatch()
  const { users, fetching, error } = useSelector((state) => state.getUsers)
  const [allUsers, setAllUsers] = useState([])

  useEffect(() => {
    if (!users) dispatch(fetchAllUsers)
    setAllUsers(users)
  }, [dispatch])

  return { allUsers, fetching, error }
}

export default useUsers
