"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import kda from "../../../../../public/cosplay/KDA_Evelyn.jpg";
import rosa from "../../../../../public/cosplay/Rosalia.jpg";
import stelle from "../../../../../public/cosplay/Stelle.jpg";
import jingliu from "../../../../../public/cosplay/jingliu.jpg";
import kaisa from "../../../../../public/cosplay/kaisa.jpg";
import Image from "next/image";
import Link from "next/link";
import { Start } from "../../components";

type product = {
  name: string;
  price: number;
  productId: number;
  thumbnail: string;
};
export default function ProductCarousel({ name, price, productId, thumbnail }: product) {
    return (
      <div className="h-4/5 w-full">
          <Link href={`${productId}`} className="gap-4">
            <div className={`relative  h-72 max-h-72 w-60 max-w-60 w-full`}>
              <Image src={thumbnail} alt="aaa" fill className="object-cover flex justify-center " priority />
            </div>

            <div className="p-3 bg-slate-100 flex justify-around flex-col">
              <h2 className="text-lg line-clamp-2 mb-2">{name}</h2>
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="items-center">4.4/5</h3>
                  <Start rating={4.4} />
                </div>
                <h3 className="text-right text-sm mr-3 text-orange-400">{price?.toLocaleString()}VND</h3>
              </div>
            </div>
          </Link>
        {/* </SwiperSlide> */}
      {/* </Swiper>  */}
      </div>
    );
  }
  