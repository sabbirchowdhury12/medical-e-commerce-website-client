import React from "react";
import CartClient from "./components/cartClient";
import Breadcrumbs from "@/components/ui/breadcrumb";

const CartPage = () => {
  return (
    <>
      <Breadcrumbs title={"Cart"} path={"cart"} />
      <CartClient />;
    </>
  );
};

export default CartPage;
