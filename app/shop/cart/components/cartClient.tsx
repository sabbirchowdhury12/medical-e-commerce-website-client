"use client";
import React from "react";
import Container from "@/components/layout/container";
import { CartTable } from "./cartTable";
import { useGetAllProductQuery } from "@/redux/api/productApi";
import Loader from "@/components/loding";
import Button from "@/components/ui/button";
import Link from "next/link";
import { products } from "@/utils/data";

const CartClient = () => {
  const { data, isLoading } = useGetAllProductQuery({});
  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <CartTable products={products} />

      {data?.data.length ? (
        <Link
          href={"/shop/checkout"}
          className="mt-10   flex items-end
       justify-end "
        >
          <Button> Checkout</Button>
        </Link>
      ) : (
        <div className="mt-10 flex flex-col justify-center items-center w-f">
          <p className="font-bold mb-2 text-lg">Cart is Empty</p>
          <Link href={"/shop/product"} className="">
            <Button> Shop Now</Button>
          </Link>
        </div>
      )}
    </Container>
  );
};

export default CartClient;
