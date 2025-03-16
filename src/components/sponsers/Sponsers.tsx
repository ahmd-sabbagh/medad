"use client";
import { useTranslations } from "next-intl";
import "./style.css"

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import {
  sponser_1,
  sponser_2,
  sponser_3,
  sponser_4,
  sponser_5,
  sponser_6,
} from "@/assets";

const Sponsers = () => {
  const t = useTranslations();
  const arr = new Array(6).fill("");
  const data = [
    sponser_1,
    sponser_2,
    sponser_3,
    sponser_4,
    sponser_5,
    sponser_6,
    sponser_1,
    sponser_2,
    sponser_3,
    sponser_4,
    sponser_5,
    sponser_6,
  ];
  return (
    <section className="md:py-10 bg-white">
      <div className="bg-white py-4 px-12">
        <div className="relative mt-4 md:mt-5">
          {/* swiper */}
          <div className="swiper-cont mx-auto relative overflow-hidden">
            <Swiper
              slidesPerView={2}
              navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
              pagination={false}
              autoplay={false}
              loop={false}
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={12}
              breakpoints={{
                450: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 5,
                },
                1280: {
                  slidesPerView: 6,
                },
              }}
            >
              {data.map((image, idx) => (
                <SwiperSlide key={idx}>
                  <div className="h-[80px] md:h-[100px] lg:h-[140px] xl:h-[170px] img-fit">
                    <Image src={image} alt="sponser-image" loading="lazy" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* btns */}
          <div className="swiper-buttons-cont">
            <div className="swiper-bnts absolute flex gap-4 justify-center">
              <button className="arrow-right arrow flex-c text-xl dir-rotate">
                <IoIosArrowBack />
              </button>
              <button className="arrow-left arrow flex-c text-xl dir-rotate">
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsers;
