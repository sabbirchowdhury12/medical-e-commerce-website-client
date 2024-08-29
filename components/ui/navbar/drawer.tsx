import React, { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "./sideNavbar";
// Make sure to update the import path

const Drawer = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed inset-y-0 right-0 w-full md:hidden sm:w-3/4 bg-white shadow-lg z-50 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <Sidebar setIsOpen={setIsOpen} />
    </motion.div>
  );
};

export default Drawer;
