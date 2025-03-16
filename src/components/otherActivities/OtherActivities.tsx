import { card_1, card_2 } from "@/assets";
import { useTranslations } from "next-intl";
import React from "react";
import EventCard from "../eventCard/EventCard";


const OtherActivities = () => {
  const t = useTranslations();
  const data = [
    {
      type: "امسية",
      image: card_1,
      name: "فعاليه العطاء لحفظ النعم",
      date: "١٠ رمضان ١٤٤٨",
      status: true,
    },
    {
      type: "لقاء",
      image: card_2,
      name: "فعاليه العطاء لحفظ النعم",
      date: "١٠ رمضان ١٤٤٨",
      status: false,
    },
    {
      type: "امسية",
      image: card_1,
      name: "فعاليه العطاء لحفظ النعم",
      date: "١٠ رمضان ١٤٤٨",
      status: true,
    },
    {
      type: "لقاء",
      image: card_2,
      name: "فعاليه العطاء لحفظ النعم",
      date: "١٠ رمضان ١٤٤٨",
      status: false,
    },
  ];
  return (
    <section className="py-8 px-12 bg-white">
      <div className="">
        <div>
          <h3 className="text-3xl font-bold">{t("Other activities")}</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 gap-3">
          {data.map((card, idx) => (
            <EventCard {...card} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherActivities;