import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

const slice = createSlice({
  initialState,
  name: "authentication",
  reducers: {
    login(state, action) {
      console.log(action.payload);
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;
