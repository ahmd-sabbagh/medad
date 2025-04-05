"use client"

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import "./style.css";
import { speaker_event } from "@/assets";



const Schedule = ({ schedules }:  {schedules:ScheduleProps[]}) => {
  const t = useTranslations();
  const [selectedSchedule, setSelectedSchedule] = useState(schedules[0]); // Default to first day

  return (
    <section>
      <div className="px-12">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-xl lg:text-3xl">{t("Schedule Events")}</h3>

          {/* Schedule Days */}
          <div className="flex flex-wrap items-start justify-start gap-2 md:gap-3 mt-3 md:mt-4">
            {schedules.map((schedule) => (
              <div className="chbx" key={schedule.id}>
                <input
                  type="radio"
                  id={`schedule-${schedule.id}`}
                  className="hidden"
                  checked={selectedSchedule.id === schedule.id}
                  onChange={() => setSelectedSchedule(schedule)}
                />
                <label
                  htmlFor={`schedule-${schedule.id}`}
                  className="rounded-[5px] py-1 px-3 block cursor-pointer"
                >
                  <span className="md:text-xl">{schedule.title}</span>
                </label>
              </div>
            ))}
          </div>

          {/* Appointments List */}
          <div className="flex w-full">
            <div className="bg-gradient-to-b rounded-s-[15px] from-[#E2AE63] to-[#f6d6ae] pr-4 py-4 pl-8 flex flex-col items-start space-y-4 gap-5 w-[50%] relative">
              {selectedSchedule.appointment.map((appointment, index) => (
                <div key={index} className="flex justify-between items-start flex-col relative">
                  <div className="flex items-center">
                    <div className="w-8 h-8 font-xl p-[2px] rounded-full mr-2 border border-1">
                      <div className={`w-full ${index === 0 ? 'bg-[#61C3B6]' : (index === selectedSchedule.appointment.length - 1 ? 'bg-[#ff9e14]' : 'bg-[#b7966c]')} h-full rounded-full`}></div>
                    </div>
                    <div className={`${index === selectedSchedule.appointment.length - 1 ? 'font-bold' : 'font-bolder'} text-3xl mr-2`}>
                      {appointment.title_ar}
                    </div>
                  </div>
                  <div className="text-[#00000082] mr-12">
                    {appointment.from} - {appointment.to}
                  </div>
                  {index < selectedSchedule.appointment.length - 1 && (
                    <div className="absolute right-[22px] top-9">
                      <div className="flex flex-col w-[3px] gap-1 justify-between">
                        {[...Array(8)].map((__, i) => (
                          <div key={i} className="w-[2px] h-1 bg-black"></div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Speaker Image */}
            <div className="bg-main flex-grow w-full rounded-e-[15px]">
              <Image src={speaker_event} alt="Event" layout="responsive" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
