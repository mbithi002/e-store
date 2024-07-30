import { createAsyncThunk } from '@reduxjs/toolkit'
import adminConfig from '../../appwrite/adminConfig'

export const fetchAllUsers = createAsyncThunk(
  'admin/fetchAllUsers',
  async () => {
    const users = await adminConfig.getAllusers()
    return users
  }
)
