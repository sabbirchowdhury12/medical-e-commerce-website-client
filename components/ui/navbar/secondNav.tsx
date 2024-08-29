"use client";
import React, { useState } from "react";
import { CircleUserRound, PhoneCall, Search, ShoppingCart } from "lucide-react";
import Logo from "@/assets/logo.png";
import Container from "@/components/layout/container";
import FlexBetween from "@/components/layout/flexBetween";
import FlexBox from "@/components/layout/flexbox";
import CustomImage from "@/components/image/customImage";
import SearchForm from "@/components/form/searchForm";
import Link from "next/link";

const SecondNav = () => {
  const [activeSearch, setActiveSearch] = useState(false);

  return (
    <Container>
      <FlexBetween className="p-6">
        <FlexBox gap="4">
          <CustomImage src={Logo} alt="Logo" />
        </FlexBox>
        <FlexBox gap="4" className="hidden lg:flex text-paragraph ">
          <PhoneCall size={30} />
          <p className="text-sm font-semibold">
            Phone <br />
            +0123-456-789
          </p>
        </FlexBox>
        <div className="relative">
          <span className="hidden md:block">
            <SearchForm />
          </span>
        </div>
        <FlexBox gap="6" className="relative">
          <span className="relative md:hidden">
            <Search
              size={28}
              className="text-[rgba(0,0,0,0.78)] font-bold"
              onClick={() => setActiveSearch((prev) => !prev)}
            />
            {activeSearch && (
              <span className="absolute top-8 right-1/2 w-40 transform translate-x-1/2">
                <SearchForm />
              </span>
            )}
          </span>
          <Link href={"/login"}>
            <div className="text-[#000000c8] font-bold">
              <CircleUserRound size={28} />
            </div>
          </Link>
          <Link href={"/shop/cart"}>
            <div className="text-[#000000c8] font-bold relative">
              <ShoppingCart size={30} />
              <span className="absolute -top-2 bg-secondary_1 rounded-full p-1 text-[10px] -right-2 text-white">
                {" "}
                01
              </span>
            </div>
          </Link>
        </FlexBox>
      </FlexBetween>
    </Container>
  );
};

export default SecondNav;
