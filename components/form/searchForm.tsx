"use client";
import { Search } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const SearchForm = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [product, setProduct] = useState("");

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
    setDropdownVisible(false);
  };

  const handleProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct(e.target.value);
  };

  const search = (
    <div className="relative w-full">
      <input
        type="search"
        id="search-dropdown"
        className="block p-3 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-full focus:ring-0 focus:outline-none border-0"
        placeholder="Search ..."
        required
        onChange={handleProduct}
      />
      <Link
        href={`/shop/product?category=${selectedCategory}&productName=${product}`}
        className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white rounded-e-full bg-secondary_1"
      >
        <Search />
        <span className="sr-only">Search</span>
      </Link>
    </div>
  );

  return (
    <form className="relative shadow-lg border rounded-full border-border_primary">
      <div className="flex">
        <label
          htmlFor="search-dropdown"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <button
          id="dropdown-button"
          type="button"
          onClick={toggleDropdown}
          className="hidden md:inline-flex p-2 font-semibold flex-shrink-0 z-10 items-center py-2.5 px-4 text-sm text-center text-gray-900 bg-gray-100 rounded-l-full hover:bg-gray-200 focus:ring-0 focus:outline-none w-28"
        >
          {selectedCategory ? selectedCategory : "Categories"}
          <svg
            className="w-2.5 h-2.5 ms-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {dropdownVisible && (
          <div
            id="dropdown"
            className="z-10 absolute top-14 bg-white divide-y divide-gray-100 shadow-lg w-44"
          >
            <ul
              className="py-2 text-sm text-gray-700"
              aria-labelledby="dropdown-button"
            >
              {["Medicine", "Equipment", "Sanitizer"].map((category) => (
                <li key={category}>
                  <button
                    type="button"
                    onClick={() => selectCategory(category)}
                    className="text-sm inline-flex w-full px-4 py-2 hover:bg-gray-100"
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {search}
      </div>
    </form>
  );
};

export default SearchForm;
