"use client";

import MainTitle from "./MainTitle";
import Interviewer from "./Interviewer";
import EventTopics from "./EventTopics";
import { RiSendPlaneFill } from "react-icons/ri";
import React from "react";
import { useTranslations } from "next-intl";
import { MdAccessTime, MdDateRange } from "react-icons/md";

interface EventDetailsProps {
  title: string;
  introduction: string;
  description: string;
  target: string;
  location: string;
  date: string;
  time: string;
  axes: string[];
  topics: string[];
}

const EventDetailss: React.FC<EventDetailsProps> = ({ title, introduction, description, target, location, date, time, axes, topics }) => {

  const t = useTranslations();


  return (
    <section className="bg-[#f5f5f5] pt-10 px-12 lg:pt-20">
      <div className="container">
        <div className="grid gap-10 lg:gap-16 xl:gap-32 lg:grid-cols-5">
          <div className="flex flex-col gap-8 lg:gap-28 lg:col-span-3">
            <div>
              <h5 className="text-2xl lg:text-3xl font-bold">{t("the introduction")}</h5>
              <p className="md:text-2xl mt-2">{introduction}</p>
            </div>
            <div>
              <h5 className="text-2xl lg:text-3xl font-bold">{t("Description of the event")}</h5>
              <p className="md:text-2xl mt-2">{description}</p>
            </div>
            <div>
              <h5 className="text-2xl lg:text-3xl font-bold">{t("Event objectives")}</h5>
              <p className="md:text-2xl mt-2">{target}</p>
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-10">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-main flex-c text-2xl p-3 -rotate-90 text-white">
                <RiSendPlaneFill />
              </div>
              <div>
                <div>{t("The place of the event")}</div>
                <p className="font-bold text-2xl">{location}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-main flex-c text-2xl p-3 text-white">
                <MdDateRange />
              </div>
              <div>
                <div>{t("Event date")}</div>
                <p className="font-bold text-2xl">{date}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-main flex-c text-2xl p-3 text-white">
              <MdAccessTime />
              </div>
              <div>
                <div>{t("Event time")}</div>
                <p className="font-bold text-2xl">{time}</p>
              </div>
            </div>
          </div>
        </div>
        <MainTitle title={title} />
        {/* <Interviewer axes={axes} /> */}
        <EventTopics topics={topics} />
      </div>
    </section>
  );
};

export default EventDetailss;
