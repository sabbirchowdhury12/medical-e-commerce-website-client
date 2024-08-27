"use client";
import React, { useEffect, useState } from "react";
import CustomImage from "@/components/image/customImage";
import Container from "@/components/layout/container";
import FlexBetween from "@/components/layout/flexBetween";
import FlexBox from "@/components/layout/flexbox";
import HeroBreadcrumb from "@/components/ui/heroBreadcrumb";
import { useAppDispatch } from "@/redux/hook";
import { updateProduct } from "@/redux/slice/counterSlice";

const products = [
  {
    _id: "01",
    name: "Product 1",
    slug: "product-1",
    photos: [
      "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product-2/11.png",
      "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product-2/11.png",
    ],
    description: "This is the description for Product 1.",
    metaKey: "product1, example",
    company: "Company A",
    discount: 10,
    stockStatus: true,
    status: "active",
    categoryId: "64b5f8e2f2a4b8c1d4e5f6a7",
    categoryName: "Category A",
    variants: [
      { variantName: "Variant 1", variantPrice: 100 },
      { variantName: "Variant 2", variantPrice: 120 },
    ],
    defaultPrice: 110,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "02",
    name: "Product 2",
    slug: "product-2",
    photos: [
      "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product-2/11.png",
      "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product-2/11.png",
    ],
    description: "This is the description for Product 2.",
    metaKey: "product2, example",
    company: "Company B",
    discount: 15,
    stockStatus: false,
    status: "inactive",
    categoryId: "64b5f8e2f2a4b8c1d4e5f6a8",
    categoryName: "Category B",
    variants: [
      { variantName: "Variant 3", variantPrice: 200 },
      { variantName: "Variant 4", variantPrice: 220 },
    ],
    defaultPrice: 210,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const CartClient = () => {
  const [cartProducts, setCartProducts] = useState<
    ((typeof products)[0] & { quantity: number })[]
  >([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("Medicine-Cart");
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart);
        const filteredProducts = products
          .filter((product) =>
            parsedCart.some(
              (cartItem: { productId: string }) =>
                cartItem.productId === product._id
            )
          )
          .map((product) => ({
            ...product,
            quantity:
              parsedCart.find(
                (cartItem: any) => cartItem.productId === product._id
              )?.quantity || 1,
          }));
        setCartProducts(filteredProducts);
      }
    }
  }, []);

  const handleQuantityChange = (productId: string, quantity: number) => {
    dispatch(updateProduct({ id: productId, quantity }));
    setCartProducts((prevProducts) =>
      prevProducts.map((product) =>
        product._id === productId ? { ...product, quantity } : product
      )
    );
  };

  return (
    <div>
      <HeroBreadcrumb title={"Cart"} path={"cart"} />
      <Container>
        <FlexBox className="flex-col">
          {cartProducts.map((product) => (
            <FlexBetween className="w-full" key={product._id}>
              <button>x</button>
              <div className="h-24 w-24">
                <CustomImage
                  className="h-full w-full"
                  src={product?.photos[0]}
                  alt=""
                />
              </div>
              <h2>{product.name}</h2>
              <p>Price: {product.defaultPrice}</p>

              <FlexBox>
                <div
                  onClick={() =>
                    handleQuantityChange(
                      product._id,
                      product.quantity > 1 ? product.quantity - 1 : 1
                    )
                  }
                  className="border border-border_color_7 p-6 font-bold text-paragraph text-lg cursor-pointer"
                >
                  -
                </div>
                <div className="border border-border_color_7 p-6 font-bold text-paragraph text-lg">
                  {product.quantity}
                </div>
                <div
                  onClick={() =>
                    handleQuantityChange(product._id, product.quantity + 1)
                  }
                  className="border border-border_color_7 p-6 font-bold text-paragraph text-lg cursor-pointer"
                >
                  +
                </div>
              </FlexBox>
              <p>Total: {product.defaultPrice * product.quantity}</p>
            </FlexBetween>
          ))}
        </FlexBox>
      </Container>
    </div>
  );
};

export default CartClient;
