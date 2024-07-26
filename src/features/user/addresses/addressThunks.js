import { createAsyncThunk } from '@reduxjs/toolkit'
import userConfig from '../../../appwrite/userConfig'

export const fetchAddresses = createAsyncThunk(
  'addresses/fetchAddresses',
  async (userId) => {
    const response = await userConfig.getAddresses(userId)
    return response
  }
)
