import React from "react";
import ProductClient from "./componets/productClient";
import Breadcrumbs from "@/components/ui/breadcrumb";

const ProductPage = () => {
  return (
    <>
      <Breadcrumbs title={"shop"} path={"shop"} />
      <ProductClient />;
    </>
  );
};

export default ProductPage;
