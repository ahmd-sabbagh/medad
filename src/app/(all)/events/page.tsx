"use client"

import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import "./style.css"
import LatestEventsCard from "./LatestEventsCard";
import EvevtsYear from "./EvevtsYear";
import { useTranslations, useLocale } from "next-intl";

const EventsPage = () => {

  const t = useTranslations();
  const locale = useLocale();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/event/expired`, {
        headers: {
          "Accept-Language": locale,
        },
      })
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, [locale]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-semibold text-gray-500">{t("Loading")}</p>
      </div>
    );
  }

  let events = data?.data;

  return (
    <section>
      <Header />
      <LatestEventsCard />
      {events?.map((event, index) => (
        <EvevtsYear key={index} year={event.date} events={event.events} />
      ))}
    </section>
  );
};

export default EventsPage;
