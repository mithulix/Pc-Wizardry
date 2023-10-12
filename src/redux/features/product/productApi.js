import { apiSlice } from "../api/apiSlice";

const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Define a query endpoint to fetch all products.
    getProducts: builder.query({
      query: () => "/products",
    }),
    // Define a query endpoint to fetch a product by its ID.
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: `/create-product`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["addBook"],
    }),
    addReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/products/review/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reviews"],
    }),
    getReview: builder.query({
      query: (id) => `/products/review/${id}`,
      providesTags: ["reviews"],
    }),
  }),
});

export default productApi;

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useAddReviewMutation,
  useGetReviewQuery,
} = productApi;
