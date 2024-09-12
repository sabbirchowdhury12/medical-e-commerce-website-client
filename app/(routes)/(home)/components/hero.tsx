"use client";

import FlexBetween from "@/components/layout/flexBetween";
import FlexBox from "@/components/layout/flexbox";
import { MenuIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import HeroCarousel from "./carousel";
import { categories } from "@/utils/data";
import CustomAccordion from "@/components/ui/customAccordion";
import HeroCard from "./heroCard";
import Link from "next/link";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleCategories = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div className="flex gap-6 my-10 flex-col md:flex-row">
        <div className="category">
          <span onClick={toggleCategories}>
            <FlexBetween className="bg-secondary_1  md:gap-10 text-white p-6 cursor-pointer">
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
                <div className="md:hidden">
                  <CustomAccordion data={categories} />
                </div>
                <div className="hidden md:block">
                  {categories.map((item, ind) => {
                    return (
                      <FlexBox
                        className="group relative border-b-2 border-x-2 border-border_primary font-bold p-4 text-black text-lg font-mono bg-section_bg_1"
                        gap="4"
                        key={ind}
                      >
                        {item.title}
                        <motion.div
                          className="sub-category hidden w-72 text-center bg-white text-black absolute left-full top-0 group-hover:flex flex-col mt-0 p-4 shadow-lg z-50  group-hover:opacity-100 "
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -10, opacity: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                          {item?.submenu.map((subItem) => (
                            <Link
                              href={subItem.path}
                              className="p-4 text-sm uppercase cursor-pointer hover:bg-section_bg_1"
                              key={subItem.title}
                            >
                              <p className="cursor-pointer">{subItem.title}</p>
                            </Link>
                          ))}
                        </motion.div>
                      </FlexBox>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="banner flex-1">
          <HeroCarousel />
        </div>
      </div>

      <HeroCard />
    </div>
  );
};

export default Hero;
