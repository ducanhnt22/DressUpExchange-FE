"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import kda from "../../../../public/cosplay/KDA_Evelyn.jpg";
import rosa from "../../../../public/cosplay/Rosalia.jpg";
import stelle from "../../../../public/cosplay/Stelle.jpg";
import kaisa from "../../../../public/cosplay/kaisa.jpg";
import neon from "../../../../public/cosplay/neon.jpg";
import shield from "../../../../public/cosplay/shield.jpg";
import klk from "../../../../public/cosplay/klk.jpg";
import Image from "next/image";

// const banner = [""];
export default function ImgCarousel() {
  return (
    <div className="h-3/4 w-3/4">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        // className="h-110% w-110%"
      >
        <SwiperSlide>
          <Image src={kda} alt="kda" className="h-full w-full object-fill" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={rosa} alt="rosa" className="h-full w-full object-fill" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={stelle} alt="stelle" className="h-full w-full object-fill" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={kaisa} alt="kaisa" className="h-full w-full object-fill" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={neon} alt="neon" className="h-full w-full object-fill" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={shield} alt="shield" className="h-full w-full object-fill" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={klk} alt="klk" className="h-full w-full object-fill" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
