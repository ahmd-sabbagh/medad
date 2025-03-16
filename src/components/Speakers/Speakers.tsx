"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import "./style.css"
import React, { useEffect, useState } from "react";
import axios from "axios";

const Speakers = ({ lang, event_id }) => {
  const t = useTranslations();
  const [speakers, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/speakers/${event_id}`, {
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
    <section className="py-10 md:py-20">
      <div className="container">
        <h3 className="font-bold text-xl lg:text-3xl">{t("Speakers")}</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
          {speakers?.data?.map((speaker, index) => (
            <div className="img-fit h-[200px] md:h-[270px] rounded-xl overflow-hidden relative" key={index}>
              <Image src={speaker.image} width={300} height={200} alt="persone" loading="lazy" />
              <div className="shape-grad absolute top-0 start-0 w-full h-full"></div>
              <div className="absolute w-full bottom-[0px] start-0 px-4 py-3">
                <div className="font-bold text-white">{speaker.name}</div>
                <p className="text-main font-bold text-sm">{speaker.job_title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
