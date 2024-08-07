import { createSlice } from '@reduxjs/toolkit'

import { createCategory, fetchAllCategories } from './categoryThunks'

const initialState = {
  categories: [],
  fetching: false,
  error: null,
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCategories.pending, (state) => {
        state.fetching = true
        state.error = null
      })
      .addCase(fetchAllCategories.fulfilled, (state, action) => {
        state.categories = action.payload
        state.fetching = false
        state.error = null
      })
      .addCase(fetchAllCategories.rejected, (state, action) => {
        state.fetching = false
        state.error = action.error.message
      })
      .addCase(createCategory.pending, (state) => {
        state.fetching = true
        state.error = null
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.fetching = false
        state.error = null
        state.categories = action.payload
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.error = action.error.message
        state.fetching = false
      })
  },
})

export default categoriesSlice.reducer
