import { baseApi } from "./baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createProduct: build.mutation({
      query: (registerData) => ({
        url: "/auth/register",
        method: "POST",
        body: registerData,
      }),
    }),
    getAllProduct: build.query({
      query: ({}) => ({
        url: `/product`,
        method: "GET",
      }),
      // providesTags: ['vehicle'],
    }),
    getCategoryProduct: build.query({
      query: (id) => ({
        url: `/product/category/${id}`,
        method: "GET",
      }),
      // providesTags: ['vehicle'],
    }),
    getSingleProduct: build.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
      // providesTags: ['vehicle'],
    }),
  }),
});

export const {
  useGetAllProductQuery,
  useGetSingleProductQuery,
  useGetCategoryProductQuery,
} = productApi;
