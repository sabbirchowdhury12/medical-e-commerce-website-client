"use client";
import { Search } from "lucide-react";
import React, { useState } from "react";

const SearchForm = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All categories");

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const selectCategory = (category: React.SetStateAction<string>) => {
    setSelectedCategory(category);
    setDropdownVisible(false);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle the search logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative shadow-lg border rounded-full border-border_primary"
    >
      <div className="flex">
        <label
          htmlFor="search-dropdown"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Your Email
        </label>
        <button
          id="dropdown-button"
          type="button"
          onClick={toggleDropdown}
          className="p-2 flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-full hover:bg-gray-200 focus:ring-0 focus:outline-none"
        >
          {selectedCategory}
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
            className="z-10 absolute top-14 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
          >
            <ul
              className="py-2 text-sm text-gray-700 "
              aria-labelledby="dropdown-button"
            >
              {["Mockups", "Templates", "Design", "Logos"].map((category) => (
                <li key={category}>
                  <button
                    type="button"
                    onClick={() => selectCategory(category)}
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-3 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-full focus:ring-0 focus:outline-none border-0 "
            placeholder="Search ..."
            required
          />
          <button
            type="submit"
            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white  rounded-e-full  bg-secondary_1"
          >
            <Search />

            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
