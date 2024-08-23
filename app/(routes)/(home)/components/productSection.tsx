"use client";
import FlexBetween from "@/components/layout/flexBetween";
import FlexBox from "@/components/layout/flexbox";
import Heading from "@/components/ui/heading";
import { HR } from "flowbite-react";
import React, { useState } from "react";
import Product from "./product";
import Button from "@/components/ui/button";

const Category = [
  {
    title: "Medicine",
    path: "medicine",
  },
  {
    title: "Safety Suite",
    path: "safty",
  },
  {
    title: "Equipment",
    path: "equipment",
  },
  {
    title: "Hygicinic",
    path: "hygicinic",
  },
];
const products = [
  {
    name: "Product 1",
    slug: "product-1",
    photos: [
      "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product-2/11.png",
      "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product-2/11.png",
    ],
    description: "This is the description for Product 1.",
    metaKey: "product1, example",
    company: "Company A",
    discount: 10,
    stockStatus: true,
    status: "active",
    categoryId: "64b5f8e2f2a4b8c1d4e5f6a7",
    categoryName: "Category A",
    variants: [
      { variantName: "Variant 1", variantPrice: 100 },
      { variantName: "Variant 2", variantPrice: 120 },
    ],
    defaultPrice: 110,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Product 2",
    slug: "product-2",
    photos: [
      "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product-2/11.png",
      "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product-2/11.png",
    ],
    description: "This is the description for Product 2.",
    metaKey: "product2, example",
    company: "Company B",
    discount: 15,
    stockStatus: false,
    status: "inactive",
    categoryId: "64b5f8e2f2a4b8c1d4e5f6a8",
    categoryName: "Category B",
    variants: [
      { variantName: "Variant 3", variantPrice: 200 },
      { variantName: "Variant 4", variantPrice: 220 },
    ],
    defaultPrice: 210,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
const ProductSection = () => {
  const [category, setCategory] = useState("");
  return (
    <section className="h-screen ">
      <Heading
        title="Our Products"
        sub_title="A highly efficient slip-ring scanner for today's diagnostic requirements."
      />
      <FlexBox className="flex-wrap my-10" gap="8">
        {" "}
        {Category.map((item) => {
          return (
            <FlexBox key={item.title} className="w-52 cursor-pointer">
              <p
                onClick={() => setCategory(item.title)}
                className={`text-xl font-bold text-center text-wrap border-r-2 pr-16 font-sans ${
                  category === item.title ? "text-secondary_1 " : "text-black"
                }`}
              >
                {item.title}
              </p>
            </FlexBox>
          );
        })}
      </FlexBox>

      {/* product card  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <Product key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
