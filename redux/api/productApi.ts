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
      query: ({
        searchValue,
        categoryName,
        sortBy,
        subCategory,
        sortOrder,
        limit,
      }) => {
        let url = `/product?searchTerm=${searchValue}&sortBy=${sortBy}&sortOrder=${sortOrder}&limit${limit}`;
        if (categoryName) {
          url += `&categoryName=${categoryName}`;
        }
        if (subCategory) {
          url += `&subCategory=${subCategory}`;
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
