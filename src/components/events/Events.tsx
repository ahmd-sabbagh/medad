import { card_1, card_2 } from "@/assets";
import { useTranslations } from "next-intl";
import React from "react";
import EventCard from "../eventCard/EventCard";
import Link from "next/link";

const Events = () => {
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
    <section className="py-8 bg-white">
      <div className="container">
        <div>
          <h3 className="text-3xl font-bold">{t("Events")}</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 gap-3">
          {data.map((card, idx) => (
            <EventCard {...card} key={idx} />
          ))}
        </div>
        <Link href={"/events"} className="block w-fit px-5 py-1 rounded-[4px] font-bolder text-lg mt-6 md:mt-10 bg-main mx-auto">{t("Events Calendar")}</Link>
      </div>
    </section>
  );
};

export default Events;
