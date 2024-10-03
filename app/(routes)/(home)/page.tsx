import React from "react";
import Container from "@/components/layout/container";
import Hero from "./components/hero/hero";
import ProductSection from "./components/categorySection/productSection";
import FreaturedProducts from "./components/freaturedSection/freaturedProducts";
import dynamic from "next/dynamic";
import Blog from "./components/blog/blog";
import Trust from "./components/trust/trust";
import Offer from "./components/offer/offer";

const TestimonialSlider = dynamic(() => import("./components/testimonial"), {
  ssr: false,
});

const HomePage = () => {
  return (
    <>
      <Container>
        <Hero />
        <ProductSection />
      </Container>
      <Offer />

      <Container>
        <FreaturedProducts />
      </Container>
      <Trust />

      <Container>
        <Blog />
      </Container>

      <TestimonialSlider />
    </>
  );
};

export default HomePage;
