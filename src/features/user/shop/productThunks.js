import { createAsyncThunk } from "@reduxjs/toolkit";
import userConfig from "../../../appwrite/userConfig";

export const fetchAllproducts = createAsyncThunk(
  "user/fetchAllproducts",
  async () => {
    const response = await userConfig.getAllProducts();
    return response.documents;
  }
);
