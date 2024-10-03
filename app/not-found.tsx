/* eslint-disable @next/next/no-img-element */
import Button from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image"; // Import next/image for optimized image loading
import logo from "../assets/logo2.svg";

const Notfound = () => {
  return (
    <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse h-screen lg:flex-row md:gap-28 gap-16">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div className="relative">
          <div className="absolute">
            <div>
              <h1 className="my-2 text-gray-800 font-bold text-2xl">
                Looks like you’ve found the doorway to the great nothing
              </h1>
              <p className="my-2 text-gray-800">
                Sorry about that! Please visit our homepage to get where you
                need to go.
              </p>
              <Link href="/">
                <Button>Home Page</Button>
              </Link>
            </div>
          </div>
          <div>
            {/* Use alt text for better accessibility */}
            <img
              src="https://i.ibb.co/G9DC8S0/404-2.png"
              alt="404 error illustration"
            />
          </div>
        </div>
      </div>

      {/* Use next/image for the imported logo */}
      <Image className="h-40 w-40" src={logo} alt="Site logo" />
    </div>
  );
};

export default Notfound;
