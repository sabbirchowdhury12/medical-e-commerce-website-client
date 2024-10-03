"use client";

import CustomImage from "@/components/image/customImage";
import FlexBetween from "@/components/layout/flexBetween";
import FlexBox from "@/components/layout/flexbox";
import Button from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { blogData } from "@/utils/data";
import { Calendar, Tag, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { HR } from "flowbite-react";

const Blog = () => {
  return (
    <section className="w-full ">
      <Heading
        title="Latest News Feeds"
        sub_title="Health tips for your better life"
      />

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
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full"
      >
        {blogData.map((blog, ind) => (
          <SwiperSlide key={ind} className="shadow-2xl">
            <div className="w-full">
              <CustomImage
                className="h-full w-full"
                src={blog.photos[0]}
                alt={blog.title}
              />
            </div>
            <div className="p-4 my-4">
              <FlexBox className="justify-start" gap="8">
                <FlexBox gap="2">
                  <User className="text-secondary_1" size={20} />
                  <p className="text-sm font-bold tracking-wider text-paragraph capitalize">
                    By: {blog.author}
                  </p>
                </FlexBox>
                <FlexBox gap="2">
                  <Tag className="text-secondary_1" size={20} />
                  <p className="text-sm font-bold text-paragraph capitalize tracking-wider">
                    Tag: {blog.tag}
                  </p>
                </FlexBox>
              </FlexBox>

              <p className="mt-6 text-xl font-bold font-sans text-primary_2">
                {blog.title}
              </p>

              <HR />

              <FlexBetween>
                <FlexBox gap="2">
                  <Calendar className="text-secondary_1" size={20} />
                  <p className="text-sm font-bold text-paragraph capitalize tracking-wider">
                    {blog.publishedDate}
                  </p>
                </FlexBox>

                <Link href={""}>
                  <Button>Read Blog</Button>
                </Link>
              </FlexBetween>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Blog;
