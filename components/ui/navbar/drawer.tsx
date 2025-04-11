import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

type DrawerProps = {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
};

const Drawer: React.FC<DrawerProps> = ({ children, isOpen, setIsOpen }) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed inset-y-0 -right-2   w-full md:hidden sm:w-[300px] shadow-lg z-50 bg-white`}
    >
      <button
        onClick={() => setIsOpen(false)}
        className="text-xl focus:outline-none absolute top-2 right-2 text-white"
      >
        <X />
      </button>
      {children}
    </motion.div>
  );
};

export default Drawer;
