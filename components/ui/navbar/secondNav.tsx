"use client";
import React, { useState } from "react";

import { CircleUserRound, PhoneCall, Search, ShoppingCart } from "lucide-react";

import Logo from "@/assets/logo.png";
import Container from "@/components/layout/container";
import FlexBetween from "@/components/layout/flexBetween";
import FlexBox from "@/components/layout/flexbox";
import CustomImage from "@/components/image/customImage";
import SearchForm from "@/components/form/searchForm";

const SecondNav = () => {
  const [activeSearch, setActiveSearch] = useState(false);

  return (
    <Container>
      <FlexBetween className="p-6">
        <FlexBox className="" gap="4">
          <CustomImage src={Logo} alt={""} />
        </FlexBox>
        <FlexBox gap="4" className="text-paragraph hidden md:flex">
          <PhoneCall size={30} />
          <p className="text-sm">
            Phone <br />
            +0123-456-789
          </p>
        </FlexBox>
        <div className="search">
          <span className="hidden md:block">
            <SearchForm />
          </span>
        </div>
        <FlexBox gap="6" className="relative">
          <span className="md:hidden relative">
            <Search onClick={() => setActiveSearch(!activeSearch)} />
            {activeSearch && (
              <span className="absolute  right-5 w-full bg-white shadow-lg rounded-md">
                <SearchForm />
              </span>
            )}
          </span>
          <CircleUserRound size={30} />
          <ShoppingCart size={30} />
        </FlexBox>
      </FlexBetween>
    </Container>
  );
};

export default SecondNav;
