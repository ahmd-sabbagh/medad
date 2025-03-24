"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import "./style.css"
import PrizeInfoModal from "../PrizeInfoModal";

const PrizeEvents = ({ lang, event_id}) => {
  const t = useTranslations();
  const [selectedPrize, setSelectedPrize] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/gift/${event_id}`, {
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
    const handlePrizeClick = (prize:any) => {
      setSelectedPrize(prize);
      setIsModalOpen(true);
    };

  return (
    <section>
      <div className="px-12">
        <h3 className="font-bold text-xl lg:text-3xl">{t("Event prizes")}</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-8 ">
          {data?.data?.map((card, idx) => (
            <div
              className="prizeEventCard cursor-pointer block rounded-xl h-[300px] md:h-[400px] lg:h-[524px] p-5 md:p-8 lg:p-10"
              key={card.id}
              onClick={() => handlePrizeClick(card)}
            >
              <div className="flex-c mx-auto mt-8">
                <Image width={50} height={50} src={card.image} alt="icon" loading="lazy" />
              </div>
              <p className="text-sm md:text-base mt-6 lg:mt-8 text-center">{card.description}</p>
              <div className="text-main md:text-xl mt-6 lg:mt-8 text-center">{card.title}</div>
              <div className="text-main md:text-xl mt-2 text-center">{card.price} SR</div>
            </div>
          ))}

    <PrizeInfoModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      gift={selectedPrize}
    />
        </div>
      </div>
    </section>
  );
};

export default PrizeEvents;
