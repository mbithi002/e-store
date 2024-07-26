import { createAsyncThunk } from '@reduxjs/toolkit'
import userConfig from '../../../appwrite/userConfig'

export const fetchAddresses = createAsyncThunk(
  'addresses/fetchAddresses',
  async (userId) => {
    const response = await userConfig.getAddresses(userId)
    return response
  }
)

export const deleteAddress = createAsyncThunk(
  'addresses/deleteAddress',
  async (documentId) => {
    const response = await userConfig.deleteAddress(documentId)
    console.log(response)
    return response
  }
)
