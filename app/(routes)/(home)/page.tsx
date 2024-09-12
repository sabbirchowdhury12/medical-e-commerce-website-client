import React from "react";
import Hero from "./components/hero";
import Container from "@/components/layout/container";
import ProductSection from "./components/productSection";

const HomePage = () => {
  return (
    <>
      <Container>
        <Hero />
        <ProductSection />
      </Container>
    </>
  );
};

export default HomePage;
