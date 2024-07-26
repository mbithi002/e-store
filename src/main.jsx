import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import AdminLayout from './components/layout/AdminLayout.jsx'
import Protected from './components/layout/AuthLayout.jsx'
import './index.css'
import Admin from './pages/Admin.jsx'
import {
  Cart,
  Home,
  Orders,
  Product,
  Profile,
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
      {
        path: '/profile/:slug',
        element: (
          <Protected authentication={true}>
            <Profile />
          </Protected>
        )
      },
      {
        path: '/admin/:slug',
        element: (
          <AdminLayout authentication={true}>
            <Admin />
          </AdminLayout>
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
