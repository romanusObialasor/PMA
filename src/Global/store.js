import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./Reducer";

export const store = configureStore({
  reducer: { myReducer },
});
