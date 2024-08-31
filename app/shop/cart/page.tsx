import React from "react";
import CartClient from "./components/cartClient";
import Breadcrumbs from "@/components/ui/breadcrumb";
import { CartTable } from "./components/cartTable";

const CartPage = () => {
  return (
    <>
      <Breadcrumbs title={"Cart"} path={"cart"} />
      <CartClient />;
    </>
  );
};

export default CartPage;
