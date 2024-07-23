import { createAsyncThunk } from '@reduxjs/toolkit'
import userConfig from '../../../appwrite/userConfig'
import { addToCartOptimistic, deleteItemFromCartOptimistic } from './cartSlice'

export const fetchCart = createAsyncThunk('cart/fetchCart', async (userId) => {
  const cart = await userConfig.getCart(userId)
  return cart
})

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ userId, productId }, { dispatch }) => {
    dispatch(addToCartOptimistic({ productId, userId }))
    const res = await userConfig.addItemToCart(userId, productId)
    return res
  }
)

export const deleteItemFromCart = createAsyncThunk(
  'cart/deleteItemFromCart',
  async ({ userId, productId }, { dispatch, getState }) => {
    const cartItem = getState().cart.cart.find(
      (item) => item.productId === productId
    )
    dispatch(deleteItemFromCartOptimistic({ productId }))
    const res = await userConfig.deleteItemFromCart(userId, productId)
    return cartItem
  }
)

export const clearCart = createAsyncThunk(
  'cart/clearCart',
  async ({ userId }) => {
    const res = await userConfig.clearCart(userId)
    return res
  }
)
