"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import CustomImage from "@/components/image/customImage";
import Heading from "@/components/ui/heading";
import Container from "@/components/layout/container";

const testimonials = [
  {
    name: "Jane D.",
    role: "CEO",
    text: "Pagedone is simply the best tool of investment in the market right now.",
    img: "https://images.unsplash.com/photo-1668531282396-96bea4cacab5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Jane D.",
    role: "CEO",
    text: "Pagedone is simply the best tool of investment in the market right now.",
    img: "https://images.unsplash.com/photo-1668531282396-96bea4cacab5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Jane D.",
    role: "CEO",
    text: "Pagedone is simply the best tool of investment in the market right now.",
    img: "https://images.unsplash.com/photo-1668531282396-96bea4cacab5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Jane D.",
    role: "CEO",
    text: "Pagedone is simply the best tool of investment in the market right now.",
    img: "https://images.unsplash.com/photo-1668531282396-96bea4cacab5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  // Additional testimonials here...
];

const TestimonialSlider = () => {
  return (
    <section className=" bg-section_bg_1 py-8">
      <Container>
        <Heading title="Testimonials" />
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white border border-gray-200 rounded-2xl flex items-start justify-between text-center transition-all duration-500 hover:shadow-lg cursor-pointer p-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="h-24 w-24">
                  <CustomImage
                    className="rounded-full w-full h-full object-cover block"
                    src={testimonial.img}
                    alt={testimonial.name}
                  />
                </div>
                <div>
                  <p
                    className="text-sm text-paragraph
                   mb-2"
                  >
                    {testimonial.text}
                  </p>
                  <h5 className=" font-bold text-lg mb-2">
                    {testimonial.name}
                  </h5>
                  <span className="text-sm text-secondary_1 font-bold">
                    {testimonial.role}
                  </span>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default TestimonialSlider;
