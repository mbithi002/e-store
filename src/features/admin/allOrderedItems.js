import { createAsyncThunk } from '@reduxjs/toolkit'
import adminConfig from '../../appwrite/adminConfig'

export const fetchAllOrderedItems = createAsyncThunk(
  'admin/fetchAllOrderedItems',
  async () => {
    const response = await adminConfig.gotOrderedItems()
    return response
  }
)
