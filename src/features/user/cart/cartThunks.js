import { createAsyncThunk } from "@reduxjs/toolkit";
import userConfig from "../../../appwrite/userConfig";

export const fetchCart = createAsyncThunk("cart/fetchCart", async (userId) => {
  const cart = await userConfig.getCart(userId);
  return cart;
});

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ userId, productId }) => {
    const res = await userConfig.addItemToCart(userId, productId);
    return res;
  }
);

export const deleteItemFromCart = createAsyncThunk(
  "cart/deleteItemFromCart",
  async ({ userId, productId }) => {
    const res = await userConfig.deleteItemFromCart(userId, productId);
    console.log(res);
    return res;
  }
);
