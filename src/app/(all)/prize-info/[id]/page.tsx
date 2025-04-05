"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Header from "../Header";
import Info from "../Info";
import Archiveofwinners from "../Archiveofwinners";
import { useTranslations, useLocale } from "next-intl";

const PeizeInfo = () => {

  const t = useTranslations();
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const locale = useLocale();
  const [data, setData] = useState(null);
  const [gift, setGift] = useState<GiftProps>({} as GiftProps);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/show-gift/${params.id}`, {
        headers: {
          "Accept-Language": locale,
        },
      })
      .then((response) => {
        setGift(response.data.data);
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


  return (
    <section>
      <Header />
      <Info gift={gift} />
      <Archiveofwinners />
    </section>
  );
};

export default PeizeInfo;
