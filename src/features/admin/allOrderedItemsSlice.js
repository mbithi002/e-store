import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import adminConfig from '../../appwrite/adminConfig'

// Thunk to fetch all ordered items
export const fetchAllOrderedItems = createAsyncThunk(
  'admin/fetchAllOrderedItems',
  async () => {
    const response = await adminConfig.gotOrderedItems()
    return response
  }
)

const initialState = {
  orderedItems: [],
  fetching: false,
  error: null,
}

// Slice for all ordered items
const allOrderedItemsSlice = createSlice({
  name: 'allOrderedItemsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllOrderedItems.pending, (state) => {
        state.fetching = true
        state.error = null
      })
      .addCase(fetchAllOrderedItems.fulfilled, (state, action) => {
        state.orderedItems = action.payload
        state.fetching = false
        state.error = null
        console.log(state.orderedItems) // Corrected the log statement
      })
      .addCase(fetchAllOrderedItems.rejected, (state, action) => {
        state.error = action.error.message
        state.fetching = false
      })
  },
})

export default allOrderedItemsSlice.reducer
