import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from 'react-router-dom';
import './App.css';
import { FooterComponent, HeaderComponent } from './components/components';
import { fetchAllAddress } from "./features/admin/allAddressesThunks";
import { fetchAdminOrders } from "./features/admin/allOrdersThunks";
import { fetchAllCategories } from "./features/admin/categoryThunks";
import { fetchAllUsers } from "./features/admin/userThunks";
import { fetchAddresses } from "./features/user/addresses/addressThunks";
import { fetchAllOrders } from "./features/user/orders/ordersThunks";
import { fetchAllproducts } from "./features/user/shop/productThunks";

const App = () => {
  const dispatch = useDispatch()
  const { userData } = useSelector((state) => state.auth)
  useEffect(() => {
    dispatch(fetchAllproducts())
    dispatch(fetchAllCategories())
    if (userData) {
      dispatch(fetchAddresses(userData.$id))
      dispatch(fetchAllCategories())
      dispatch(fetchAllOrders(userData.$id))
      if (userData.isAdmin) {
        dispatch(fetchAdminOrders())
        dispatch(fetchAllUsers())
        dispatch(fetchAllAddress())
      }
    }
  }, [userData])
  return (
    <div className="min-w-full min-h-screen bg-transparent">
      <main>
        <HeaderComponent />
        <Outlet />
        <FooterComponent />
      </main>
    </div>
  )
}

export default App
