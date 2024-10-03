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
        itemsPerPage,
        currentPage,
      }) => {
        // Base URL
        let url = `/product?`;

        // Add query parameters conditionally
        if (searchValue) {
          url += `searchTerm=${searchValue}&`;
        }
        if (sortBy) {
          url += `sortBy=${sortBy}&`;
        }
        if (sortOrder) {
          url += `sortOrder=${sortOrder}&`;
        }
        if (itemsPerPage) {
          url += `limit=${itemsPerPage}&`;
        }
        if (currentPage) {
          url += `page=${currentPage}&`;
        }
        if (categoryName) {
          url += `categoryName=${categoryName}&`;
        }
        if (subCategory) {
          url += `subCategory=${subCategory}&`;
        }

        // Remove the trailing '&' or '?' if no parameters are added
        url = url.endsWith("&") ? url.slice(0, -1) : url;

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
