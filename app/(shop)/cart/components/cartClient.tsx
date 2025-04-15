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
      <CartTable products={data?.data} />
    </Container>
  );
};

export default CartClient;
