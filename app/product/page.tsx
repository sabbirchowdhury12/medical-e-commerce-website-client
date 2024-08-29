import React from "react";
import ProductClient from "./componets/productClient";
import HeroBreadcrumb from "@/components/ui/heroBreadcrumb";

const ProductPage = () => {
  return (
    <>
      <HeroBreadcrumb title={"shop"} path={"shop"} />
      <ProductClient />;
    </>
  );
};

export default ProductPage;
