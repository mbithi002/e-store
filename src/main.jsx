import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import {
  Cart,
  Home,
  Orders,
  Product,
  SearchProduct,
  Shop,
  SignIn,
  Signup
} from './pages/pages.js'
import store from './store/store.js'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/signin',
        element: (
          <SignIn />
        )
      },
      {
        path: '/signup',
        element: (
          <Signup />
        )
      },
      {
        path: '/shop',
        element: (
          <Shop />
        )
      },
      {
        path: '/search',
        element: (
          <SearchProduct />
        )
      },
      {
        path: '/:slug',
        element: (
          <Product />
        )
      },
      {
        path: '/orders',
        element: (
          <Orders />
        )
      },
      {
        path: '/cart',
        element: (
          <Cart />
        )
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
