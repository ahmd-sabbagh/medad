import { about_bg_shape, herosection_bg } from "@/assets";
import { calculateTimeDifference } from "@/utils/dateUtils";
import { t } from "i18next";
import Link from "next/link";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { useTranslations, useLocale } from "next-intl";

const EventDetailsHerosection = ({ baseDate, title, date, location }) => {
  const t = useTranslations();

  return (
    <section className="bg-image py-18" style={{ backgroundImage: `url(${herosection_bg.src})` }}>
      <div className="absolute bg-image h-[400px] w-full top-0"  style={{ backgroundImage: `url(${about_bg_shape.src})` }}></div>
      <div className="container ">
        <div className="flex lg:flex-col items-center gap-4 lg:gap-8">
          <div className="flex flex-col gap-4">
            <div className="">
              <h1 className="text-2xl lg:text-5xl font-bold text-white lg:mb-8 max-w-2xl text-center">
                {title}
              </h1>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="text-xl text-main">
                  <MdDateRange />
                </div>

                <span className="text-white">{date}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className=" -rotate-90 text-xl text-main">
                  <RiSendPlaneFill />
                </div>

                <span className="text-white">
                  {location}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Link href={"/submit-application-event"} className="px-8 py-3 bg-main text-black rounded-lg text-xl font-black  transition-transform duration-300 hover:scale-105  cursor-pointer">
                {t('Register now')}
              </Link>
              <button className="py-1 px-2 bg-white rounded-[5px]  transition-transform duration-300 hover:scale-105 cursor-pointer">
                <div className="text-2xl text-[#C39E61]">
                  <CiHeart />
                </div>
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row h-fit gap-4 absolute mt-64 pt-8">
            {calculateTimeDifference(baseDate)?.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white p-2 lg:p-4 rounded-lg shadow-md lg:w-24"
              >
                <span className="text-sm lg:text-2xl font-bolder text-[#C39E61]">
                  {item.value}
                </span>
                <span className="text-xs lg:text-sm font-bold">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetailsHerosection;
