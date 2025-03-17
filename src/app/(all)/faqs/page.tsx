"use client";

import Faq from "./subscriptions/components/Faq";
import HaveQuestion from "@/components/Question/HaveQuestion";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";

const FaqsPage = () => {
    const t = useTranslations();
    const locale = useLocale();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const params = useParams();

    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/faq`, {
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

  let faqs = data?.data;

  return (
    <section className="py-6 px-12">
      <div className="container">
        <div className="container max-w-7xl mx-auto">
          <div className="flex justify-center items-center gap-4 flex-col w-full ">
            {faqs?.map((faq, index) => (
                <Faq index={index} question={faq.question} answer={faq.answer}/>
            ))}
          </div>
          <HaveQuestion />
        </div>
      </div>
    </section>
  );
};

export default FaqsPage;
