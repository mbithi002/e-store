import { createSlice } from '@reduxjs/toolkit'
import { fetchAllOrders } from './ordersThunks'

const initialState = {
  orders: [],
  fetching: false,
  error: null,
}

const ordersSlice = createSlice({
  name: 'ordersSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllOrders.pending, (state) => {
        state.fetching = true
        state.error = null
      })
      .addCase(fetchAllOrders.fulfilled, (state, action) => {
        state.orders = action.payload
        state.fetching = false
        state.error = null
      })
      .addCase(fetchAllOrders.rejected, (state, action) => {
        state.error = action.error.message
        state.fetching = false
      })
  },
})

export default ordersSlice.reducer
