"use client"

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css"
import { useTranslations, useLocale } from "next-intl";

import { message_icon, view_icon } from "@/assets";
import Image from "next/image";

const OurVision = () => {
  const t = useTranslations();
  const locale = useLocale();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/about-us`, {
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

  const about = [
    {
      icon: message_icon,
      title: t("the message"),
      description: data?.our_message,
    },
    {
      icon: view_icon,
      title: t("The vision"),
      description: data?.our_vision,
    },
  ];

  return (
    <section className="py-10 md:py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
          <div className="text-2xl lg:text-5xl font-bold text-center">
            {t("Our vision and mission")}
          </div>
          {about.map((item, idx) => (
            <div className="flex items-center bg-[#E2AE6352] rounded-[36px] p-4 md:p-5 gap-4 md:gap-8" key={idx}>
              <div className="flex-c min-w-[45px]">
                <img src={item.icon} alt="icon" loading="lazy" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl md:text-2xl">{item.title}</span>
                <span>{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurVision;
