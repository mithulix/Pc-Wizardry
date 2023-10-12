// Import necessary modules and libraries
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { apiSlice } from "../features/api/apiSlice";
import pcbuildReducer from "../features/pcbuild/pcbuildSlice";

// Create a Redux store
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    pcbuild: pcbuildReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
});

// Define a function to create and return the store
const makeStore = () => store;

export const wrapper = createWrapper(makeStore, { debug: false });
