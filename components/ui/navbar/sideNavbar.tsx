import React from "react";
import { motion } from "framer-motion";
import {
  X,
  Search,
  User,
  ShoppingBag,
  User2,
  ShoppingCartIcon,
} from "lucide-react";
import CustomImage from "../../image/customImage";
import Logo from "../../../assets/logo.png";
import { menu } from "@/utils/data";
import CustomAccordion from "../customAccordion";
import FlexBetween from "@/components/layout/flexBetween";
import SearchForm from "@/components/form/searchForm";
import MenuItems from "./menu";
import FlexBox from "@/components/layout/flexbox";
import Button from "../button";
import { usePathname } from "next/navigation";
import Link from "next/link";

const profileMenu = [
  {
    title: "My Account",
    path: "/login",
    icon: <User2 size={18} />,
  },
  {
    title: "Your Cart",
    path: "/cart",
    icon: <ShoppingCartIcon size={18} />,
  },
];

const Sidebar = ({ setIsOpen }: any) => {
  const pathname = usePathname();

  return (
    // <motion.div
    //   initial={{ x: "100%" }} // Start off-screen
    //   animate={{ x: 0 }} // Slide in
    //   exit={{ x: "100%" }} // Slide out
    //   transition={{ type: "spring", stiffness: 300, damping: 30 }}
    //   className="fixed inset-y-0 right-0 w-full sm:w-[300px] md:hidden bg-white shadow-lg z-50 overflow-auto"
    // >
    <>
      <FlexBetween className=" bg-secondary_1 h-32 text-white p-4 border-b">
        <div className="h-10  w-28">
          <CustomImage src={Logo} alt="Logo" className="h-full  w-full" />
        </div>
        {/* <button
          onClick={() => setIsOpen(false)}
          className="text-xl focus:outline-none absolute top-2 right-2"
        >
          <X />
        </button> */}
      </FlexBetween>

      {/* <div className="relative w-full mb-6">
        <SearchForm />
      </div> */}

      {/* <CustomAccordion data={menu} /> */}
      <FlexBox className="my-12  flex-col text-black text-sm font-semibold">
        <>
          {menu.map((item, ind) => {
            const isActive = pathname === item.path;

            return (
              <Link key={ind} href={item.path} className="w-full text-center">
                <p
                  className={`uppercase  py-4 w-full px-4  transition-colors duration-300 ${
                    isActive ? " bg-secondary_1 text-white font-semibold" : ""
                  }`}
                >
                  {item.title}
                </p>
              </Link>
            );
          })}
        </>
      </FlexBox>

      {/* <div className="mt-6">
        {profileMenu.map((item, index) => (
          <Button
            key={index}
            // className="flex text-sm p-2 mt-4 border-none bg-primary_1 border  items-center justify-center gap-4  hover:bg-gray-100 rounded-lg cursor-pointer"
          >
            <span className="">{item.icon}</span>
            <span className="">{item.title}</span>
          </Button>
        ))}
      </div> */}
    </>
  );
};

export default Sidebar;
