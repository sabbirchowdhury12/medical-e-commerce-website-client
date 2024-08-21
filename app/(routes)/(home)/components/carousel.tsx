import CustomImage from "@/components/image/customImage";
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
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-primary_1">
              {currentSlide === index && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center text-white p-4"
                >
                  <h2
                    style={{ color: "#071c1f" }}
                    className="text-3xl font-bold mb-4 "
                  >
                    {item.title}
                  </h2>
                  <p style={{ color: "#071c1f" }} className="text-lg">
                    {item.subtitle}
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const carouselItems = [
  {
    src: "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/slider/61.jpg",
    alt: "Medicine Image 1",
    title: "Your Health, Our Priority",
    subtitle: "Explore our wide range of medicines",
  },
  {
    src: "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/slider/61.jpg",
    alt: "Medicine Image 2",
    title: "Trusted by Professionals",
    subtitle: "Quality medicines at your doorstep",
  },
  {
    src: "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/slider/61.jpg",
    alt: "Medicine Image 3",
    title: "Affordable Healthcare",
    subtitle: "We care about your well-being",
  },
];

export default HeroCarousel;
