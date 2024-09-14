import { ICategory, IProduct } from "@/type/common";
import React, { useState } from "react";

type FilterProductsProps = {
  categories: ICategory[];
  handleCategoryChange: (categoty: any) => void;
  handleSubCategoryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  products: IProduct[];
  currentSubCategories: string[];
};

const FilterProducts: React.FC<FilterProductsProps> = ({
  categories,
  handleCategoryChange,
  handleSubCategoryChange,
  products,
  currentSubCategories,
}) => {
  return (
    <>
      {/* filter by category */}
      <h3 className="h4-styles">Filter by Category</h3>
      <div className="border border-border_color_7 p-2 pl-6 text-paragraph rounded mt-14">
        {categories?.map((category) => (
          <div
            key={category._id}
            className="my-6 font-semibold tracking-widest"
          >
            <input
              type="radio"
              name="category"
              id={category._id}
              value={category.name}
              onChange={() => handleCategoryChange(category)} // Pass the whole category object
            />
            <label htmlFor={category._id} className="ml-6">
              {category.name}
            </label>
          </div>
        ))}
      </div>

      <div className="mt-10">
        {/* filter by sub-category */}
        <h3 className="h4-styles">Filter by Sub-category</h3>
        <div className="border border-border_color_7 p-2 pl-6 text-paragraph rounded mt-14">
          {currentSubCategories.length
            ? currentSubCategories?.map((item) => (
                <div key={item} className="my-6 font-semibold">
                  <input
                    type="radio"
                    name="subCategory"
                    id={item}
                    value={item}
                    onChange={handleSubCategoryChange}
                  />
                  <label htmlFor={item} className="ml-6">
                    {item}
                  </label>
                </div>
              ))
            : products?.map(
                ({
                  _id,
                  subCategory,
                }: {
                  _id: string;
                  subCategory: string;
                }) => (
                  <div key={_id} className="my-6 font-semibold">
                    <input
                      type="radio"
                      name="subCategory"
                      id={_id}
                      value={subCategory}
                      onChange={handleSubCategoryChange}
                    />
                    <label htmlFor={_id} className="ml-6">
                      {subCategory}
                    </label>
                  </div>
                )
              )}
        </div>
      </div>
    </>
  );
};

export default FilterProducts;
