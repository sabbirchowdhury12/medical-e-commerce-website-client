"use client";

import { motion } from "framer-motion";
import {
  Minus,
  Plus,
  ShoppingBag,
  ShoppingCart,
  Trash2,
  X,
} from "lucide-react";
import CustomImage from "@/components/image/customImage";
import { useAppDispatch } from "@/redux/hook";
import { removeProduct, updateProduct } from "@/redux/slice/cartSlice";
import React from "react";
import Button from "./button";
import Link from "next/link";

type CartDrawerProps = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  products: any[];
  setCartProducts: React.Dispatch<React.SetStateAction<any[]>>;
};

const CartDrawer = ({
  isOpen,
  setIsOpen,
  products,
  setCartProducts,
}: CartDrawerProps) => {
  const dispatch = useAppDispatch();

  const handleQuantityChange = (productId: string, quantity: number) => {
    dispatch(updateProduct({ id: productId, quantity }));
    setCartProducts((prevProducts) =>
      prevProducts.map((product) =>
        product._id === productId ? { ...product, quantity } : product
      )
    );
  };

  const handleRemoveProduct = (productId: string) => {
    dispatch(removeProduct({ id: productId }));

    setCartProducts((prevProducts) =>
      prevProducts.filter((product) => product._id !== productId)
    );
  };
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      {/* Drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 w-full sm:w-[400px] h-full bg-white z-50 shadow-xl overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-100 flex bg-secondary_1 justify-between items-center sticky top-0 z-10">
          <h3 className="text-xl font-semibold flex items-center ">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Your Cart
            {products.length > 0 && (
              <span className="ml-2 text-sm bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full">
                {products.length} {products.length === 1 ? "item" : "items"}
              </span>
            )}
          </h3>
          <button
            onClick={() => setIsOpen(false)}
            className="h-8 w-8 rounded-full flex items-center justify-center hover:text-black hover:bg-gray-100 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {products.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <ShoppingCart className="h-10 w-10 text-gray-400" />
              </div>
              <h4 className="text-lg font-medium mb-2">Your cart is empty</h4>
              <p className="text-gray-500 mb-6">
                Looks like you haven&apos;t added any products to your cart yet.
              </p>
              <Link
                href="/product"
                className="bg-secondary_1 p-2 px-4 text-sm rounded"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="p-2 space-y-4 mt-5">
              {products.map((product) => (
                <div
                  key={product._id}
                  className="flex gap-4 items-center border-b border-gray-100 pb-4"
                >
                  <div className="relative h-20 w-20 bg-gray-50 rounded-md overflow-hidden">
                    <CustomImage
                      src={product.photos[0] || "/placeholder.svg"}
                      alt={product.name}
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="font-medium text-gray-900 text-sm">
                      {product.name}
                    </p>
                    <p className="text-gray-500 text-sm mt-0.5">
                      ${product.defaultPrice.toFixed(2)}
                    </p>

                    <div className="flex  items-center mt-2">
                      <div
                        onClick={() =>
                          handleQuantityChange(
                            product._id,
                            product.quantity > 1 ? product.quantity - 1 : 1
                          )
                        }
                        className="border border-border_color_7 px-4 font-bold  text-lg cursor-pointer bg-section_bg_1 text-black"
                      >
                        -
                      </div>
                      <div className="border border-border_color_7 text-black px-4 font-bold  text-lg">
                        {product.quantity}
                      </div>
                      <div
                        onClick={() =>
                          handleQuantityChange(
                            product._id,
                            product.quantity + 1
                          )
                        }
                        className="border border-border_color_7 bg-section_bg_1 text-black px-4 font-bold  text-lg cursor-pointer"
                      >
                        +
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-medium text-black text-xs">
                      ${(product.defaultPrice * product.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => handleRemoveProduct(product._id)}
                      className="text-rose-500 hover:text-rose-600 transition-colors mt-2 text-sm flex items-center ml-auto"
                    >
                      <Trash2 className="h-3.5 w-3.5 mr-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with totals and checkout */}
        {products.length > 0 && (
          <div className="border-t border-gray-100 p-4 bg-white sticky bottom-0">
            {/* <Button className="w-full">Proceed to Checkout</Button> */}
            <Link
              href={"/cart"}
              className="relative flex h-[60px] w-full items-center justify-center  hover:border-black overflow-hidden bg-secondary_1 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0  hover:text-black  before:bg-white before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-full"
            >
              <span className="relative z-10 font-sans text-lg font-semibold">
                View Cart
              </span>
            </Link>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default CartDrawer;
