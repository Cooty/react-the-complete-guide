import { configureStore } from "@reduxjs/toolkit";
import { reducer as counterReducer } from "./counter";
import { reducer as authReducer } from "./auth";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
