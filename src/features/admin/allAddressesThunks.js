import { createAsyncThunk } from '@reduxjs/toolkit'
import adminConfig from '../../appwrite/adminConfig'

export const fetchAllAddress = createAsyncThunk(
  'admin/fetchAllAddresses',
  async () => {
    const response = await adminConfig.getAddresses()
    return response
  }
)
