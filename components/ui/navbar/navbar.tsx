"use client";
import { useState, useEffect } from "react";
import MenuNav from "./menuNav";
import SecondNav from "./secondNav";
import StickyNav from "./stickyNav";
import TopNav from "./topNav";

const Navbar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isSticky && <StickyNav />}
      <TopNav />
      <SecondNav />
      <MenuNav />
    </>
  );
};

export default Navbar;
