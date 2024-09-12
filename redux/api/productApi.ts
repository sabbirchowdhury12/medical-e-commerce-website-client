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
      query: ({ searchValue, categoryName, sortBy }) => {
        let url = `/product?searchTerm=${searchValue}&sortBy=${sortBy}`;
        if (categoryName) {
          url += `&categoryName=${categoryName.toLowerCase()}`;
        }
        return {
          url,
          method: "GET",
        };
      },
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
