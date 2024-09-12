import { menu } from "@/utils/data";
import { Dropdown } from "flowbite-react";
import Link from "next/link";
import React from "react";

const MenuItems = () => {
  return (
    <>
      {menu.map((item, ind) => {
        return (
          <Dropdown
            key={ind}
            arrowIcon={false}
            inline
            label={
              <p className="uppercase">
                {item.title} {item.submenu ? "+" : ""}
              </p>
            }
          >
            {item.submenu &&
              item.submenu.map((subItem, subInd) => {
                return (
                  <Link key={subInd} href={subItem.path}>
                    <Dropdown.Item>{subItem.title}</Dropdown.Item>
                  </Link>
                );
              })}
          </Dropdown>
        );
      })}
    </>
  );
};

export default MenuItems;
