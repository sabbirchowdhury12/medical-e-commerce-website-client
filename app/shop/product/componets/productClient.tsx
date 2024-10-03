"use client";

import React, { useState, useEffect, useMemo } from "react";
import { ICategory, ProductQueryParams } from "@/type/common";
import { useGetAllCategoryQuery } from "@/redux/api/categoriesApi";
import { useGetAllProductQuery } from "@/redux/api/productApi";
import FilterProducts from "./filterProducts";
import { LayoutGrid, ListOrdered } from "lucide-react";
import Container from "@/components/layout/container";
import FlexBetween from "@/components/layout/flexBetween";
import FlexBox from "@/components/layout/flexbox";
import ProductFlex from "@/components/ui/productFlex";
import ProductGrid from "@/components/ui/productGrid";
import { CardLoader, CardLoaderPage } from "@/components/cardLoader";
import { useSearchParams } from "next/navigation";
import { orderList, products } from "@/utils/data";
import { Pagination } from "flowbite-react";

const ProductClient = () => {
  // State management for product listing, filters, pagination, and view modes
  const [viewMode, setViewMode] = useState<"flex" | "grid">("flex");
  const [searchValue, setSearchValue] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("createdAt");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(
    null
  );
  const [itemsPerPage, setItemsPerPage] = useState<number>(2);
  const [availableSubCategories, setAvailableSubCategories] = useState<
    string[]
  >([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [skip, setSkip] = useState<number>(0);

  // URL query parameters handling
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const productNameParam = searchParams.get("productName");

  // Update search value based on query params
  useEffect(() => {
    setSearchValue(categoryParam || productNameParam || "");
  }, [categoryParam, productNameParam]);

  // Memoized product query parameters
  const productQueryParams: ProductQueryParams = useMemo(
    () => ({
      searchValue,
      sortBy,
      sortOrder,
      categoryName: selectedCategory?.toLowerCase() || undefined,
      subCategory: selectedSubCategory?.toLowerCase() || undefined,
      itemsPerPage,
      currentPage,
    }),
    [
      searchValue,
      sortBy,
      sortOrder,
      selectedCategory,
      selectedSubCategory,
      itemsPerPage,
      currentPage,
    ]
  );

  // Fetch categories and products using Redux hooks
  const { data: categoryData } = useGetAllCategoryQuery({});
  const { data: productData } = useGetAllProductQuery(productQueryParams);
  // const products = productData?.data;
  const categories = categoryData?.data;

  // Calculate total pages whenever product data changes
  useEffect(() => {
    if (productData?.meta?.total) {
      setTotalPages(Math.ceil(productData.meta.total / itemsPerPage));
      setSkip(productData.meta.skip);
    }
  }, [productData, itemsPerPage]);

  // Handle sorting change
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [newSortBy, newSortOrder] = e.target.value.split(":");
    setSortBy(newSortBy);
    setSortOrder(newSortOrder as "asc" | "desc");
  };

  // Handle category filter change
  const handleCategoryChange = (category: ICategory) => {
    setSelectedCategory(category.slug);
    setAvailableSubCategories(category.subCategory || []);
    setSelectedSubCategory(null); // Reset subcategory when the category changes
  };

  // Handle subcategory filter change
  const handleSubCategorySelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSubCategory(e.target.value);
  };

  // Handle items per page change
  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(parseInt(e.target.value));
  };

  // Handle page change
  const onPageChange = (page: number) => setCurrentPage(page);

  console.log(productNameParam, categoryParam);
  return (
    <Container>
      <div className="flex flex-col md:flex-row items-start gap-10 ">
        {/* Main Content: Product Display */}
        <div className="w-full md:w-2/3 mt-6">
          {/* View Mode Switch and Sorting */}
          <FlexBetween className="mb-10 md:items-center flex-col sm:flex-row items-start gap-y-10">
            <div className="flex items-center space-x-4">
              <ListOrdered
                onClick={() => setViewMode("flex")}
                color={viewMode === "flex" ? "#0a9a73" : "#5c727d"}
                className="cursor-pointer"
                size={28}
              />
              <LayoutGrid
                onClick={() => setViewMode("grid")}
                color={viewMode === "grid" ? "#0a9a73" : "#5c727d"}
                className="cursor-pointer"
                size={24}
              />
            </div>
            <p className="text-sm font-sans font-semibold text-paragraph tracking-wider">
              Showing {skip + 1} -{" "}
              {Math.min(skip + itemsPerPage, productData?.meta?.total || 0)} of{" "}
              {productData?.meta?.total}
            </p>
            <FlexBox gap="4">
              <select
                className="border border-border_color_7 focus:border-border_color_7 font-sans font-bold text-paragraph focus:ring-0 text-sm py-2"
                onChange={handleSortChange}
              >
                {orderList.map(({ value, order, title }, index) => (
                  <option key={index} value={`${value}:${order}`}>
                    {title}
                  </option>
                ))}
              </select>
              <select
                className="border border-border_color_7 focus:border-border_color_7 font-sans font-bold text-paragraph focus:ring-0 text-sm py-2"
                onChange={handleItemsPerPageChange}
                value={itemsPerPage}
              >
                {[2, 4, 8].map((number, index) => (
                  <option key={index} value={number}>
                    {number}
                  </option>
                ))}
              </select>
            </FlexBox>
          </FlexBetween>

          {/* Product Display */}
          {products ? (
            viewMode === "flex" ? (
              <ProductFlex products={products} />
            ) : (
              <ProductGrid products={products} />
            )
          ) : (
            <CardLoaderPage />
          )}
        </div>

        {/* Sidebar: Filter Products */}
        <div className="w-full md:w-1/3">
          {categories ? (
            <FilterProducts
              categories={categories}
              handleCategoryChange={handleCategoryChange}
              handleSubCategoryChange={handleSubCategorySelect}
              currentSubCategories={availableSubCategories}
              products={products}
            />
          ) : (
            <CardLoader />
          )}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </Container>
  );
};

export default ProductClient;
