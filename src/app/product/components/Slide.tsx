"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import banner1 from "../../../../public/banner_1.jpg";
import banner2 from "../../../../public/banner_2.jpg";
import banner3 from "../../../../public/banner_3.jpg";
import banner4 from "../../../../public/banner_4.jpg";
import Image from "next/image";

// const banner = [""];
export default function Slide() {
  return (
    <div className="h-3/5 w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="h-full w-full"
      >
        <SwiperSlide>
          <Image src={banner1} alt="banner" className="h-full w-full object-fill" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner2} alt="banner" className="h-full w-full object-fill" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner3} alt="banner" className="h-full w-full object-fill" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner4} alt="banner" className="h-full w-full object-fill" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
