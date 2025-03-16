import { card_1 } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiHeart } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";

const LatestEventsCard = () => {
  const t = useTranslations();
  return (
    <section className="my-8">
      <div className="container">
        <div>
          <h3 className="text-xl md:text-3xl mb-8 font-bold">
            {t("Latest events")}
          </h3>
        </div>
        <div className="bg-white rounded-xl overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center lg:gap-6">
          {/* image */}
          <div className="img-fit lg:h-[314px] h-[150px] md:h-[250px] w-full xl:min-w-[342px] lg:max-w-[260px]">
            <Image src={card_1} alt="event-image" loading="lazy" />
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center grow">
            {/* text */}
            <div className="p-3 lg:py-4  shrink">
              <div>
                <span className="text-main text-lg font-bold">{"لقاء"}</span>
                <h5 className="font-bold text-xl lg:text-2xl">
                  {"فعاليه العطاء لحفظ النعم"}
                </h5>
                <p className="text-xs xl:text-2xl lg:max-w-[350px] xl:max-w-[712px]">
                  {
                    "انطلاقاً من أهداف رؤيـة المملكـة العربيـة السعوديـة 2030 في تعظيم أثـر القطــاع غيـر الربحـي فـي التنمية وتمكين منظمات القطاع للقيام بأدوارها التنمويـة وزيـادة مساهمتها فـي الناتـج المحلي الإجمالي"
                  }
                </p>
                <div className="flex flex-col lg:flex-row lg:items-end gap-2 lg:gap-8 mt-4 lg:mt-8">
                  <div className="flex gap-3">
                    <Link
                      className="block  rounded-[8px] bg-[#C39E61] font-bold px-6 py-1 w-fit flex-c"
                      href={""}
                    >
                      {t("Register now")}
                    </Link>
                    <button className="p-2 bg-[#F0F0F0] text-[#C39E61] rounded-[8px]" style={{color:"#C39E61"}}>
                      <BiHeart />
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex lg:gap-1">
                      <div className="text-[#C39E61]">
                        <MdDateRange />
                      </div>
                      <span className="text-sm">{"١٧ رمضان ١٤٤٨"}</span>
                    </div>
                    <div className="flex lg:gap-1">
                      <div className="text-[#C39E61]">
                        <RiSendPlaneFill />
                      </div>
                      <span className="text-sm">
                        {"مركز الملك فهد الثفافي للمؤتمرات"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* timing */}
            <div className="grid h-fit grid-cols-4 lg:grid-cols-2 gap-1 lg:gap-4 px-6 pb-4 lg:pb-0">
              <div className="bg-[#CDCDCD4D] rounded-[9px] px-2 xl:px-4 py-2 flex lg:flex-col justify-center items-center gap-2 lg:gap-1 lg-w-[50px] xl:min-w-[85px] h-fit">
                <span className="text-main font-bold lg:text-lg">{"24"}</span>
                <span className="text-xs lg:text-base">{"ساعة"}</span>
              </div>
              <div className="bg-[#CDCDCD4D] rounded-[9px] px-2 xl:px-4 py-2 flex lg:flex-col justify-center items-center gap-2 lg:gap-1 lg-w-[50px] xl:min-w-[85px] h-fit">
                <span className="text-main font-bold lg:text-lg">{"24"}</span>
                <span className="text-xs lg:text-base">{"يوم"}</span>
              </div>
              <div className="bg-[#CDCDCD4D] rounded-[9px] px-2 xl:px-4 py-2 flex lg:flex-col justify-center items-center gap-2 lg:gap-1 lg-w-[50px] xl:min-w-[85px] h-fit">
                <span className="text-main font-bold lg:text-lg">{"24"}</span>
                <span className="text-xs lg:text-base">{"ثانيه"}</span>
              </div>
              <div className="bg-[#CDCDCD4D] rounded-[9px] px-2 xl:px-4 py-2 flex lg:flex-col justify-center items-center gap-2 lg:gap-1 lg-w-[50px] xl:min-w-[85px] h-fit">
                <span className="text-main font-bold lg:text-lg">{"24"}</span>
                <span className="text-xs lg:text-base">{"دقيقه"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestEventsCard;
