import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  fetching: false,
  error: null,
}

const checkoutSlice = createSlice({
  name: 'checkoutSlice',
  initialState,
  reducers: {
    checkoutProduct: (state, action) => {
      state.products = []
      state.products.push(action.payload)
    },
    checkoutCart: (state, action) => {
      state.products = action.payload
    },
  },
})

export const { checkoutProduct, checkoutCart } = checkoutSlice.actions
export default checkoutSlice.reducer
