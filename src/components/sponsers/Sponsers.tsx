"use client"

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css"
import { useTranslations, useLocale } from "next-intl";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

const Sponsers = () => {
  const t = useTranslations();

  const locale = useLocale();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/sponsor`, {
        headers: {
          "Accept-Language": locale,
        },
      })
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, [locale]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-semibold text-gray-500">{t("Loading")}</p>
      </div>
    );
  }

  let sponsors = data?.data;



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
              {sponsors?.map((sponsor, idx) => (
                <SwiperSlide key={idx}>
                <div className="relative h-[80px] md:h-[100px] lg:h-[140px] xl:h-[170px]">
                  <Image
                    src={sponsor.image}
                    alt="sponsor-image"
                    fill
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* btns */}
          <div className="swiper-buttons-cont">
            <div className="swiper-bnts absolute flex gap-4 justify-center">
              <button className="arrow-left arrow flex-c text-xl dir-rotate">
                <IoIosArrowForward />
              </button>
              <button className="arrow-right arrow flex-c text-xl dir-rotate">
                <IoIosArrowBack />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsers;
