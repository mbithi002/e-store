import { createSlice } from '@reduxjs/toolkit'
import { fetchAllAddress } from './allAddressesThunks'

const initialState = {
  allAddresses: [],
  fetching: false,
  error: null,
}

const allAddressesSlice = createSlice({
  name: 'allAddressesSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllAddress.pending, (state) => {
        state.fetching = true
        state.error = null
      })
      .addCase(fetchAllAddress.fulfilled, (state, action) => {
        state.allAddresses = action.payload
        state.error = null
        state.fetching = false
      })
      .addCase(fetchAllAddress.rejected, (state, action) => {
        state.error = action.error.message
        state.fetching = false
      })
  },
})

export default allAddressesSlice.reducer
