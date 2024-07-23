import { createSlice } from "@reduxjs/toolkit";
import { addToCart, deleteItemFromCart, fetchCart } from "./cartThunks";

const initialState = {
  cart: [],
  fetching: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    reset: (state) => {
      state.cart = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.fetching = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.fetching = false;
        state.error = null;
        state.cart = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.error.message;
      })
      .addCase(addToCart.pending, (state) => {
        state.fetching = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.fetching = false;
        state.error = null;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.error.message;
      })
      .addCase(deleteItemFromCart.pending, (state) => {
        state.fetching = true;
        state.error = null;
      })
      .addCase(deleteItemFromCart.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.fetching = false;
        state.error = null;
      })
      .addCase(deleteItemFromCart.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.error.message;
      });
  },
});

export const { reset } = cartSlice.actions;

export default cartSlice.reducer;
