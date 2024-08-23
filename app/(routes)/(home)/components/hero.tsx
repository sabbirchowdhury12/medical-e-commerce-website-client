"use client";

import FlexBetween from "@/components/layout/flexBetween";
import FlexBox from "@/components/layout/flexbox";
import { BadgeIcon, MenuIcon, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Carousel } from "flowbite-react";
import Logo from "../../../../assets/logo.png";
import Image from "next/image";
import CustomImage from "@/components/image/customImage";
import App from "./example2";
import HeroCarousel from "./carousel";
import HeroCard from "./heroCard";

const categories = [
  {
    title: "Health Care",
    path: "/",
    subCategory: [
      {
        title: "Health Care",
        path: "/",
      },
    ],
  },
  {
    title: "Health Care",
    path: "/",
    subCategory: [
      {
        title: "Health Care",
        path: "/",
      },
    ],
  },
  {
    title: "Health Care",
    path: "/",
    subCategory: [
      {
        title: "Health Care",
        path: "/",
      },
    ],
  },
  {
    title: "Health Care",
    path: "/",
    subCategory: [
      {
        title: "Health Care",
        path: "/",
      },
    ],
  },
];

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCategories = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div className="flex gap-6 my-10 flex-col md:flex-row">
        <div className="category  ">
          <span onClick={toggleCategories}>
            <FlexBetween className="bg-secondary_1 gap-10 text-white p-6 cursor-pointer ">
              <MenuIcon />

              <p className="text-xl font-bold ml-10">Categories</p>
            </FlexBetween>
          </span>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {categories.map((item, ind) => {
                  return (
                    <FlexBox
                      className="border-2 border-t-0 border-border_primary  p-4 text-paragraph text-lg"
                      gap="4"
                      key={ind}
                    >
                      <ShoppingBag size={18} />
                      {item.title}
                    </FlexBox>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="banner  flex-1">
          <HeroCarousel />
        </div>
      </div>

      <HeroCard />
    </div>
  );
};

export default Hero;
