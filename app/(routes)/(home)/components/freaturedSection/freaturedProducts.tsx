"use client";
import CustomImage from "@/components/image/customImage";
import Heading from "@/components/ui/heading";
import { IProduct } from "@/type/common";
import { products } from "@/utils/data";
import { Rating } from "flowbite-react";
import { motion } from "framer-motion";
import React from "react";

const FreaturedProducts = () => {
  return (
    <div>
      <Heading title="Freature Products" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product: any) => (
          <motion.div
            key={product._id}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.15)",
            }}
            transition={{ duration: 0.3 }}
            className="group border-2 border-border_color_8 p-8 text-center relative"
          >
            <div className="flex gap-4 items-center">
              <div className="h-28 w-24">
                <CustomImage
                  className="h-full w-full"
                  src={product.photos[0]}
                  alt={product?.name}
                />
              </div>

              <div className="flex flex-col items-start">
                <Rating>
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star filled={false} />
                  <p className="ml-2 text-xs font-medium text-paragraph font-sans">
                    4.95 out of 5
                  </p>
                </Rating>
                <p className="my-2 text-sm font-bold font-serif">
                  {product.name}
                </p>
                <p className=" text-lg font-bold font-serif text-secondary_1 ">
                  $ {product?.defaultPrice}{" "}
                  <span className="text-xs line-through ml-4">
                    ${" "}
                    {product?.defaultPrice +
                      (product?.defaultPrice * product?.discount) / 100}
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FreaturedProducts;
