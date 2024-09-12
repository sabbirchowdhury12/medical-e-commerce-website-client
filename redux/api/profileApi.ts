import { baseApi } from "./baseApi";

export const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
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
    getProfile: build.query({
      query: (id) => ({
        url: `/profile/${id}`,
        method: "GET",
      }),
      // providesTags: ['vehicle'],
    }),
  }),
});

export const { useGetProfileQuery } = profileApi;
