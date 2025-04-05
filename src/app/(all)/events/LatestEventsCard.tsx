"use client"

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { BiHeart, BiSolidHeart } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { calculateTimeDifference, formatHijriDate } from "@/utils/dateUtils";

// Import Swiper styles and modules
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./style.css";

const LatestEventsCard = () => {
  interface Event {
    id: number;
    title: string;
    description: string;  
    image: string;
    date: string;
    location: string;
    has_favorite: boolean;
  }
  interface EventResponse {
    data: Event[];
    meta: {
      current_page: number;
      last_page: number;
      total: number;
      per_page: number;
    };
  }
  interface Props {
    events: Event[];
  }
  
  const t = useTranslations();
  const locale = useLocale();
  const [data, setData] = useState<EventResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/event/newest`, {
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

  let events = data?.data;

  if (!events || events.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-semibold text-gray-500">{t("No events found")}</p>
      </div>
    );
  }

  return (
    <section className="my-8">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          {/* Heading */}
          <h3 className="min-w-fit text-xl md:text-3xl font-bold">
            {t("Latest events")}
          </h3>

          {/* Custom Pagination */}
          <div className="swiper-pagination-custom"></div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          slidesPerView={1} // Only one slide visible at a time
          spaceBetween={20} // Space between slides
          pagination={{
            el: ".swiper-pagination-custom", // Connect to custom pagination container
            clickable: true, // Enable clickable pagination
          }}
          modules={[Pagination]} // Add Pagination module
          className="mySwiper"
        >
          {events.map((event) => {
            const timeDifference = calculateTimeDifference(event.date);

            return (
              <SwiperSlide key={event.id}>
                <div className="bg-white rounded-xl overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center lg:gap-6">
                  {/* image */}
                  <div className="relative img-fit lg:h-[314px] h-[150px] md:h-[250px] w-full xl:min-w-[342px] lg:max-w-[260px]">
                    <img
                      src={event.image}
                      alt="event-image"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex flex-col lg:flex-row justify-between items-center grow w-full">
                    {/* text */}
                    <div className="p-3 lg:py-4 shrink w-fit">
                      <div>
                        <span className="text-main text-lg font-bold">{"لقاء"}</span>
                        <h5 className="font-bold text-xl lg:text-2xl">
                          {event.title}
                        </h5>
                        <p className="text-xs xl:text-2xl lg:max-w-[350px] xl:max-w-[712px]">
                          {event.description}
                        </p>
                        <div className="flex flex-col lg:flex-row lg:items-end gap-2 lg:gap-8 mt-4 lg:mt-8">
                          <div className="flex gap-3">
                            <Link
                              className="block rounded-[8px] bg-[#C39E61] font-bold px-6 py-1 w-fit flex-c"
                              href={""}
                            >
                              {t("Register now")}
                            </Link>
                            <button className="p-2 bg-[#F0F0F0] text-[#ff9d00] rounded-[8px]" style={{ color: "#C39E61" }}>
                              {event.has_favorite ? <BiSolidHeart /> : <BiHeart />}
                            </button>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex lg:gap-1">
                              <div className="text-[#C39E61]">
                                <MdDateRange />
                              </div>
                              <span className="text-sm">{formatHijriDate(event.date)}</span>
                            </div>
                            <div className="flex lg:gap-1">
                              <div className="text-[#C39E61]">
                                <RiSendPlaneFill />
                              </div>
                              <span className="text-sm">
                                {event.location}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* timing */}
                    <div className="grid h-fit grid-cols-4 lg:grid-cols-2 gap-1 lg:gap-4 px-6 pb-4 lg:pb-0">
                      {timeDifference.map((time, index) => (
                        <div key={index} className="bg-[#CDCDCD4D] rounded-[9px] px-2 xl:px-4 py-2 flex lg:flex-col justify-center items-center gap-2 lg:gap-1 lg-w-[50px] xl:min-w-[85px] h-fit">
                          <span className="text-main font-bold lg:text-lg">{time.value}</span>
                          <span className="text-xs lg:text-base">{time.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default LatestEventsCard;