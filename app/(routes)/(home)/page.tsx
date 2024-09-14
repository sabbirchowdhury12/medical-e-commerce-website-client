import React from "react";
import Container from "@/components/layout/container";
import Hero from "./components/hero/hero";
import ProductSection from "./components/categorySection/productSection";
import FreaturedProducts from "./components/freaturedSection/freaturedProducts";

const HomePage = () => {
  return (
    <>
      <Container>
        <Hero />
        <ProductSection />
        <FreaturedProducts />
      </Container>
    </>
  );
};

export default HomePage;
