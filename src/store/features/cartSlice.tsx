"use client";
import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
interface item {
  name: string;
  id: string;
  description: string;
  price: number;
  img: string;
  quntity: number;
}

const initialState: { items: item[]; total: number } = { items: [], total: 0 };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add_item: (state, action: PayloadAction<item>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id == action.payload.id
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].quntity += 1;
        state.total += action.payload.price;
      } else {
        state.items.push({ ...action.payload, quntity: 1 });
        state.total += action.payload.price;
      }
    },
    remove_item: (state, action: PayloadAction<item>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.items[itemIndex].quntity > 1) {
        state.items[itemIndex].quntity -= 1;
      } else {
        state.items.splice(itemIndex, 1);
      }
    },
    remove_all_items: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});
export const { add_item, remove_all_items, remove_item } = cartSlice.actions;
