import { createAsyncThunk } from '@reduxjs/toolkit'
import adminConfig from '../../appwrite/adminConfig'

export const fetchAdminOrders = createAsyncThunk(
  'admin/fetchAllOrders',
  async () => {
    const response = await adminConfig.getOrders()
    return response
  }
)
