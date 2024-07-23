import { createSlice } from '@reduxjs/toolkit'
import { addToCart, deleteItemFromCart, fetchCart } from './cartThunks'

const initialState = {
  cart: [],
  fetching: false,
  error: null,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    reset: (state) => {
      state.cart = []
    },
    // Optimistic updates for adding to cart
    addToCartOptimistic: (state, action) => {
      state.cart.push(action.payload.productId)
    },
    // Optimistic updates for deleting from cart
    deleteItemFromCartOptimistic: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.productId !== action.payload.productId
      )
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.fetching = true
        state.error = null
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.fetching = false
        state.error = null
        state.cart = action.payload
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.fetching = false
        state.error = action.error.message
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.fetching = false
        state.error = null
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.fetching = false
        state.error = action.error.message
        // Revert the optimistic update
        state.cart = state.cart.filter(
          (item) => item.productId !== action.meta.arg.productId
        )
      })
      .addCase(deleteItemFromCart.fulfilled, (state, action) => {
        state.fetching = false
        state.error = null
      })
      .addCase(deleteItemFromCart.rejected, (state, action) => {
        state.fetching = false
        state.error = action.error.message
        // Revert the optimistic update
        state.cart.push(action.meta.arg)
      })
  },
})

export const { reset, addToCartOptimistic, deleteItemFromCartOptimistic } =
  cartSlice.actions

export default cartSlice.reducer
