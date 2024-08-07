import { createAsyncThunk } from '@reduxjs/toolkit'
import adminConfig from '../../appwrite/adminConfig'

export const createCategory = createAsyncThunk(
  'admin/createCategory',
  async (categoryName, description) => {
    const response = await adminConfig.createCategory(categoryName, description)
    return response
  }
)

export const fetchAllCategories = createAsyncThunk(
  'admin/fetchAllCategories',
  async () => {
    const response = await adminConfig.getCategories()
    return response
  }
)
