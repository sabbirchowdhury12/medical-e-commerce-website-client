"use client";
import React, { useEffect, useState } from "react";
import {
  CircleUserRound,
  LogOut,
  MenuIcon,
  PhoneCall,
  Settings,
  ShoppingCart,
  Store,
} from "lucide-react";
import Container from "@/components/layout/container";
import FlexBetween from "@/components/layout/flexBetween";
import FlexBox from "@/components/layout/flexbox";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { logout } from "@/redux/slice/authSlice";
import { useRouter } from "next/navigation";
import { initializeCart } from "@/redux/slice/cartSlice";
import MenuItems from "./menu";
import { text } from "stream/consumers";
import Drawer from "./drawer";
import Sidebar from "./sideNavbar";
import CartIcon from "../cart-icon";

type User = {
  name: string;
  [key: string]: any;
};

const SecondNavData = {
  logo: {
    text: "Pharma+",
    src: "/images/logo.png",
  },
  phone: {
    text: "Phone",
    number: "+0123-456-789",
    icon: <PhoneCall size={30} />,
  },
};

const { logo, phone } = SecondNavData;

const SecondNav: React.FC = () => {
  // const [activeSearch, setActiveSearch] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      }
    }
  }, []);

  // useEffect(() => {
  //   const storedCart = localStorage.getItem("Medicine-Cart");
  //   if (storedCart) {
  //     const parsedCart = JSON.parse(storedCart);
  //     dispatch(initializeCart(parsedCart));
  //   }
  //   setIsMounted(true);
  // }, [dispatch]);

  // if (!isMounted) {
  //   return null;
  // }

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  // Render User Section (Logged in)
  const renderUserSection = () => (
    <FlexBox className="group relative" gap="2">
      <span className="font-bold font-sans capitalize">{user?.name}</span>
      <div className="text-white font-bold">
        <CircleUserRound size={28} />
      </div>
      <div className="opacity-0 group-hover:opacity-100 flex absolute top-9 shadow-lg border border-border_color_7 z-10 w-40 gap-2  bg-white flex-col transition-opacity duration-300  text-sm">
        <FlexBox
          className="hover:bg-section_bg_1 text-paragraph hover: font-bold p-4"
          gap="2"
        >
          <Store />
          <button>Profile</button>
        </FlexBox>
        <FlexBox
          className="hover:bg-section_bg_1 text-paragraph hover: font-bold p-4"
          gap="2"
        >
          <Settings />
          <button>Setting</button>
        </FlexBox>
        <div onClick={handleLogout}>
          <FlexBox
            className="hover:bg-section_bg_1 text-paragraph hover: font-bold p-4"
            gap="2"
          >
            <LogOut />
            <button>Logout</button>
          </FlexBox>
        </div>
      </div>
    </FlexBox>
  );

  // Render Cart Icon

  return (
    <nav className="bg-secondary_1 ">
      <Container>
        <FlexBetween className="p-6 text-white">
          <Link href={"/"}>
            <p className="font-bold text-2xl "> {logo.text}</p>
          </Link>

          {/* Contact Info */}
          <FlexBox gap="4" className="hidden lg:flex text-white">
            {phone.icon}
            <p className="text-sm font-semibold">
              {phone.text} <br />
              {phone.number}
            </p>
          </FlexBox>

          <FlexBox
            className=" p-6 text-sm font-bold  uppercase hidden md:flex "
            gap="8"
          >
            <MenuItems />
          </FlexBox>

          <FlexBox gap="6" className="relative">
            {/* User Profile Section */}
            {user ? (
              renderUserSection()
            ) : (
              <Link href="/login">
                <div className="text-white font-bold">
                  <CircleUserRound size={28} />
                </div>
              </Link>
            )}

            {/* Cart Icon */}
            <CartIcon />

            {/* {renderCartIcon(products.length)} */}
            <span className="md:hidden" onClick={() => setIsOpen(true)}>
              {" "}
              <MenuIcon />
            </span>
          </FlexBox>
        </FlexBetween>
      </Container>

      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <Sidebar />
      </Drawer>
    </nav>
  );
};

// export const renderCartIcon = (productCount: number) => (
//   <Link href="/shop/cart">
//     <div className="text-white font-bold relative">
//       <ShoppingCart size={30} />
//       <span className="absolute -top-2 bg-white h-6 w-6 text-center items-center justify-center flex rounded-full text-xs -right-2 text-secondary_1 font-bold">
//         {productCount}
//       </span>
//     </div>
//   </Link>
// );
export default SecondNav;
