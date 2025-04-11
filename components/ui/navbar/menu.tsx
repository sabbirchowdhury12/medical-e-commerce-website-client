import { menu } from "@/utils/data";
import { Dropdown } from "flowbite-react";
import Link from "next/link";
import React from "react";

const MenuItems = () => {
  return (
    <>
      {menu.map((item, ind) => {
        return (
          <Link key={ind} href={item.path}>
            <p className="uppercase">
              {item.title}

              {/* {item.submenu ? "+" : ""} */}
            </p>
            {/* {item.submenu &&
              item.submenu.map((subItem, subInd) => {
                return (
                  <Link key={subInd} href={subItem.path}>
                    <Dropdown.Item>{subItem.title}</Dropdown.Item>
                  </Link>
                );
              })} */}
          </Link>
        );
      })}
    </>
  );
};

export default MenuItems;
