"use client";

import { useAppDispatch } from "@/redux/hook";
import { increment } from "@/redux/slice/cartSlice";
import { useState } from "react";
import { motion } from "framer-motion";
import CustomImage from "../image/customImage";
import CustomModal from "./customModal";
import ProductIcon from "../productIcon";
import { Button, Modal } from "flowbite-react";
import { addToWishlist } from "@/redux/slice/whishlistSlice";

const ProductGrid = ({ products }: any) => {
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
  const handleWishlist = (id: string, product: any) => {
    dispatch(addToWishlist({ id }));
    setOpenModal(true);
    setCurrentProduct(product);
    setMessage(" Successfully added to your Wishlist");
    setButton({ title: "View Wishlist", path: "/view Wishlist" });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {products?.map((product: any) => (
        <motion.div
          key={product._id}
          whileHover={{
            scale: 1.03,
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
          }}
          transition={{ duration: 0.3 }}
          className="group border  border-border_color_7 p-8 text-center relative"
        >
          <div className="h-36 w-32 mt-5 mx-auto flex justify-center items-center text-center">
            <CustomImage
              src={product.photos[0]}
              className=" h-full w-full text-center block"
              alt={product.slug}
            />
          </div>
          <p className="mt-8 text-sm font-bold font-serif">{product.name}</p>
          <p className="text-lg font-bold font-serif text-secondary_1">
            ${product.defaultPrice}
          </p>
          <p className="absolute top-4 right-4 bg-secondary_1 px-6 py-1 text-white font-semibold font-serif">
            -{product.discount}%
          </p>

          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-white shadow-lg  top-1/4 opacity-0 transition-all duration-500 ease-in-out group-hover:top-1/2 group-hover:opacity-100">
            <ProductIcon
              id={product._id}
              product={product}
              handleCart={handleCart}
              handleWishlist={handleWishlist}
            />
          </div>
        </motion.div>
      ))}

      {openModal && (
        <CustomModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          message={message}
          button={button}
          product={currentProduct}
        />
      )}
    </div>
  );
};

export default ProductGrid;
