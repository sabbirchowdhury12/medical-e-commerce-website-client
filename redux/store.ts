import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import { cartReducer } from "./slice/counterSlice";
import { authReducer } from "./slice/authSlice";
import { profileReducer } from "./slice/prodileSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    cart: cartReducer,
    auth: authReducer,
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
