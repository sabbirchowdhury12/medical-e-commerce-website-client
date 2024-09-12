"use client";
import React, { useEffect, useState } from "react";
import {
  CircleUserRound,
  LogOut,
  PhoneCall,
  Search,
  Settings,
  ShoppingCart,
  Store,
} from "lucide-react";
import Logo from "@/assets/logo.png";
import Container from "@/components/layout/container";
import FlexBetween from "@/components/layout/flexBetween";
import FlexBox from "@/components/layout/flexbox";
import CustomImage from "@/components/image/customImage";
import SearchForm from "@/components/form/searchForm";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { logout } from "@/redux/slice/authSlice";
import { useRouter } from "next/navigation";
import { initializeCart } from "@/redux/slice/counterSlice";

// Define User type
type User = {
  name: string;
  [key: string]: any; // For any additional properties
};

const SecondNav: React.FC = () => {
  const [activeSearch, setActiveSearch] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.cart.products);
  const [isMounted, setIsMounted] = useState(false);

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

  useEffect(() => {
    // Ensure this runs only on the client
    const storedCart = localStorage.getItem("Medicine-Cart");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      dispatch(initializeCart(parsedCart));
    }
    setIsMounted(true);
  }, [dispatch]);

  if (!isMounted) {
    return null;
  }

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  const renderCartIcon = () => (
    <Link href="/shop/cart">
      <div className="text-[#000000c8] font-bold relative">
        <ShoppingCart size={30} />
        <span className="absolute -top-2 bg-secondary_1 h-6 w-6  text-center items-center justify-center flex rounded-full p-1 text-[10px] -right-2 text-white">
          {products.length}
        </span>
      </div>
    </Link>
  );

  // Render User Section (Logged in)
  const renderUserSection = () => (
    <FlexBox className="group relative" gap="2">
      <span className="font-bold font-sans capitalize">{user?.name}</span>
      <div className="text-[#000000c8] font-bold">
        <CircleUserRound size={28} />
      </div>
      <div className="opacity-0 group-hover:opacity-100 flex absolute top-9 shadow-lg border border-border_color_7 z-10 w-40 gap-2  bg-white flex-col transition-opacity duration-300  text-sm">
        <FlexBox
          className="hover:bg-section_bg_1 text-paragraph hover:text-secondary_1 font-bold p-4"
          gap="2"
        >
          <Store />
          <button>Profile</button>
        </FlexBox>
        <FlexBox
          className="hover:bg-section_bg_1 text-paragraph hover:text-secondary_1 font-bold p-4"
          gap="2"
        >
          <Settings />
          <button>Setting</button>
        </FlexBox>
        <div onClick={handleLogout}>
          <FlexBox
            className="hover:bg-section_bg_1 text-paragraph hover:text-secondary_1 font-bold p-4"
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
    <Container>
      <FlexBetween className="p-6">
        {/* Logo */}
        <FlexBox gap="4">
          <CustomImage src={Logo} alt="Logo" />
        </FlexBox>

        {/* Contact Info */}
        <FlexBox gap="4" className="hidden lg:flex text-paragraph">
          <PhoneCall size={30} />
          <p className="text-sm font-semibold">
            Phone <br />
            +0123-456-789
          </p>
        </FlexBox>

        {/* Search Form */}
        <div className="relative">
          <span className="hidden md:block">
            <SearchForm />
          </span>
        </div>

        {/* User Actions */}
        <FlexBox gap="6" className="relative">
          {/* Mobile Search Icon */}
          <span className="relative md:hidden">
            <Search
              size={28}
              className="text-[rgba(0,0,0,0.78)] font-bold"
              onClick={() => setActiveSearch((prev) => !prev)}
            />
            {activeSearch && (
              <span className="absolute top-8 right-1/2 w-40 transform translate-x-1/2">
                <SearchForm />
              </span>
            )}
          </span>

          {/* User Profile Section */}
          {user ? (
            renderUserSection()
          ) : (
            <Link href="/login">
              <div className="text-[#000000c8] font-bold">
                <CircleUserRound size={28} />
              </div>
            </Link>
          )}

          {/* Cart Icon */}
          {renderCartIcon()}
        </FlexBox>
      </FlexBetween>
    </Container>
  );
};

export default SecondNav;
