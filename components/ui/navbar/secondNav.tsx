"use client";
import React, { useState } from "react";
import {
  CircleUserRound,
  LogOut,
  PhoneCall,
  Search,
  Settings,
  ShoppingCart,
  Store,
  User,
} from "lucide-react";
import Logo from "@/assets/logo.png";
import Container from "@/components/layout/container";
import FlexBetween from "@/components/layout/flexBetween";
import FlexBox from "@/components/layout/flexbox";
import CustomImage from "@/components/image/customImage";
import SearchForm from "@/components/form/searchForm";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useAppDispatch } from "@/redux/hook";
import { logout } from "@/redux/slice/authSlice";
import { useRouter } from "next/navigation";

const SecondNav = () => {
  const [activeSearch, setActiveSearch] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    // Optionally, you can redirect the user to the login page or home page
    router.push("/login");
  };
  return (
    <Container>
      <FlexBetween className="p-6">
        <FlexBox gap="4">
          <CustomImage src={Logo} alt="Logo" />
        </FlexBox>
        <FlexBox gap="4" className="hidden lg:flex text-paragraph ">
          <PhoneCall size={30} />
          <p className="text-sm font-semibold">
            Phone <br />
            +0123-456-789
          </p>
        </FlexBox>
        <div className="relative">
          <span className="hidden md:block">
            <SearchForm />
          </span>
        </div>
        <FlexBox gap="6" className="relative">
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
          {user && user?.id ? (
            <>
              {
                <>
                  <FlexBox className="group relative " gap="2">
                    <span className="font-bold font-sans capitalize">
                      {user.role}
                    </span>
                    <div className=" text-[#000000c8] font-bold">
                      <CircleUserRound size={28} />
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 flex absolute top-9  shadow-lg border border-border_color_7 z-10 w-40  gap-4 bg-white flex-col transition-opacity duration-300">
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
                  <div></div>
                </>
              }
            </>
          ) : (
            <Link href={"/login"}>
              <div className="text-[#000000c8] font-bold">
                <CircleUserRound size={28} />
              </div>
            </Link>
          )}
          <Link href={"/shop/cart"}>
            <div className="text-[#000000c8] font-bold relative">
              <ShoppingCart size={30} />
              <span className="absolute -top-2 bg-secondary_1 rounded-full p-1 text-[10px] -right-2 text-white">
                {" "}
                01
              </span>
            </div>
          </Link>
        </FlexBox>
      </FlexBetween>
    </Container>
  );
};

export default SecondNav;
