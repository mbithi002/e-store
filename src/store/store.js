import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import cartSlice from "../features/user/cart/cartSlice";
import productsSlice from "../features/user/shop/productsSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    products: productsSlice,
  },
});

export default store;
