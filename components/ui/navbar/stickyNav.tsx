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

const StickyNav = () => {
  return (
    <div className="bg-secondary_1 p-4 hidden md:block fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out">
      <Container>
        <FlexBetween>
          <FlexBox>
            <CustomImage src={Logo} alt="" />
          </FlexBox>
          <FlexBox gap="12" className="text-white font-bold text-sm">
            <MenuItems />
          </FlexBox>
        </FlexBetween>
      </Container>
    </div>
  );
};

export default StickyNav;
