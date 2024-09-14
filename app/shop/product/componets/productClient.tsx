"use client";

import React, { useState, useEffect, useMemo } from "react";
import { ICategory, IProduct, ProductQueryParams } from "@/type/common";
import { useGetAllCategoryQuery } from "@/redux/api/categoriesApi";
import { useGetAllProductQuery } from "@/redux/api/productApi";
import FilterProducts from "./filterProducts";
import { LayoutGrid, ListOrdered } from "lucide-react";
import Container from "@/components/layout/container";
import FlexBetween from "@/components/layout/flexBetween";
import FlexBox from "@/components/layout/flexbox";
import ProductFlex from "@/components/ui/productFlex";
import ProductGrid from "@/components/ui/productGrid";
import { CardLoaderPage } from "@/components/cardLoader";
import { useSearchParams } from "next/navigation";
import { orderList } from "@/utils/data";

const ProductClient = () => {
  const [viewMode, setViewMode] = useState<"flex" | "grid">("flex");
  const [searchValue, setSearchValue] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("createdAt");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(
    null
  );
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);
  const [availableSubCategories, setAvailableSubCategories] = useState<
    string[]
  >([]);

  // Get query data from the URL
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const productNameParam = searchParams.get("productName");

  // Update search value based on query params
  useEffect(() => {
    setSearchValue(categoryParam || productNameParam || "");
  }, [categoryParam, productNameParam]);

  // Memoize product query parameters to prevent unnecessary re-renders
  const productQueryParams: ProductQueryParams = useMemo(
    () => ({
      searchValue,
      sortBy,
      sortOrder,
      categoryName: selectedCategory.toLowerCase() || undefined,
      subCategory: selectedSubCategory?.toLowerCase() || undefined,
    }),
    [searchValue, sortBy, sortOrder, selectedCategory, selectedSubCategory]
  );

  // Fetch categories and products
  const { data: categoryData } = useGetAllCategoryQuery({});
  const { data: productData } = useGetAllProductQuery(productQueryParams);
  const products = productData?.data;
  const categories = categoryData?.data;

  // Handle sorting changes
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [newSortBy, newSortOrder] = e.target.value.split(":");
    setSortBy(newSortBy);
    setSortOrder(newSortOrder as "asc" | "desc");
  };

  // Handle category filter change
  const handleCategoryChange = (category: ICategory) => {
    setSelectedCategory(category.slug);
    setAvailableSubCategories(category.subCategory);
    setSelectedSubCategory(null); // Reset subcategory when category changes
  };

  // Handle subcategory filter change
  const handleSubCategorySelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSubCategory(e.target.value);
  };

  return (
    <Container>
      <div className="flex flex-col md:flex-row items-start gap-10">
        <div className="md:w-2/3 mt-6">
          {/* View Mode Switch and Sorting */}
          <FlexBetween className="mb-10">
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
            <FlexBox>
              <select
                className="border focus:ring-0 border-border_color_7 focus:border-border_color_7 text-sm py-2 focus:outline-none"
                onChange={handleSortChange}
              >
                {orderList.map(({ value, order, title }, index) => (
                  <option key={index} value={`${value}:${order}`}>
                    {title}
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

        {/* Filter Sidebar */}

        <div className="md:w-1/3">
          <FilterProducts
            categories={categories}
            handleCategoryChange={handleCategoryChange}
            handleSubCategoryChange={handleSubCategorySelect}
            products={products}
            currentSubCategories={availableSubCategories}
          />
        </div>
      </div>
    </Container>
  );
};

export default ProductClient;
