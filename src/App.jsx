import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from 'react-router-dom';
import './App.css';
import { FooterComponent, HeaderComponent } from './components/components';
import { fetchAddresses } from "./features/user/addresses/addressThunks";
import { fetchAllproducts } from "./features/user/shop/productThunks";

const App = () => {
  const dispatch = useDispatch()
  const { userData } = useSelector((state) => state.auth)
  useEffect(() => {
    dispatch(fetchAllproducts())
    if (userData) dispatch(fetchAddresses(userData.$id))
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
