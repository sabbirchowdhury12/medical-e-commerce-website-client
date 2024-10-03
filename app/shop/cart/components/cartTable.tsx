"use client";
import React, { useEffect, useState } from "react";
import CustomImage from "@/components/image/customImage";
import Container from "@/components/layout/container";

import { useAppDispatch } from "@/redux/hook";
import { removeProduct, updateProduct } from "@/redux/slice/cartSlice";

import { Table } from "flowbite-react";
import { Delete } from "lucide-react";

export function CartTable({ products }: any) {
  const [cartProducts, setCartProducts] = useState<
    ((typeof products)[0] & { quantity: number })[]
  >([]);

  const dispatch = useAppDispatch();

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

  const handleQuantityChange = (productId: string, quantity: number) => {
    dispatch(updateProduct({ id: productId, quantity }));
    setCartProducts((prevProducts) =>
      prevProducts.map((product) =>
        product._id === productId ? { ...product, quantity } : product
      )
    );
  };

  const handleRemoveProduct = (productId: string) => {
    // Dispatch the action to remove the product from the Redux store
    dispatch(removeProduct({ id: productId }));

    // Update the local state to remove the product from the UI
    setCartProducts((prevProducts) =>
      prevProducts.filter((product) => product._id !== productId)
    );
  };
  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Image</Table.HeadCell>
          <Table.HeadCell>Product Name</Table.HeadCell>
          <Table.HeadCell>price</Table.HeadCell>
          <Table.HeadCell>Quntity</Table.HeadCell>
          <Table.HeadCell>Total Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {cartProducts.map((product) => (
            <Table.Row className="bg-white " key={product._id}>
              <Table.Cell>
                <div className="h-24 w-24 border shadow border-border_color_1 p-4 ">
                  <CustomImage
                    className="h-full w-full"
                    src={product?.photos[0]}
                    alt=""
                  />
                </div>
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {product.name}
              </Table.Cell>

              <Table.Cell>{product.defaultPrice}</Table.Cell>
              <Table.Cell>
                {" "}
                <div className="flex  items-center">
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
                      handleQuantityChange(product._id, product.quantity + 1)
                    }
                    className="border border-border_color_7 bg-section_bg_1 text-black px-4 font-bold  text-lg cursor-pointer"
                  >
                    +
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>
                $ {product.defaultPrice * product.quantity}
              </Table.Cell>
              <Table.Cell>
                <button onClick={() => handleRemoveProduct(product._id)}>
                  <Delete />
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
