import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], itemCount: 0, changed: false },
  reducers: {
    add(state, action) {
      state.changed = true;
      const itemToAdd = action.payload;
      const existingItem = state.items.find((item) => item.id === itemToAdd.id);
      if (!existingItem) {
        state.items.push({
          id: itemToAdd.id,
          price: itemToAdd.price,
          quantity: 1,
          totalPrice: itemToAdd.price,
          title: itemToAdd.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += itemToAdd.price;
      }
      state.itemCount++;
    },
    remove(state, action) {
      state.changed = true;
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      state.itemCount--;
    },
    replace(state, action) {
      state.items = action.payload.items;
      state.itemCount = action.payload.itemCount;
    },
  },
});

export const actions = cartSlice.actions;

export default cartSlice;
