import { createSlice } from '@reduxjs/toolkit'
import { fetchAllUsers } from './userThunks'
const initialState = {
  users: [],
  fetching: false,
  error: null,
}

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.fetching = true
        state.error = null
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.users = action.payload
        state.error = null
        state.fetching = false
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.error = action.error.message
        state.fetching = false
      })
  },
})

export default usersSlice.reducer
