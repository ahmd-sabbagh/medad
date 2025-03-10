import { arrow_down, card_1, card_2 } from "@/assets";
import React from "react";
import ActivitiesCard from "./ActivitiesCard";
import { useTranslations } from "next-intl";
import Image from "next/image";

const ParticipatedActivities = () => {
  const t = useTranslations();
  const data = [
    {
      image: card_1,
      name: "فعاليه العطاء لحفظ النعم",
      date: "١٠ رمضان ١٤٤٨",
    },
    {
      image: card_2,
      name: "فعاليه العطاء لحفظ النعم",
      date: "١٠ رمضان ١٤٤٨",
    },
  ];
  return (
    <section className="bg-[#F3F3F3]">
      <div className="container">
        <div className="flex items-center justify-between">
          <h4 className="text-2xl lg:text-4xl font-bold">
            {t("Participation requests")}
          </h4>
          <button className="rounded-lg bg-white py-3 px-5 md:px-6 flex items-center gap-2">
            <span className="md:text-lg">{t("The next one")}</span>
            <span className="flex-c">
              <Image src={arrow_down} alt="arrow icon" loading="lazy" />
            </span>
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 md:mt-10 gap-3">
          {data.map((card, idx) => (
            <ActivitiesCard {...card} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParticipatedActivities;
