import { useTranslations } from "next-intl";
import React from "react";
import RequestesCard from "./RequestesCard";


const ParticipationRequests = () => {
  const t = useTranslations();
  const data = [
    {
      status: "acceptable",
      name: "فعاليه العطاء لحفظ النعم",
      date: "١٠ رمضان ١٤٤٨",
    },
    {
      status: "unacceptable",
      name: "فعاليه العطاء لحفظ النعم",
      date: "١٠ رمضان ١٤٤٨",
    },
    {
      status: "Modified",
      name: "فعاليه العطاء لحفظ النعم",
      date: "١٠ رمضان ١٤٤٨",
    },
  ];
  return (
    <section className="mt-[100px] lg:mt-[200px] pb-12 md:pb-20">
      <div className="container">
        <h4 className="text-2xl lg:text-4xl font-bold">
          {t("Participation requests")}
        </h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 md:mt-10 gap-3">
          {data.map((card, idx) => (
            <RequestesCard {...card} key={idx} />
          ))}
        </div>
          <button className="text-xl block mt-10 md:mt-16 mx-auto md:text-2xl">{t("view more")}</button>
      </div>
    </section>
  );
};

export default ParticipationRequests;
