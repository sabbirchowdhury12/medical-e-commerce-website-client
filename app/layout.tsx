import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "@/provider/provider";

export const metadata: Metadata = {
  title: "Pharma Plus",
  description: "Buy yout neccesary Medicine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body>
          {children}
          <Toaster />
        </body>
      </html>
    </Providers>
  );
}
