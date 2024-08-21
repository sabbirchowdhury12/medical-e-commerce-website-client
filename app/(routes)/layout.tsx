import Navbar from "@/components/ui/navbar/navbar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      <Navbar />
      {children}
      <p>Footer</p>
    </main>
  );
};

export default MainLayout;
