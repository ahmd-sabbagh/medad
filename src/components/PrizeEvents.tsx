"use client";
import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import axios from "axios";
import PrizeInfoModal from "./PrizeInfoModal";

const PrizeEvents = ({ lang, event_id }:{lang:string,event_id:any}) => {
  const t = useTranslations();
  const [prizes, setPrizes] = useState<GiftProps[]>([]);
  const [selectedPrize, setSelectedPrize] = useState<GiftProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch prizes data
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/show-gift/${event_id}`, {
        headers: {
          "Accept-Language": lang,
        },
      })
      .then((response) => {
        setPrizes(response.data.data);
      })
      .catch((err) => {
        console.error("Error fetching prizes:", err);
      });
  }, [event_id, lang]);

  const handlePrizeClick = (prize:GiftProps) => {
    setSelectedPrize(prize);
    setIsModalOpen(true);
  };

  return (
    <section className="py-[28px]">
      {/* Your existing prize list UI */}
      {prizes.map((prize) => (
        <div
          key={prize.id}
          onClick={() => handlePrizeClick(prize)}
          className="cursor-pointer"
        >
          {/* Prize item UI */}
        </div>
      ))}

      <PrizeInfoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        gift={selectedPrize}
      />
    </section>
  );
};

export default PrizeEvents; 