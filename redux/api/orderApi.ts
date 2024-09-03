import { baseApi } from "./baseApi";

export const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createOrder: build.mutation({
      query: (orderData) => ({
        url: "/order",
        method: "POST",
        body: orderData,
      }),
    }),
    // getAllProduct: build.query({
    //   query: ({}) => ({
    //     url: `/product`,
    //     method: "GET",
    //   }),
    //   // providesTags: ['vehicle'],
    // }),
    // getCategoryProduct: build.query({
    //   query: (id) => ({
    //     url: `/product/category/${id}`,
    //     method: "GET",
    //   }),
    //   // providesTags: ['vehicle'],
    // }),
    // getSingleProduct: build.query({
    //   query: (id) => ({
    //     url: `/product/${id}`,
    //     method: "GET",
    //   }),
    //   // providesTags: ['vehicle'],
    // }),
  }),
});

export const { useCreateOrderMutation } = orderApi;
