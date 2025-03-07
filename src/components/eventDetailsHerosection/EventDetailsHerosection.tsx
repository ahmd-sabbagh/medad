import { herosection_bg } from "@/assets";
import Link from "next/link";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";

const EventDetailsHerosection = () => {
  return (
    <section className="bg-image py-10" style={{ backgroundImage: `url(${herosection_bg.src})` }}>
      <div className="container ">
        <div className="flex lg:flex-col items-center gap-4 lg:gap-8">
          <div className="flex flex-col gap-4">
            <div className="">
              <h1 className="text-2xl lg:text-5xl font-bold text-white lg:mb-8 max-w-2xl">
                المؤتمر العالمي للابحاث والمعلومات والابتكار في القطاع الخيري
                (أبحاث)
              </h1>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="text-xl text-main">
                  <MdDateRange />
                </div>

                <span className="text-white">١٧ رمضان ١٤٤٨</span>
              </div>
              <div className="flex items-center gap-2">
                <div className=" -rotate-90 text-xl text-main">
                  <RiSendPlaneFill />
                </div>

                <span className="text-white">
                  مركز الملك فهد الثقافي للمؤتمرات
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Link href={"/submit-application-event"} className="px-8 py-3 bg-main text-black rounded-lg text-xl font-black  transition-transform duration-300 hover:scale-105  cursor-pointer">
                سجل الآن
              </Link>
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
      </div>
    </section>
  );
};

export default EventDetailsHerosection;
