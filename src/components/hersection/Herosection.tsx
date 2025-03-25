"use client";
import { herosection_bg, load_image } from "@/assets";
import "./style.css";
import Image from "next/image";
import { MdDateRange } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import HijriDate, { toHijri } from 'hijri-date/lib/safe';
import { useTranslations, useLocale } from "next-intl";
import { calculateTimeDifference, formatHijriDate } from "@/utils/dateUtils";
import Form from "@/app/(all)/submit-application-event/Form";

const Herosection = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Ensure error state exists
  const lang = useLocale();
  const t = useTranslations();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/event/banner`, {
      headers: {
        "Accept-Language": lang,
      },
    })
      .then((response) => {
        setData(response.data); // Store fetched data
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [lang]);

  // Ensure data exists before formatting the date
  let formattedHijriDate = data?.data?.date ? formatHijriDate(data.data.date) : null;


  return (
    <section
      className={`Herosection py-10 flex-c`}
      style={{ backgroundImage: `url(${data?.data?.main_banner ? data?.data?.main_banner :herosection_bg.src})` }}
    >
      <div className="container">
        <div className="grid gap-4 md:gap-0 lg:grid-cols-2">
          <div className="flex lg:flex-col gap-8  container-detail">
            <div className="flex flex-col gap-2 lg:gap-8">
              <div className="">
                <h2 className="lg:text-2xl font-bold text-main">
                  الفعالية القادمة
                </h2>
                <h1 className="text-2xl lg:text-4xl xl:text-7xl md:text-3xl font-bold text-white lg:mb-8 max-w-2xl">{data?.data?.title}</h1>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <div className="text-xl text-main">
                    <MdDateRange />
                  </div>

                  <span className="text-white">{formattedHijriDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className=" -rotate-90 text-xl text-main">
                    <RiSendPlaneFill />
                  </div>

                  <span className="text-white">{data?.data?.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button onClick={() => setIsDrawerOpen(true)}  className="px-8 py-1 bg-main text-black rounded-sm text-xl font-black  transition-transform duration-300 hover:scale-105  cursor-pointer">
                {t("Register now")}
                </button>
                <button className="px-1 py-1 bg-white rounded-sm  transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <div className="text-2xl text-main">
                    <CiHeart />
                  </div>
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row h-fit h-full justify-around">
              {calculateTimeDifference(data?.data?.date).map((item, index) => (
                <div
                  key={index}
                  className="flex max-h-[80px] w-20 flex-col items-center bg-white p-0 justify-center rounded-lg shadow-md "
                >
                  <span className="text-sm lg:text-2xl font-bold text-main">
                    {item.value}
                  </span>
                  <span className="text-xs lg:text-sm text-gray-600">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Images */}
          <div className="flex flex-col items-start w-full lg:px-4 lg:py-12 ">
            <div className="desc-event p-4 md:p-8 rounded-2xl max-w-5xl w-full" style={{ backgroundImage: 'linear-gradient(to left,rgba(226, 173, 99, 0.50),rgba(226, 173, 99, 0.38),rgba(226, 173, 99, 0.28),rgba(226, 173, 99, 0.20),rgba(226, 173, 99, 0.23),rgba(226, 173, 99, 0.14) ,rgba(226, 173, 99, 0.09))' }}>
              <h2 className="text-[#E2AE63] text-2xl font-bold">
                عن الفعالية
              </h2>
              <p className="text-white md:text-2xl lg:text-3xl">{data?.data?.description}</p>
            </div>
            <div className="event-images grid grid-cols-2 justify-between gap-4 w-full mt-4 md:mt-6">
              {loading ? (
                <>
                  <Image src={load_image} width={300} height={200} alt="Loading" className="flex-grow xl:h-[200px] xl:h-[300px] lg:h-[160px] lg:h-[220px] md:h-[140px] md:h-[210px] h-[100px] h-[200px] object-cover rounded-xl w-full" />
                  <Image src={load_image} width={300} height={200} alt="Loading" className="flex-grow xl:h-[200px] xl:h-[300px] lg:h-[160px] lg:h-[220px] md:h-[140px] md:h-[210px] h-[100px] h-[200px] object-cover rounded-xl w-full" />
                </>
              ) : (
                <>
                  {data?.data?.image[0] && (
                    <img src={data?.data?.image[0]} width={300} height={200} alt="Event" className="flex-grow xl:h-[200px] xl:h-[300px] lg:h-[160px] lg:h-[220px] md:h-[140px] md:h-[210px] h-[100px] h-[200px] object-cover rounded-xl w-full" />
                  )}
                  {data?.data?.image[1] && (
                    <img src={data?.data?.image[1]} width={300} height={200} alt="Event" className="flex-grow xl:h-[200px] xl:h-[300px] lg:h-[160px] lg:h-[220px] md:h-[140px] md:h-[210px] h-[100px] h-[200px] object-cover rounded-xl w-full" />
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-[#00000088] z-555555" 
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsDrawerOpen(false);
            }
          }}
        >
          <div className="fixed right-0 top-0 h-full w-[90%] md:w-[600px] bg-white overflow-y-auto">
            <button 
              onClick={() => setIsDrawerOpen(false)}
              className="absolute top-4 right-4 text-2xl p-2"
            >
              ×
            </button>
            <Form onClose={() => setIsDrawerOpen(false)} eventId={data?.data?.id} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Herosection;
