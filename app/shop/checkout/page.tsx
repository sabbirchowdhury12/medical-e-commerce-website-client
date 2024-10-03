"use client";
import React from "react";
import CheckoutClient from "./components/checkoutClient";
import Breadcrumbs from "@/components/ui/breadcrumb";
import Loader from "@/components/loding";
import { useGetAllProductQuery } from "@/redux/api/productApi";
import { products } from "@/utils/data";

const CheckoutPage = () => {
  const { data,isLoading } = useGetAllProductQuery({});
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Breadcrumbs title={"checkout"} path={""} />
      <CheckoutClient products={products} />;
    </>
  );
};

export default CheckoutPage;
