import React from "react";
import Container from "@/components/layout/container";
import Hero from "./components/hero/hero";
import ProductSection from "./components/categorySection/productSection";
import FreaturedProducts from "./components/freaturedSection/freaturedProducts";

import dynamic from "next/dynamic";
import Blog from "./components/blog/blog";

const TestimonialSlider = dynamic(() => import("./components/testimonial"), {
  ssr: false,
});

const HomePage = () => {
  return (
    <>
      <Container>
        <Hero />
        <ProductSection />
        <FreaturedProducts />
      </Container>
      <TestimonialSlider />
      <Container>
        <Blog />
      </Container>
    </>
  );
};

export default HomePage;
