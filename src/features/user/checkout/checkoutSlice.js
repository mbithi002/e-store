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
  },
})

export const { checkoutProduct } = checkoutSlice.actions
export default checkoutSlice.reducer
