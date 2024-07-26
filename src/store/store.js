import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/auth/authSlice'
import addressSlice from '../features/user/addresses/addressesSlice'
import productsSlice from '../features/user/shop/productsSlice'

const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productsSlice,
    addresses: addressSlice,
  },
})

export default store
