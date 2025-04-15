"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

interface ImageSliderProps {
  photos: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ photos }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <>
      {/* Main Image Slider */}
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="shadow mb-4 w-full h-full"
      >
        {photos.map((img, index) => (
          <SwiperSlide key={index} className="min-h-[300px]">
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-auto object-cover max-w-[200px] mx-auto h-[400px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Slider */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={photos.length}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mt-4 w-[100%] h-[20%] box-border py-2"
      >
        {photos.map((img, index) => (
          <SwiperSlide
            key={index}
            className="w-[25%] h-full border border-gray-300 opacity-40 hover:opacity-100 transition-opacity duration-200"
          >
            <img
              src={img}
              alt={`Thumbnail ${index}`}
              className="w-full h-full object-cover max-w-[100px] mx-auto h-[150px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ImageSlider;
