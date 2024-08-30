import CustomImage from "@/components/image/customImage";
import Button from "@/components/ui/button";
import { carouselItems } from "@/utils/data";
import { Carousel } from "flowbite-react";
import { motion } from "framer-motion";
import React, { useState } from "react";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="h-[600px] bg-gray-300 ">
      <Carousel slide={false} onSlideChange={handleSlideChange}>
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className="relative flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
          >
            <CustomImage
              src={item.src}
              alt={item.alt}
              className="absolute inset-0 w-full h-full object-cover block"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center text-primary_1">
              {currentSlide === index && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center text-white p-4"
                >
                  <h2 className="text-sm md:text-lg text-secondary_1 font-bold">
                    {item.title}
                  </h2>
                  <p
                    style={{ color: "#071c1f" }}
                    className="text-lg md:text-4xl  font-bold  my-4"
                  >
                    {item.subtitle}
                  </p>
                  <div className=" flex justify-center">
                    <Button> Shop Now</Button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
