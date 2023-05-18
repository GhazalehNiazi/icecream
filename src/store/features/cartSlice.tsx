"use client";
import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
interface item {
  name: string;
  id: string;
  description: string;
  price: number;
  img: string;
}

const initialState: { items: item[]; total: number } = { items: [], total: 0 };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add_item: (state, action: PayloadAction<item>) => {
      console.log(action);
      console.log(current(state));
      state.items.push(action.payload);
      state.total += action.payload.price;
    },
  },
});
export const { add_item } = cartSlice.actions;
