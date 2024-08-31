"use client";
import React, { useEffect, useState } from "react";
import CustomImage from "@/components/image/customImage";
import Container from "@/components/layout/container";
import FlexBetween from "@/components/layout/flexBetween";
import FlexBox from "@/components/layout/flexbox";
import { useAppDispatch } from "@/redux/hook";
import { updateProduct } from "@/redux/slice/counterSlice";
import { CartTable } from "./cartTable";
import {
  useGetAllProductQuery,
  useGetSingleProductQuery,
} from "@/redux/api/productApi";
import Loader from "@/components/loding";
import Button from "@/components/ui/button";
import Link from "next/link";

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

const CartClient = () => {
  const { data } = useGetAllProductQuery({});
  if (!data?.data) {
    return <Loader />;
  }

  return (
    <Container>
      <CartTable products={data?.data} />
      <Link
        href={"/shop/checkout"}
        className="mt-10   flex items-end
       justify-end "
      >
        <Button> Checkout</Button>
      </Link>
    </Container>
  );
};

export default CartClient;
