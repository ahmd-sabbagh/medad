"use client";
import { herosection_bg, load_image } from "@/assets";
import "./style.css";
import Image from "next/image";
import { MdDateRange } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import React, { useEffect, useState } from "react";
import axios from "axios";
import HijriDate,{toHijri} from 'hijri-date/lib/safe';

const Herosection = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/event/banner`)
      .then((response) => {
        setData(response.data); // Store fetched data
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const nowGreg = new Date(data?.data?.date);
  const nowHijri = toHijri(nowGreg);
  
  // Format the Hijri Date
  const hijriDay = nowHijri.getDate();
  const hijriMonth = nowHijri.getMonth(); // 0-based index
  const hijriYear = nowHijri.getFullYear();
  
  const hijriMonths = [
    "محرم", "صفر", "ربيع الأول", "ربيع الآخر", "جمادى الأولى", "جمادى الآخرة",
    "رجب", "شعبان", "رمضان", "شوال", "ذو القعدة", "ذو الحجة"
  ];
  
  // Formatted Hijri Date
  const formattedHijriDate = `${hijriDay} ${hijriMonths[hijriMonth]} ${hijriYear}`;

  return (
    <section
      className={`Herosection py-10 flex-c`}
      style={{ backgroundImage: `url(${herosection_bg.src})` }}
    >
      <div className="container ">
        <div className="grid gap-4 md:gap-0 lg:grid-cols-2">
          <div className="flex lg:flex-col gap-4 lg:gap-8">
            <div className="flex flex-col gap-4 lg:gap-8">
              <div className="">
                <h2 className="lg:text-2xl font-bold text-main mb-4">
                  عن الفعالية
                </h2>
                <h1 className="text-2xl lg:text-5xl xl:text-7xl font-bold text-white lg:mb-8 max-w-2xl">{data?.data?.title}</h1>
              </div>

              <div className="flex flex-col gap-4">
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
                <button className="px-8 py-3 bg-main text-black rounded-lg text-xl font-black  transition-transform duration-300 hover:scale-105  cursor-pointer">
                  سجل الآن
                </button>
                <button className="px-3 py-3 bg-white rounded-lg  transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <div className="text-2xl text-main">
                    <CiHeart />
                  </div>
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row h-fit gap-4">
              {[
                { value: "٣٦٠", label: "يوم" },
                { value: "٢٤", label: "ساعة" },
                { value: "٦٠", label: "دقيقة" },
                { value: "٦٠", label: "ثانية" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-white p-2 lg:p-4 rounded-lg shadow-md lg:w-24"
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
          <div className="flex flex-col items-start w-full lg:px-4 lg:py-12">
            <div className="bg-[#E2AE63]/20 backdrop-blur-md p-4 md:p-8 rounded-2xl max-w-5xl w-full">
              <h2 className="text-[#E2AE63] text-2xl font-bold mb-4">
                عن الفعالية
              </h2>
              <p className="text-white md:text-3xl">{data?.data?.description}</p>
            </div>
            <div className="grid grid-cols-2 justify-between gap-4 w-full mt-4 md:mt-6">
              {loading ? (
                <>
                  <Image src={load_image} width={300} height={200} alt="Loading" className="flex-grow h-[200px] lg:h-[300px] object-cover rounded-lg w-full" />
                  <Image src={load_image} width={300} height={200} alt="Loading" className="flex-grow h-[200px] lg:h-[300px] object-cover rounded-lg w-full" />
                </>
              ) : (
                <>
                  {data?.data?.image[0] && (
                    <Image src={data?.data?.image[0]} width={300} height={200} alt="Event" className="flex-grow h-[200px] lg:h-[300px] object-cover rounded-lg w-full" />
                  )}
                  {data?.data?.image[1] && (
                    <Image src={data?.data?.image[1]} width={300} height={200} alt="Event" className="flex-grow h-[200px] lg:h-[300px] object-cover rounded-lg w-full" />
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
