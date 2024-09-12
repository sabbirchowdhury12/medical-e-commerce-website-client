"use client";
import React from "react";
import Container from "@/components/layout/container";
import { CartTable } from "./cartTable";
import { useGetAllProductQuery } from "@/redux/api/productApi";
import Loader from "@/components/loding";
import Button from "@/components/ui/button";
import Link from "next/link";

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
