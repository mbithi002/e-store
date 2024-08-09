import { createSlice } from '@reduxjs/toolkit'
import { fetchAdminOrders } from './allOrdersThunks'

const initialState = {
  adminOrders: [],
  fetching: false,
  error: null,
}

const adminOrdersSlice = createSlice({
  name: 'adminOrdersSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminOrders.pending, (state) => {
        state.fetching = true
        state.error = null
      })
      .addCase(fetchAdminOrders.fulfilled, (state, action) => {
        state.adminOrders = action.payload
        state.error = null
        state.fetching = false
      })
      .addCase(fetchAdminOrders.rejected, (state, action) => {
        state.error = action.error.message
        state.fetching = false
      })
  },
})

export default adminOrdersSlice.reducer
