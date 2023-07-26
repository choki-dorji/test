import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
} from "@reduxjs/toolkit/query/react";

export const Slice = createApi({
  reducerPath: "Slice",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://hostelallocation-16464-default-rtdb.firebaseio.com/product.json",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/",
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
  }),
});

export const { useGetProductsQuery, usePostProductsMutation } = Slice;
