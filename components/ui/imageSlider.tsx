"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import CustomImage from "../image/customImage";

export default function ImageSlider({ photos }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={
          {
            //   "--swiper-navigation-color": "#fff",
            //   "--swiper-pagination-color": "#fff",
          }
        }
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 shadow mb-4"
      >
        {photos.map((img) => (
          <SwiperSlide key={img}>
            <CustomImage src={img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {photos.map((img) => (
          <SwiperSlide key={img} className="border border-border_color_7">
            <CustomImage src={img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
