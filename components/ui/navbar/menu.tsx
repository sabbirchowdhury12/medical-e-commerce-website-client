"use client";

import { menu } from "@/utils/data";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const MenuItems = () => {
  const pathname = usePathname();

  return (
    <>
      {menu.map((item, ind) => {
        const isActive = pathname === item.path;

        return (
          <Link key={ind} href={item.path}>
            <p
              className={`uppercase px-4 py-2 transition-colors duration-300 ${
                isActive ? "text-[#393053] font-semibold" : ""
              }`}
            >
              {item.title}
            </p>
          </Link>
        );
      })}
    </>
  );
};

export default MenuItems;
