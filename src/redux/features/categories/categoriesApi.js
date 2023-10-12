import { apiSlice } from "../api/apiSlice";

// Create an API instance for categories using `injectEndpoints`
const categoriesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/categories",
    }),
  }),
});

export default categoriesApi;

export const { useGetCategoriesQuery } = categoriesApi;
