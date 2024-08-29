import React from "react";
import { motion } from "framer-motion";
import { X, Search, User, ShoppingBag } from "lucide-react";
import CustomImage from "../../image/customImage";
import Logo from "../../../assets/logo.png";
import { menu } from "@/utils/data";
import CustomAccordion from "../customAccordion";
import FlexBetween from "@/components/layout/flexBetween";
import SearchForm from "@/components/form/searchForm";
import { HR } from "flowbite-react";

const profileMenu = [
  {
    title: "My Account",
    path: "/login",
    icon: <User size={18} color="#5C727D" />,
  },
  {
    title: "Your Cart",
    path: "/cart",
    icon: <ShoppingBag size={18} color="#5C727D" />,
  },
];

const Sidebar = ({ setIsOpen }: any) => {
  return (
    <motion.div
      initial={{ x: "100%" }} // Start off-screen
      animate={{ x: 0 }} // Slide in
      exit={{ x: "100%" }} // Slide out
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed inset-y-0 right-0 w-full sm:w-3/4 md:hidden bg-white shadow-lg z-50 p-6"
    >
      <FlexBetween className="my-20">
        <CustomImage src={Logo} alt="Logo" className="h-10  w-32" />
        <button
          onClick={() => setIsOpen(false)}
          className="text-xl focus:outline-none"
        >
          <X />
        </button>
      </FlexBetween>

      <div className="relative w-full mb-6">
        <SearchForm />
      </div>

      <HR />

      <CustomAccordion />

      <div className="mt-6">
        {profileMenu.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 py-2.5 hover:bg-gray-100 rounded-lg cursor-pointer"
          >
            <span className="p-2.5 bg-gray-200 rounded-full">{item.icon}</span>
            <span className="font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Sidebar;
