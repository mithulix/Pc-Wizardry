import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const apiSlice = createApi({
  // Specify the name for the reducer path
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://pc-builder-assignment-server.vercel.app/",
  }),
  tagTypes: ["reviews", "addProduct"],


  // Extract rehydration info for the API slice
  extractRehydrationInfo(action, { reducerPath }) {
    // If the action type is HYDRATE, return the rehydrated data for this reducer path
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },

  endpoints: () => ({}),
});
