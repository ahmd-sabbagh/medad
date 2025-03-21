import { useTranslations } from "next-intl";
import React from "react";
import { MdAccessTime, MdDateRange } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import MainTitle from "./MainTitle";
import Interviewer from "./Interviewer";
import EventTopics from "./EventTopics";

const EventDetailss = () => {
  const t = useTranslations();
  const data = [
    {
      title: t("Event objectives"),
      description:
        "انطلاقاً من أهداف رؤيـة المملكـة العربيـة السعوديـة 2030 في تعظيم أثـر القطــاع غيـر الربحـي فـي التنمية وتمكين منظمات القطاع للقيام بأدوارها التنمويـة وزيـادة مساهمتها فـي الناتـج المحلي الإجمالي",
    },
    {
      title: t("Description of the event"),
      description:
        "انطلاقاً من أهداف رؤيـة المملكـة العربيـة السعوديـة 2030 في تعظيم أثـر القطــاع غيـر الربحـي فـي التنمية وتمكين منظمات القطاع للقيام بأدوارها التنمويـة وزيـادة مساهمتها فـي الناتـج المحلي الإجمالي",
    },
    {
      title: t("Event objectives"),
      description: t("Event objectives desc"),
    },
  ];
  return (
    <section className="bg-[#f5f5f5] pt-10 px-12 lg:pt-20">
      <div className="container">
        <div className="grid  gap-10 lg:gap-16 xl:gap-32 lg:grid-cols-5">
          <div className="flex flex-col gap-8 lg:gap-28 lg:col-span-3">
            {data.map((item, idx) => (
              <div key={idx}>
                <h5 className="text-2xl lg:text-3xl font-bold">{item.title}</h5>
                <p className="md:text-2xl mt-2">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="lg:col-span-2 flex flex-col gap-10">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-main flex-c text-2xl p-3 -rotate-90 text-white">
                <RiSendPlaneFill />
              </div>
              <div>
                <div>{t("The place of the event")}</div>
                <p className="font-bold text-xl">{"مركز الملك فهد الثفافي"}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-main flex-c text-2xl p-3 text-white">
                <MdDateRange />
              </div>
              <div>
                <div>{t("Event date")}</div>
                <p className="font-bold text-xl">{"١٧ رمضان ١٤٤٨"}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-main flex-c text-2xl p-3 text-white">
              <MdAccessTime />
              </div>
              <div>
                <div>{t("The place of the event")}</div>
                <p className="font-bold text-xl">{"الساعه التاسعه صباحا"}</p>
              </div>
            </div>
          </div>
        </div>
        <MainTitle />
        <Interviewer />
        <EventTopics />
      </div>
    </section>
  );
};

export default EventDetailss;
