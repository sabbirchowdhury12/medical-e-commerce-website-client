"use client";

import FlexBox from "@/components/layout/flexbox";
import Heading from "@/components/ui/heading";
import React, { useState } from "react";
import { useGetAllProductQuery } from "@/redux/api/productApi";
import ProductGrid from "@/components/ui/productGrid";
import { motion } from "framer-motion";
import { Category } from "@/utils/data";
import Loader from "@/components/loding";

const products = [
  {
    _id: "01",
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
    _id: "02",
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

const tabVariants = {
  initial: { opacity: 0.5, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
};

const ProductSection = () => {
  const [category, setCategory] = useState("");

  const { data, error, isLoading } = useGetAllProductQuery({});

  if (isLoading) {
    return <Loader />;
  }
  return (
    <section>
      <Heading
        title="Our Products"
        sub_title="A highly efficient slip-ring scanner for today's diagnostic requirements."
      />

      <FlexBox className="flex-wrap my-14 gap-8">
        {Category.map((item) => (
          <motion.div
            key={item.title}
            initial="initial" // Use the variant label
            animate={category === item.title ? "animate" : "initial"}
            variants={tabVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }} // You can directly define transition here
          >
            <FlexBox className="w-52 cursor-pointer text-center bg-section_bg_1 p-2 rounded">
              <p
                onClick={() => setCategory(item.title)}
                className={`uppercase text-lg font-bold text-wrap text-center pb-4 font-sans ${
                  category === item.title
                    ? "text-secondary_1 border-b"
                    : "text-black"
                }`}
              >
                {item.title}
              </p>
            </FlexBox>
          </motion.div>
        ))}
      </FlexBox>

      {/* product card  */}

      <ProductGrid products={data?.data} />
    </section>
  );
};

export default ProductSection;
