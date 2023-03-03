import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../api/productsApi";
import cartReducer from "../slice/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
