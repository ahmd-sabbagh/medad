"use client"

import { card_1, card_2 } from "@/assets";
import { useLocale, useTranslations } from "next-intl";
import EventCard from "../eventCard/EventCard";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const Events = () => {
  const t = useTranslations();
  const locale = useLocale();
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
  const [events, setEvents] = useState<EventCardProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/event`,{
      headers: {
        "Accept-Language": locale,
      }
    }).then((response) => {
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
          {events?.map((card, idx) => (
            <EventCard {...card} image={card.image[0]} key={idx} />
          ))}
        </div>
        <Link href={"/events"} className="block w-fit px-5 py-1 rounded-[4px] font-bolder text-lg mt-6 md:mt-10 bg-main mx-auto">{t("Events Calendar")}</Link>
      </div>
    </section>
  );
};

export default Events;
