import { createAsyncThunk } from '@reduxjs/toolkit'
import userConfig from '../../../appwrite/userConfig'

export const fetchAllOrders = createAsyncThunk(
  'user/fetchAllOrders',
  async (userId) => {
    const response = userConfig.getOrders(userId)
    return response
  }
)
