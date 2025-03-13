"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Faq from "./subscriptions/components/Faq";
import HaveQuestion from "@/components/Question/HaveQuestion";

const FaqsPage = () => {
  
  const t = useTranslations();
  const onsubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <section className="py-6 px-12">
      <div className="container">
        <div className="container max-w-7xl mx-auto">
          <div className="flex justify-center items-center gap-4 flex-col w-full ">
            {[...Array(5)].map((_, index) => (
                <Faq index={index} question={"ماهي الخدمات اللتي توفرها مداد؟"} answer={"شهد العمل الخيري تطورات كبيرة انتقل معها من الجهود الفردية إلى العمل المؤسسي، مما استدعى تنظيمه لتحقيق أهدافه بفعالية. لذا جاء مداد كمركز متخصص في الدراسات والبحوث لدعم صناع القرار والمختصين، وتعزيز دور العمل الخيري في نهضة الأمة."}/>
            ))}
          </div>
          <HaveQuestion />
        </div>
      </div>
    </section>
  );
};

export default FaqsPage;
