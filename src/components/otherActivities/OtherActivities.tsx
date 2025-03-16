"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslations } from "next-intl";
import EventCard from "../eventCard/EventCard";


const OtherActivities = ({ lang, event_id }) => {
  const t = useTranslations();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/event/same/${event_id}`, {
        headers: {
          "Accept-Language": lang,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, [lang]);

  return (
    <section className="py-8 px-12 bg-white">
      <div className="">
        <div>
          <h3 className="text-3xl font-bold">{t("Other activities")}</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 gap-3">
          {data?.data?.map((card, idx) => (
            <EventCard {...card} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherActivities;