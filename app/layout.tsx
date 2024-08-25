import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "@/provider/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Autox",
  description: "A Comprehensive Mobility Solutions Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${inter.className}`}>
          {children}
          <Toaster />
        </body>
      </html>
    </Providers>
  );
}
