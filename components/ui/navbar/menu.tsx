import { menu } from "@/utils/data";
import { Dropdown } from "flowbite-react";
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
                  <Dropdown.Item key={subInd}>{subItem.title}</Dropdown.Item>
                );
              })}
          </Dropdown>
        );
      })}
    </>
  );
};

export default MenuItems;
