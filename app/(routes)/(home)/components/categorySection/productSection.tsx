"use client";

import FlexBox from "@/components/layout/flexbox";
import Heading from "@/components/ui/heading";
import React, { useState } from "react";
import {
  useGetAllProductQuery,
  useGetCategoryProductQuery,
} from "@/redux/api/productApi";
import ProductGrid from "@/components/ui/productGrid";
import { motion } from "framer-motion";
import { useGetAllCategoryQuery } from "@/redux/api/categoriesApi";
import { CardLoaderPage } from "@/components/cardLoader";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const tabVariants = {
  initial: { opacity: 0.5, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
};

const ProductSection = () => {
  const [categoryId, setCategoryId] = useState("675adfeb1edb60ef2af104e7");

  const { data: categories } = useGetAllCategoryQuery({});
  const { data: productData, isLoading } =
    useGetCategoryProductQuery(categoryId);

  if (isLoading) {
    return <CardLoaderPage />;
  }

  const products = productData?.data;

  return (
    <section>
      <Heading
        title="Our Products"
        sub_title="A highly efficient slip-ring scanner for today's diagnostic requirements."
      />

      <FlexBox className="flex-wrap mt-14 gap-8">
        {categories?.data?.map((item: any) => (
          <motion.div
            key={item?.slug}
            initial="initial" // Use the variant label
            animate={categoryId === item?._id ? "animate" : "initial"}
            variants={tabVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }} // You can directly define transition here
          >
            <FlexBox className="w-52 cursor-pointer text-center bg-section_bg_1 p-2 rounded">
              <p
                onClick={() => setCategoryId(item?._id)}
                className={`uppercase text-lg font-bold text-wrap text-center pb-4 font-sans ${
                  setCategoryId === item?._id
                    ? "text-secondary_1 border-b"
                    : "text-black"
                }`}
              >
                {item.name}
              </p>
            </FlexBox>
          </motion.div>
        ))}
      </FlexBox>
      <Link
        href={"/shop/product"}
        className="text-center gap-2 font-bold text-secondary_1 flex justify-end items-center mt-7 mb-2 text-sm"
      >
        See More <ArrowRight size={14} />
      </Link>
      {/* product card  */}

      <ProductGrid products={products} />
    </section>
  );
};

export default ProductSection;
