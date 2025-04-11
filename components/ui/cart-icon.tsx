/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import CartDrawer from "./cart-drawer";
import { ShoppingCart } from "lucide-react";
import { useGetAllProductQuery } from "@/redux/api/productApi";

const CartIcon = () => {
  const { data } = useGetAllProductQuery({});
  const products = data?.data || [];

  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState<
    ((typeof products)[0] & { quantity: number })[]
  >([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("Medicine-Cart");
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart);
        const filteredProducts = products
          ?.filter((product: { _id: string }) =>
            parsedCart.some(
              (cartItem: { productId: string }) =>
                cartItem.productId === product._id
            )
          )
          .map((product: { _id: any }) => ({
            ...product,
            quantity:
              parsedCart.find(
                (cartItem: any) => cartItem.productId === product._id
              )?.quantity || 1,
          }));
        setCartProducts(filteredProducts);
      }
    }
  }, [products]);

  return (
    <>
      <div
        className="text-white font-bold relative"
        onClick={() => setCartDrawerOpen(true)}
      >
        <ShoppingCart size={30} />
        <span className="absolute -top-2 bg-white h-6 w-6 text-center items-center justify-center flex rounded-full text-xs -right-2 text-secondary_1 font-bold">
          {products.length}
        </span>
      </div>
      <CartDrawer
        isOpen={cartDrawerOpen}
        setIsOpen={setCartDrawerOpen}
        products={cartProducts}
        setCartProducts={setCartProducts}
      />
    </>
  );
};

export default CartIcon;
