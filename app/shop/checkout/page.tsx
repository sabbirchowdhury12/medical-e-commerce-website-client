"use client";
import React from "react";
import CheckoutClient from "./components/checkoutClient";
import Breadcrumbs from "@/components/ui/breadcrumb";
import Loader from "@/components/loding";
import { useGetAllProductQuery } from "@/redux/api/productApi";

const CheckoutPage = () => {
  const { data } = useGetAllProductQuery({});
  if (!data?.data) {
    return <Loader />;
  }
  return (
    <>
      <Breadcrumbs title={"checkout"} path={""} />
      <CheckoutClient products={data?.data} />;
    </>
  );
};

export default CheckoutPage;
