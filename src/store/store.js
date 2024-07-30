import { configureStore } from '@reduxjs/toolkit'
import usersSlice from '../features/admin/usersSlice'
import authSlice from '../features/auth/authSlice'
import addressSlice from '../features/user/addresses/addressesSlice'
import checkoutSlice from '../features/user/checkout/checkoutSlice'
import productsSlice from '../features/user/shop/productsSlice'

const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productsSlice,
    addresses: addressSlice,
    checkout: checkoutSlice,
    getUsers: usersSlice,
  },
})

export default store
