"use client";
import React, { useEffect, useState } from "react";
import CustomImage from "@/components/image/customImage";
import Container from "@/components/layout/container";

import { useAppDispatch } from "@/redux/hook";
import { removeProduct, updateProduct } from "@/redux/slice/cartSlice";

import { Table, Modal } from "flowbite-react";
import { ShoppingCart, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import Link from "next/link";
import Button from "@/components/ui/button";

export function CartTable({ products }: any) {
  const [cartProducts, setCartProducts] = useState<
    ((typeof products)[0] & { quantity: number })[]
  >([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );

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

  const confirmRemoveProduct = () => {
    if (!selectedProductId) return;
    dispatch(removeProduct({ id: selectedProductId }));
    toast.success("Product removed from cart successfully", {
      position: "top-right",
    });
    setCartProducts((prevProducts) =>
      prevProducts.filter((product) => product._id !== selectedProductId)
    );
    setSelectedProductId(null);
    setIsModalOpen(false);
  };

  console.log(cartProducts.length, "cartProducts");
  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        {cartProducts.length > 0 && (
          <Table.Head>
            <Table.HeadCell>Image</Table.HeadCell>
            <Table.HeadCell>Product Name</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Quantity</Table.HeadCell>
            <Table.HeadCell>Total Price</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Delete</span>
            </Table.HeadCell>
          </Table.Head>
        )}
        <Table.Body className="divide-y">
          {cartProducts.map((product, ind) => (
            <Table.Row
              className={` ${
                ind % 2 === 0
                  ? "bg-white border-none hover:bg-none"
                  : "bg-gray-200 border-none hover:bg-gray-200"
              }`}
              key={product._id}
            >
              <Table.Cell>
                <div className="h-24 w-24 border  shadow border-border_color_1 p-4">
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
              <Table.Cell>${product.defaultPrice}</Table.Cell>
              <Table.Cell>
                <div className="flex items-center">
                  <div
                    onClick={() =>
                      handleQuantityChange(
                        product._id,
                        product.quantity > 1 ? product.quantity - 1 : 1
                      )
                    }
                    className="border border-border_color_7 px-4 font-bold text-lg cursor-pointer bg-section_bg_1 text-black"
                  >
                    -
                  </div>
                  <div className="border border-border_color_7 text-black px-4 font-bold text-lg">
                    {product.quantity}
                  </div>
                  <div
                    onClick={() =>
                      handleQuantityChange(product._id, product.quantity + 1)
                    }
                    className="border border-border_color_7 bg-section_bg_1 text-black px-4 font-bold text-lg cursor-pointer"
                  >
                    +
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>
                $ {product.defaultPrice * product.quantity}
              </Table.Cell>
              <Table.Cell>
                <button
                  onClick={() => {
                    setSelectedProductId(product._id);
                    setIsModalOpen(true);
                  }}
                >
                  <span className="text-rose-500 hover:text-rose-600 transition-colors mt-2 text-sm flex items-center ml-auto">
                    <Trash2 className="h-3.5 w-3.5 mr-1" />
                  </span>
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {cartProducts.length > 0 ? (
        <Link
          href={"/checkout"}
          className="mt-10   flex items-end
     justify-end "
        >
          <Button> Checkout</Button>
        </Link>
      ) : (
        <div className="flex flex-col items-center justify-center h-full p-6 text-center">
          <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
            <ShoppingCart className="h-10 w-10 text-gray-400" />
          </div>
          <h4 className="text-lg font-medium mb-2">Your cart is empty</h4>
          <p className="text-gray-500 mb-6">
            Looks like you haven&apos;t added any products to your cart yet.
          </p>
          <Link href="/product" className=" p-2 px-4 ">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      )}

      {/* Modal for delete confirmation */}
      {/* Delete Confirmation Modal */}
      <Modal
        size={"xl"}
        dismissible
        className="pt-40 custom-modal"
        popup
        show={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <Modal.Header>Confirm Delete</Modal.Header>
        <Modal.Body>
          <p className="text-gray-700">
            Are you sure you want to remove this product from your cart?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-red_2 text-white p-4 rounded-md font-bold"
            onClick={confirmRemoveProduct}
          >
            Yes, Delete
          </button>
          <button
            className="bg-transparent  border border-section_bg_2 p-4 rounded-md font-bold"
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
