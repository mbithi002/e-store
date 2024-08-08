import { configureStore } from '@reduxjs/toolkit'
import adminOrdersSlice from '../features/admin/adminOrdersSlice'
import allAddressesSlice from '../features/admin/allAddressesSlice'
import categoriesSlice from '../features/admin/categoriesSlice'
import usersSlice from '../features/admin/usersSlice'
import authSlice from '../features/auth/authSlice'
import addressSlice from '../features/user/addresses/addressesSlice'
import checkoutSlice from '../features/user/checkout/checkoutSlice'
import ordersSlice from '../features/user/orders/ordersSlice'
import productsSlice from '../features/user/shop/productsSlice'

const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productsSlice,
    addresses: addressSlice,
    checkout: checkoutSlice,
    getUsers: usersSlice,
    categories: categoriesSlice,
    orders: ordersSlice,
    adminOrders: adminOrdersSlice,
    allAddresses: allAddressesSlice,
  },
})

export default store
