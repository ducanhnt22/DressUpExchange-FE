"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import gi from "../../../../public/cosplay/gi-big.jpg";
import hi from "../../../../public/cosplay/HI3-big.png";
import lol from "../../../../public/cosplay/m4-big.jpg";
import gam from "../../../../public/cosplay/gam-big.jpg";
import Image from "next/image";
import Link from "next/link";


export default function Blog() {
    return(
        <div className="h-full w-full">
            <Swiper
                centeredSlides={true}
                grabCursor = {true}
                spaceBetween={30}
                centeredSlidesBounds = {true}
                slidesPerView={3}
                coverflowEffect={
                    {
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }
                }
                modules={[Autoplay, Pagination, EffectCoverflow, Navigation]}
                className="h-4/5 w-4/5"
            >
                <SwiperSlide>
                    <div className="h-[200px] w-full object-cover">
                        <Image src={gi} alt="gi" className="h-full w-full object-cover"/>
                    </div>
                    <div className="">
                        <div className="text-right text-sm text-zinc-400">
                            October 11, 2023
                        </div>
                        <div className="text-center">
                            <div className="font-bold text-xl">
                                Genshin Impact Event
                            </div>
                            <div className="text-sm mb-2">
                                Chào mừng version 4.2 - Offline cosplay xịn nhất trong tháng Mười này!
                            </div>
                            <Link className="font-bold hover:text-orange-400" href = "/">
                                READ MORE
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[200px] w-full object-cover">
                        <Image src={hi} alt="hi" className="h-full w-full object-cover"/>
                    </div>
                    <div className="">
                        <div className="text-right text-sm text-zinc-400">
                            October 10, 2023
                        </div>
                        <div className="text-center">
                            <div className="font-bold text-xl">
                                SCHEDULE DRESS UP EXCHANGE
                            </div>
                            <div className="text-sm mb-2">
                                Collab Honkai Impact 3rd - Những event sắp tới của Dress Up Exchange
                            </div>
                            <Link className="font-bold hover:text-orange-400" href = "/">
                                READ MORE
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[200px] w-full object-cover">
                        <Image src={gam} alt="lol" className="h-full w-full object-cover"/>
                    </div>
                    <div className="">
                        <div className="text-right text-sm text-zinc-400">
                            October 10, 2023
                        </div>
                        <div className="text-center">
                            <div className="font-bold text-xl">
                                GAM 0 - 2 LLL
                            </div>
                            <div className="text-sm mb-2">
                                GAM đã nhận thất bại đầu tiên tại CKTG 2023. GAM sẽ đụng độ R7 tại nhánh thua.
                            </div>
                            <Link className="font-bold hover:text-orange-400" href = "https://www.facebook.com/GAMeSportsVN/posts/pfbid0jkJd6WPaKpCQy3ZoRJpwmBH6JfGW61T8ghvpGudBRaNECZXkuArmK1qsw9oembE4l">
                                READ MORE
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[200px] w-full object-cover">
                        <Image src={lol} alt="lol" className="h-full w-full object-cover"/>
                    </div>
                    <div className="">
                        <div className="text-right text-sm text-zinc-400">
                            October 4, 2023
                        </div>
                        <div className="text-center">
                            <div className="font-bold text-xl">
                                OPENING DRESS UP EXCHANGE
                            </div>
                            <div className="text-sm mb-2">
                                Săn sale sập sàn - Dress Up Exchange khai trương ngay hôm nay!
                            </div>
                            <Link className="font-bold hover:text-orange-400" href = "/">
                                READ MORE
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}