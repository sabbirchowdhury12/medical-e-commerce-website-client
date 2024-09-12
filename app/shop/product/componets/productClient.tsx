"use client";
import { CardLoaderPage } from "@/components/cardLoader";
import { DropdownInput } from "@/components/form/dropdown";
import FormInput from "@/components/form/formInput";
import Container from "@/components/layout/container";
import FlexBetween from "@/components/layout/flexBetween";
import FlexBox from "@/components/layout/flexbox";
import ProductFlex from "@/components/ui/productFlex";
import ProductGrid from "@/components/ui/productGrid";
import { useGetAllCategoryQuery } from "@/redux/api/categoriesApi";
import { useGetAllProductQuery } from "@/redux/api/productApi";
import { LayoutGrid, ListOrdered } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const orderList = [
  {
    title: "Selected By Latest",
    value: "createdAt",
    order: "asc",
  },
  {
    title: "Name (A - Z)",
    value: "name",
    order: "asc",
  },
  {
    title: "Name (Z - A)",
    value: "name",
    order: "desc",
  },
  {
    title: "pRice (Low > Hing)",
    value: "price",
    order: "asc",
  },
  {
    title: "Name (Hing < Low)",
    value: "price",
    order: "desc",
  },
];

const ProductClient = () => {
  const [view, setView] = useState<"flex" | "grid">("flex");
  const [order, selectOrder] = useState("");
  const [searchValue, setSearchValue] = useState<string | null>("");
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("asc");
  const [categoryName, setCategoryName] = useState("");

  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const productName = searchParams.get("productName");

  useEffect(() => {
    if (category) {
      setSearchValue(category);
    } else if (productName) {
      setSearchValue(productName);
    }
  }, [category, productName]);
  const { data } = useGetAllProductQuery({
    searchValue,
    sortBy,
    sortOrder,
    ...(categoryName && { categoryName }),
  });
  const { data: categories } = useGetAllCategoryQuery({});

  const products = data?.data;
  console.log(products);

  console.log(category, productName);
  console.log(sortBy, sortOrder, categoryName);
  return (
    <Container>
      <FlexBetween>
        <div className="flex items-center space-x-4 mb-10">
          <ListOrdered
            onClick={() => setView("flex")}
            color={view === "flex" ? "#0a9a73 " : "#5c727d"}
            className="cursor-pointer"
            size={"35"}
          />
          <LayoutGrid
            onClick={() => setView("grid")}
            color={view === "grid" ? "#0a9a73" : "#5c727d"}
            className="cursor-pointer text-paragraph"
            size={"30"}
          />
        </div>

        <FlexBox>
          <div className="relative inline-flex">
            <svg
              className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 412 232"
            >
              <path
                d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                fill="#648299"
                fill-rule="nonzero"
              />
            </svg>
            <select
              className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
              onChange={(e) => {
                const [sortByValue, sortOrderValue] = e.target.value.split(":"); // Split the value
                setSortBy(sortByValue);
                setSortOrder(sortOrderValue);
              }}
            >
              {orderList.map((list, ind) => (
                <option
                  key={ind}
                  value={`${list.value}:${list.order}`} // Combine value and order
                >
                  {list.title}
                </option>
              ))}
            </select>
          </div>
        </FlexBox>
      </FlexBetween>

      <FlexBetween className="items-start">
        {products ? (
          view === "flex" ? (
            <ProductFlex products={products} />
          ) : (
            <ProductGrid products={products} />
          )
        ) : (
          <CardLoaderPage />
        )}

        <div>
          Filter
          {categories?.data?.map((category) => (
            <div key={category._id}>
              <input
                type="radio"
                name="category" // The same name for all radio buttons to group them
                id={category._id}
                value={category.name} // Unique value for each category
                onChange={(e) => setCategoryName(e.target.value)} // Update the state when selected
              />
              <label htmlFor={category._id}>{category?.name}</label>
            </div>
          ))}
        </div>
      </FlexBetween>
    </Container>
  );
};

export default ProductClient;
