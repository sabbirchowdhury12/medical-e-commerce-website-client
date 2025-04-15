import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const CustomAccordion = ({ data }: any) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mt-5">
      {data?.map((item: any, index: number) => (
        <div key={index}>
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center w-full py-5 font-semibold hover:bg-gray-100 rounded-lg px-2.5"
          >
            <span className="text-sm">{item.title}</span>
            {item.submenu ? (
              activeIndex === index ? (
                <Minus size={14} />
              ) : (
                <Plus size={14} />
              )
            ) : null}
          </button>
          <AnimatePresence initial={false}>
            {item.submenu && activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden pl-4"
              >
                {item.submenu.map((subItem: any, subIndex: any) => (
                  <Link key={subIndex} href={"/shop"}>
                    <div className="py-4 text-sm pl-4 border-b border-border_color_7 hover:bg-gray-100 ">
                      {subItem.title}
                    </div>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default CustomAccordion;
