import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from 'react-router-dom';
import './App.css';
import { HeaderComponent } from './components/components';
import { fetchAllproducts } from "./features/user/shop/productThunks";

const App = () => {
  const dispatch = useDispatch()
  const { userData } = useSelector((state) => state.auth)
  useEffect(() => {
    dispatch(fetchAllproducts())
  }, [userData])
  return (
    <div className="min-w-full min-h-screen bg-transparent">
      <main>
        <HeaderComponent />
        <Outlet />
      </main>
    </div>
  )
}

export default App
