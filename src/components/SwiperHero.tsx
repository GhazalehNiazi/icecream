"use client";
import { createContext } from "react";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

function SwiperHero() {
  return (
    <div className="lg:w-9/12 ">
      <Swiper
        cssMode={true}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Mousewheel, Autoplay]}
        className="lg:max-h-[19rem] max-w-full m-auto"
      >
        <SwiperSlide className="">
          <Image
            className=""
            height={900}
            width={900}
            alt="slide1"
            src="/slide1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            className=""
            height={900}
            width={900}
            alt="slide2"
            src="/slide2.jpg"
          />
        </SwiperSlide>{" "}
        <SwiperSlide className="">
          <Image
            className=""
            height={900}
            width={900}
            alt="slide3"
            src="/slide3.jpg"
          />
        </SwiperSlide>{" "}
        <SwiperSlide className="">
          <Image
            className=""
            height={900}
            width={900}
            alt="slide4"
            src="/slide4.jpg"
          />
        </SwiperSlide>{" "}
        <SwiperSlide className="">
          <Image
            className=""
            height={900}
            width={900}
            alt="slide5"
            src="/slide5.jpg"
          />
        </SwiperSlide>{" "}
        <SwiperSlide className="">
          <Image
            className=""
            height={900}
            width={900}
            alt="slide6"
            src="/slide6.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperHero;
