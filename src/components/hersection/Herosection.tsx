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
      <div className="container">
        <div className="grid gap-4 md:gap-0 lg:grid-cols-2">
          <div className="flex lg:flex-col gap-8  container-detail">
            <div className="flex flex-col gap-2 lg:gap-8">
              <div className="">
                <h2 className="lg:text-2xl font-bold text-main">
                   الفعالية القادمة
                </h2>
                <h1 className="text-2xl lg:text-4xl xl:text-7xl md:text-3xl font-bold text-white lg:mb-8 max-w-2xl">
                  المؤتمر العالمي للابحاث والمعلومات والابتكار في القطاع الخيري
                  (أبحاث)
                </h1>
              </div>

              <div className="flex flex-col">
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
                <button className="px-8 py-1 bg-main text-black rounded-sm text-xl font-black  transition-transform duration-300 hover:scale-105  cursor-pointer">
                  سجل الآن
                </button>
                <button className="px-1 py-1 bg-white rounded-sm  transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <div className="text-2xl text-main">
                    <CiHeart />
                  </div>
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row h-fit h-full justify-around">
              {[
                { value: "٣٦٠", label: "يوم" },
                { value: "٢٤", label: "ساعة" },
                { value: "٦٠", label: "دقيقة" },
                { value: "٦٠", label: "ثانية" },
              ].map((item, index) => (
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
              <p className="text-white md:text-2xl lg:text-3xl">
              انطلاقاً من أهداف رؤية المملكة العربية السعودية 2030 في تعظيم
              أثر القطاع غير الربحي في التنمية وتمكين منظمات القطاع للقيام
              بأدوارها التنموية وزيادة مساهمتها في الناتج المحلي الإجمالي.
              </p>
            </div>
            <div className="event-images grid grid-cols-2 justify-between gap-4 w-full mt-4 md:mt-6">
              <Image 
              src={hero_event_2}
              alt="Event"
              className="flex-grow xl:h-[200px] xl:h-[300px] lg:h-[160px] lg:h-[220px] md:h-[140px] md:h-[210px] h-[100px] h-[200px] object-cover rounded-xl w-full"
              layout="responsive"
              />
              <Image
              src={hero_event_1}
              alt="Event"
              className="xl:h-[200px] xl:h-[300px] lg:h-[160px] lg:h-[220px] md:h-[140px] md:h-[210px] h-[100px] h-[200px] flex-grow object-cover rounded-xl w-full"
              layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
