"use client"

import { card_1, card_2 } from "@/assets";
import { useTranslations } from "next-intl";
import EventCard from "../eventCard/EventCard";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Events = () => {
  const t = useTranslations();
  // const data = [
  //   {
  //     type: "امسية",
  //     image: card_1,
  //     name: "فعاليه العطاء لحفظ النعم",
  //     date: "١٠ رمضان ١٤٤٨",
  //     status: true,
  //   },
  // ];

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/event`)
      .then((response) => {
        setData(response.data); // Store fetched data
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);



  return (
    <section className="py-8 bg-white">
      <div className="container">
        <div>
          <h3 className="text-3xl font-bold">{t("Events")}</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 gap-3">
          {data?.data?.map((card, idx) => (
            <EventCard {...card} key={idx} />
          ))}
        </div>
        <button className="block w-fit py-2 px-4 rounded-xl font-bold text-lg mt-6 md:mt-10 bg-main mx-auto">{t("Events Calendar")}</button>
      </div>
    </section>
  );
};

export default Events;
