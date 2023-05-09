"use client";
import { createContext } from "react";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

function SwiperHero() {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-max max-w-screen-2xl w-full h-full"
    >
      <SwiperSlide className="">
        <Image
          className=""
          height={700}
          width={400}
          alt="slide1"
          src="/slide1.jpg"
        />
      </SwiperSlide>
      <SwiperSlide className="">
        <Image
          className=""
          height={700}
          width={400}
          alt="slide2"
          src="/slide2.jpg"
        />
      </SwiperSlide>{" "}
      <SwiperSlide className="">
        <Image
          className=""
          height={700}
          width={400}
          alt="slide3"
          src="/slide3.jpg"
        />
      </SwiperSlide>{" "}
      <SwiperSlide className="">
        <Image
          className=""
          height={700}
          width={400}
          alt="slide4"
          src="/slide4.jpg"
        />
      </SwiperSlide>{" "}
      <SwiperSlide className="">
        <Image
          className=""
          height={700}
          width={400}
          alt="slide5"
          src="/slide5.jpg"
        />
      </SwiperSlide>{" "}
      <SwiperSlide className="">
        <Image
          className=""
          height={700}
          width={400}
          alt="slide6"
          src="/slide6.jpg"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperHero;
