import Footers from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar/navbar";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      <Navbar />
      {children}
    </main>
  );
};

export default AuthLayout;
