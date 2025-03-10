import { hero_event_1, hero_event_2, herosection_bg } from "@/assets";
import "./style.css";
import Image from "next/image";
import { MdDateRange } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";

const Herosection = () => {
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
                <h1 className="text-2xl lg:text-5xl xl:text-7xl font-bold text-white lg:mb-8 max-w-2xl">
                  المؤتمر العالمي للابحاث والمعلومات والابتكار في القطاع الخيري
                  (أبحاث)
                </h1>
              </div>

              <div className="flex flex-col gap-4">
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
              <p className="text-white md:text-3xl">
                انطلاقاً من أهداف رؤية المملكة العربية السعودية 2030 في تعظيم
                أثر القطاع غير الربحي في التنمية وتمكين منظمات القطاع للقيام
                بأدوارها التنموية وزيادة مساهمتها في الناتج المحلي الإجمالي.
              </p>
            </div>
            <div className="grid grid-cols-2 justify-between gap-4 w-full mt-4 md:mt-6">
              <Image
                src={hero_event_2}
                alt="Event"
                className="flex-grow h-[200px] lg:h-[300px] object-cover rounded-lg w-full"
              />
              <Image
                src={hero_event_1}
                alt="Event"
                className="flex-grow h-[200px] lg:h-[300px] object-cover rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
