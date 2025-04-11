"use client";
import CustomImage from "@/components/image/customImage";
import Container from "@/components/layout/container";
import FlexBetween from "@/components/layout/flexBetween";
import Logo from "@/assets/logo.png";
import React from "react";
import FlexBox from "@/components/layout/flexbox";
import { Dropdown } from "flowbite-react";
import { menu } from "@/utils/data";
import MenuItems from "./menu";
import Link from "next/link";
import { useAppSelector } from "@/redux/hook";
import { ShoppingCart } from "lucide-react";

const logo = {
  text: "Pharma+",
  src: "/images/logo.png",
};

const StickyNav = () => {
  const products = useAppSelector((state) => state.cart.products);

  return (
    <div className="bg-white  shadow-lg text-black py-8 px-4 hidden md:block fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out">
      <Container>
        <FlexBetween>
          <FlexBox>
            {/* <CustomImage src={Logo} alt="" /> */}
            <Link href={"/"}>
              <p className="font-bold text-2xl text-black "> {logo.text}</p>
            </Link>
          </FlexBox>
          <FlexBox gap="12" className="text-black text-sm font-semibold">
            <MenuItems />
          </FlexBox>

          {renderCartIcon(products.length)}
        </FlexBetween>
      </Container>
    </div>
  );
};

const renderCartIcon = (productCount: number) => (
  <Link href="/shop/cart">
    <div className="text-black font-bold relative">
      <ShoppingCart size={30} />
      <span className="absolute -top-2 bg-secondary_1 h-6 w-6 text-center items-center justify-center flex rounded-full text-xs -right-2 text-white font-bold">
        {productCount}
      </span>
    </div>
  </Link>
);

export default StickyNav;
