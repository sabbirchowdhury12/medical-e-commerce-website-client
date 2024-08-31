import FlexBetween from "@/components/layout/flexBetween";
import FlexBox from "@/components/layout/flexbox";
import React from "react";

const CartProduct = ({ cartProducts }) => {
  const totalPrice = cartProducts.reduce(
    (total, product) => total + product.defaultPrice * product.quantity,
    0
  );

  const vatPercentage = 0.05; // 5% VAT
  let delivery = 100;
  const vatAmount = totalPrice * vatPercentage;
  const finalTotalPrice = totalPrice + vatAmount + delivery;

  return (
    <div className="flex-1 w-full">
      <p className="h4-styles">Your Produts</p>
      <div className="flex-1 text-sm md:text-lg w-full border border-border_color_7 p-4 ">
        {cartProducts.map((product) => (
          <FlexBetween
            className="w-full border-b border-border_primary p-4"
            key={product._id}
          >
            <FlexBox gap="2" className=" ">
              <h2 className="p-bold ">{product.name}</h2>
              <p className="p-bold ">x</p>
              <h2 className="p-bold ">{product.quantity}</h2>
            </FlexBox>
            <p className="p-styles">
              {product.defaultPrice * product.quantity}
            </p>
          </FlexBetween>
        ))}

        <FlexBetween className="  hover:bg-section_bg_1 border-b border-border_primary p-4">
          <p className="p-bold ">VAT</p>
          <p>{(vatPercentage * 100).toFixed(2)}%</p>
        </FlexBetween>
        <FlexBetween className="hover:bg-section_bg_1  p-4">
          <p className="p-bold ">Delivery</p>
          <p>100</p>
        </FlexBetween>
      </div>
      <FlexBetween className="hover:bg-section_bg_1 bg-section_bg_1 p-2 border border-border_color_7">
        <p className="p-bold my-6 ">Total price </p>
        <p className="font-bold">{finalTotalPrice.toFixed(2)}</p>
      </FlexBetween>
    </div>
  );
};

export default CartProduct;
