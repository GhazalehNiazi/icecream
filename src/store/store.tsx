'use client';
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { cartSlice } from "./features/cartSlice";

const reducers = combineReducers({
  cart: cartSlice.reducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
