import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../types";

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'https://charm-box-gifts-server.vercel.app/api'}),
  tagTypes: ['User', 'Product'],
  endpoints: (builder) => ({

    // product api start
    createProduct: builder.mutation<Product, Partial<Product>>({
      query: (newProduct) => ({
        url: '/products',
        method: 'POST',
        body: newProduct
      }),
      invalidatesTags: ['Product']
    })
    // product api end
    
  })
})

export const {useCreateProductMutation} = apiSlice