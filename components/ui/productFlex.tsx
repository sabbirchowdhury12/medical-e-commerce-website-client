/* eslint-disable react/jsx-key */
"use client";

import { useAppDispatch } from "@/redux/hook";
import { increment } from "@/redux/slice/counterSlice";
import { useState } from "react";
import { motion } from "framer-motion";
import CustomImage from "../image/customImage";
import Link from "next/link";
import { EyeIcon, Heart, ShoppingCart } from "lucide-react";
import CustomModal from "./customModal";
import FlexBox from "../layout/flexbox";
import FlexBetween from "../layout/flexBetween";

const ProductFlex = ({ products }: any) => {
  const [openModal, setOpenModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState("");
  const [message, setMessage] = useState("");
  const [button, setButton] = useState({});

  const dispatch = useAppDispatch();

  const handleCart = (id: string, product: any) => {
    dispatch(increment(id));
    setOpenModal(true);
    setCurrentProduct(product);
    setMessage(" Successfully added to your Cart");
    setButton({ title: "View Cart", path: "/view cart" });
  };
  const handleWishlist = (product: any) => {
    setOpenModal(true);
    setCurrentProduct(product);
    setMessage(" Successfully added to your Wishlist");
    setButton({ title: "View Wishlist", path: "/view Wishlist" });
  };

  return (
    <div className="flex flex-col gap-6">
      {products?.map((product: any) => (
        <div className="group border-4  border-border_color_8 p-8 text-center relative">
          <FlexBetween className="flex-col md:flex-row">
            <div>
              <CustomImage
                src={product.photos[0]}
                className="h-40 "
                alt={product.slug}
              />
            </div>
            <FlexBox className="flex-1 flex-col items-start gap-4 ">
              <p className="mt-8 text-sm font-bold font-serif">
                {product.name}
              </p>
              <p className="text-lg font-bold font-serif text-secondary_1">
                ${product.defaultPrice}
              </p>
              <p className="text-paragraph text-start">
                lorDolor at labore vero tempor est. No ipsum sadipscing vero sed
                et at duo sanctus lorem, et elitr est eirmod.e
              </p>
              <p className="absolute top-4 right-4 bg-secondary_1 px-6 py-1 text-white font-semibold font-serif">
                -{product.discount}%
              </p>

              <div className="flex  shadow-lg border border-border_color_8">
                <div className="w-12  flex justify-center items-center  border-r-2 h-12 text-center border-border_color_7 hover:bg-secondary_1 text-paragraph hover:text-white">
                  <Link href={`/product/details/${product?._id}`}>
                    <EyeIcon />
                  </Link>
                </div>
                <div className="w-12  flex justify-center items-center h-12 text-center border-border_color_7  border-r-2 hover:bg-secondary_1 text-paragraph hover:text-white">
                  <ShoppingCart
                    onClick={() => handleCart(product?._id, product)}
                  />
                </div>
                <div className="w-12  flex justify-center items-center   h-12 text-center  hover:bg-secondary_1 text-paragraph hover:text-white">
                  <Heart onClick={() => handleWishlist(product)} />
                </div>
              </div>
            </FlexBox>
          </FlexBetween>

          {/* {openModal && (
        <CustomModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          message={message}
          button={button}
          product={currentProduct}
        />
      )} */}
        </div>
      ))}
    </div>
  );
};

export default ProductFlex;
