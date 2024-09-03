import { baseApi } from "./baseApi";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // createCategory: build.mutation({
    //   query: (registerData) => ({
    //     url: "/auth/register",
    //     method: "POST",
    //     body: registerData,
    //   }),
    // }),
    getAllCategory: build.query({
      query: ({}) => ({
        url: `/category`,
        method: "GET",
      }),
      // providesTags: ['vehicle'],
    }),
    // getSingleProduct: build.query({
    //   query: (id) => ({
    //     url: `/product/${id}`,
    //     method: "GET",
    //   }),
    //   // providesTags: ['vehicle'],
    // }),
  }),
});

export const { useGetAllCategoryQuery } = categoryApi;
