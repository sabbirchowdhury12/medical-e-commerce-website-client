"use client";

import { motion } from "framer-motion";
import { EyeIcon, Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

import Link from "next/link";
import { useAppDispatch } from "@/redux/hook";
import { increment } from "@/redux/slice/counterSlice";
import CustomImage from "@/components/image/customImage";
import CustomModal from "@/components/ui/customModal";

const Product = ({ product }: any) => {
  const [openModal, setOpenModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState("");
  const [message, setMessage] = useState("");
  const [button, setButton] = useState({});

  const dispatch = useAppDispatch();

  const handleCart = (id: string) => {
    dispatch(increment(id));
    setOpenModal(true);
    setCurrentProduct(product);
    setMessage(" Successfully added to your Cart");
    setButton({ title: "View Cart", path: "/view cart" });
  };
  const handleWishlist = () => {
    setOpenModal(true);
    setCurrentProduct(product);
    setMessage(" Successfully added to your Wishlist");
    setButton({ title: "View Wishlist", path: "/view Wishlist" });
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
      }}
      transition={{ duration: 0.3 }}
      className="group border-4  border-border_color_8 p-8 text-center relative"
    >
      <CustomImage
        src={product.photos[0]}
        className="h-60"
        alt={product.slug}
      />
      <p className="mt-8 text-sm font-bold font-serif">{product.name}</p>
      <p className="text-lg font-bold font-serif text-secondary_1">
        ${product.defaultPrice}
      </p>
      <p className="absolute top-4 right-4 bg-secondary_1 px-6 py-1 text-white font-semibold font-serif">
        -{product.discount}%
      </p>

      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center space-x-4 bg-white border border-border_color_7  p-4  top-1/4 opacity-0 transition-all duration-500 ease-in-out group-hover:top-1/2 group-hover:opacity-100">
        <Link href={`/product/details/${product?._id}`}>
          <EyeIcon className="w-12  border-r-2 border-border_color_7 hover:bg-secondary_1 text-paragraph hover:text-white" />
        </Link>
        <ShoppingCart
          onClick={() => handleCart(product?._id)}
          className="w-12  border-r-2 border-border_color_7 hover:bg-secondary_1 text-paragraph hover:text-white"
        />
        <Heart
          onClick={() => handleWishlist()}
          className="w-12   hover:bg-secondary_1 text-paragraph hover:text-white"
        />
      </div>

      {openModal && (
        <CustomModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          message={message}
          button={button}
          product={currentProduct}
        />
      )}
    </motion.div>
  );
};

export default Product;
