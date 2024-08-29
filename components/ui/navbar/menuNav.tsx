/* eslint-disable react/jsx-key */
"use client";
import React, { useState } from "react";
import FlexBox from "../../layout/flexbox";

import FlexBetween from "../../layout/flexBetween";
import { MenuIcon, User } from "lucide-react";
import Container from "../../layout/container";

import MenuItems from "./menu";
import SideNavbar from "./sideNavbar";
import Drawer from "./drawer";

const MenuNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <FlexBox
        className="bg-secondary_1 p-6 text-sm font-bold text-section_bg_1 uppercase hidden md:flex "
        gap="16"
      >
        <MenuItems />
      </FlexBox>

      <Container>
        <FlexBetween className="border  border-border_primary p-3 rounded-sm md:hidden">
          <span className="text-paragraph text-sm font-bold">MENU</span>
          <span>
            <span onClick={() => setIsOpen(true)}>
              <MenuIcon />
            </span>
          </span>
        </FlexBetween>
      </Container>

      <div>
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
};

export default MenuNav;
