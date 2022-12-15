import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0, showCounter: true };

export const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      const amount = action.payload ? action.payload : 1;
      state.count = state.count + amount;
    },
    decrement(state, action) {
      const amount = action.payload ? action.payload : 1;
      state.count = state.count - amount;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// This would be the old way of making a reducer function with IF checks for the action types
// we can save ourselves this effort by using Redux Toolkit

// const counterReducer = (state = initialState, action) => {
//   const amount = action.amount ? action.amount : 1;

//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         count: state.count + amount,
//         showCounter: state.showCounter,
//       };
//     case "DECREMENT":
//       return {
//         count: state.count - amount,
//         showCounter: state.showCounter,
//       };
//     case "TOGGLE":
//       return {
//         count: state.count,
//         showCounter: !state.showCounter,
//       };
//     default:
//       return state;
//   }
// };

export const reducer = slice.reducer;
export const actions = slice.actions;
