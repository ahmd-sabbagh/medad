import { card_1, card_2 } from "@/assets";
import EventCard from "@/components/eventCard/EventCard";
import { useTranslations } from "next-intl";
import React from "react";

interface EvevtsYearProps {
  year: number;
}

const EvevtsYear: React.FC<EvevtsYearProps> = ({ year }) => {
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
    }
  ];
  return (
    <section className="my-10 md:my-20">
      <div className="container">
        <div>
          <h3 className="text-xl md:text-3xl mb-8 font-bold">
            {`${t("event")} ${year}`}
          </h3>
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

export default EvevtsYear;
