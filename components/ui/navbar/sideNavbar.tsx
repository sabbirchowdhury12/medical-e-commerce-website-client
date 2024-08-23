/* eslint-disable react/jsx-key */
"use client";
import React from "react";
import FlexBox from "../../layout/flexbox";
import { Accordion, HR } from "flowbite-react";

import FlexBetween from "../../layout/flexBetween";
import { Search, User } from "lucide-react";

import CustomImage from "../../image/customImage";
import Logo from "../../../assets/logo.png";
import { menu } from "@/utils/data";

const profileMenu = [
  {
    title: "My Account",
    path: "/",
    icon: <User size={18} color="#5C727D" />,
  },
  {
    title: "My Account",
    path: "/",
    icon: <User size={18} color="#5C727D" />,
  },
  {
    title: "My Account",
    path: "/",
    icon: <User size={18} color="#5C727D" />,
  },
];

const SideNavbar = ({ setIsOpen }: any) => {
  return (
    <>
      {" "}
      <FlexBetween className=" w-full">
        <FlexBox className="" gap="4">
          <CustomImage src={Logo} alt={""} />
        </FlexBox>
        <button onClick={() => setIsOpen(false)} className="font-bold text-lg">
          X
        </button>
      </FlexBetween>
      <HR />
      <div className="relative w-full border border-border_color_9">
        <input
          type="search"
          id="search-dropdown"
          className="block p-3 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-full focus:ring-0 focus:outline-none border-0 "
          placeholder="Search ..."
          required
        />
        <button
          type="submit"
          className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white   bg-secondary_1"
        >
          <Search />

          <span className="sr-only">Search</span>
        </button>
      </div>
      <HR />
      <Accordion collapseAll className="border-none focus:border-none">
        {menu.map((item) => {
          return (
            <Accordion.Panel key={item.title} className="border-none">
              <Accordion.Title>{item.title}</Accordion.Title>
              <>
                {item.submenu.map((subItem) => {
                  return (
                    <Accordion.Content key={subItem.title}>
                      {subItem.title}
                    </Accordion.Content>
                  );
                })}
              </>
            </Accordion.Panel>
          );
        })}
      </Accordion>
      <HR />
      <div className=" items-start justify-start">
        {profileMenu.map((item) => {
          return (
            <div className="flex gap-4 py-4 items-center ">
              <span className="border border-border_color_7 p-3">
                {item.icon}
              </span>
              <span className="text-paragraph font-bold">{item.title}</span>
            </div>
          );
        })}
      </div>
      <HR />
    </>
  );
};

export default SideNavbar;
