import React from "react";
import CheckoutClient from "./components/checkoutClient";
import HeroBreadcrumb from "@/components/ui/heroBreadcrumb";

const CheckoutPage = () => {
  return (
    <>
      <HeroBreadcrumb title={"checkout"} path={""} />
      <CheckoutClient />;
    </>
  );
};

export default CheckoutPage;
