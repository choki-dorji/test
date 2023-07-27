import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
} from "@reduxjs/toolkit/query/react";

export const Slice = createApi({
  reducerPath: "Slice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
    }),
    postProducts: builder.mutation({
      query: (newproducts) => ({
        url: "/",
        method: "POST",
        body: newproducts,
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
    searchProducts: builder.query({
      query: (id: number) => `products/${id}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  usePostProductsMutation,
  useSearchProductsQuery,
} = Slice;
