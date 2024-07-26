import { createSlice } from '@reduxjs/toolkit'
import { fetchAddresses } from './addressThunks'

const initialState = {
  addresses: [],
  fetching: false,
  error: null,
}

const addressesSlice = createSlice({
  name: 'addressesSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAddresses.pending, (state) => {
      ;(state.fetching = true), (state.error = null)
    })
    builder.addCase(fetchAddresses.fulfilled, (state, action) => {
      state.addresses = action.payload
      state.error = null
      state.fetching = false
    })
    builder.addCase(fetchAddresses.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  },
})

export default addressesSlice.reducer
