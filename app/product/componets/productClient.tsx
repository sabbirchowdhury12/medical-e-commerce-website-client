"use client";
import Container from "@/components/layout/container";
import HeroBreadcrumb from "@/components/ui/heroBreadcrumb";
import ProductFlex from "@/components/ui/productFlex";
import ProductGrid from "@/components/ui/productGrid";
import { LayoutGrid, ListOrdered } from "lucide-react";
import React, { useState } from "react";

const products = [
  {
    _id: "01",
    name: "Product 1",
    slug: "product-1",
    photos: [
      "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product-2/11.png",
      "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product-2/11.png",
    ],
    description: "This is the description for Product 1.",
    metaKey: "product1, example",
    company: "Company A",
    discount: 10,
    stockStatus: true,
    status: "active",
    categoryId: "64b5f8e2f2a4b8c1d4e5f6a7",
    categoryName: "Category A",
    variants: [
      { variantName: "Variant 1", variantPrice: 100 },
      { variantName: "Variant 2", variantPrice: 120 },
    ],
    defaultPrice: 110,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "02",
    name: "Product 2",
    slug: "product-2",
    photos: [
      "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product-2/11.png",
      "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product-2/11.png",
    ],
    description: "This is the description for Product 2.",
    metaKey: "product2, example",
    company: "Company B",
    discount: 15,
    stockStatus: false,
    status: "inactive",
    categoryId: "64b5f8e2f2a4b8c1d4e5f6a8",
    categoryName: "Category B",
    variants: [
      { variantName: "Variant 3", variantPrice: 200 },
      { variantName: "Variant 4", variantPrice: 220 },
    ],
    defaultPrice: 210,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const ProductClient = () => {
  const [view, setView] = useState<"flex" | "grid">("grid");
  return (
    <div>
      <HeroBreadcrumb title={"shop"} path={"shop"} />

      <div className="flex items-center space-x-4">
        <ListOrdered
          onClick={() => setView("flex")}
          color={view === "flex" ? "red" : "black"}
          className="cursor-pointer"
        />
        <LayoutGrid
          onClick={() => setView("grid")}
          color={view === "grid" ? "red" : "black"}
          className="cursor-pointer"
        />
      </div>

      <Container>
        {view === "flex" ? (
          <ProductFlex products={products} />
        ) : (
          <ProductGrid products={products} />
        )}
      </Container>
    </div>
  );
};

export default ProductClient;
