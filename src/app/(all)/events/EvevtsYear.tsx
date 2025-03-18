import { card_1, card_2 } from "@/assets";
import EventCard from "@/components/eventCard/EventCard";
import { useTranslations } from "next-intl";
import React from "react";

interface EvevtsYearProps {
  year: number;
}

const EvevtsYear: React.FC<EvevtsYearProps> = ({ year, events }) => {
  const t = useTranslations();

  return (
    <section className="my-10 md:my-20">
      <div className="container">
        <div>
          <h3 className="text-xl md:text-3xl mb-8 font-bold">
            {`${t("event")} ${year}`}
          </h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 gap-3">
          {events.map((event, idx) => (
            <EventCard {...event} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EvevtsYear;
