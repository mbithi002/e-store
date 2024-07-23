import { createSlice } from "@reduxjs/toolkit";
import { fetchAllproducts } from "./productThunks";

const initialState = {
  products: null,
  fetching: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllproducts.pending, (state) => {
        state.fetching = true;
        state.error = null;
      })
      .addCase(fetchAllproducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.fetching = false;
        state.error = null;
      })
      .addCase(fetchAllproducts.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
