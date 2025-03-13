"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import HaveQuestion from "@/components/Question/HaveQuestion";
import Role from "./subscriptions/components/Role";

const PrivacyPolicyPage = () => {
  
  const t = useTranslations();
  const onsubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <section className="px-12">
      <div className="container  bg-[#F8F3EC] rounded-lg">
        <div className="mx-auto">
          <div className="flex justify-center items-center gap-4 flex-col w-full py-6">
            {[...Array(5)].map((_, index) => (
                <Role index={index} title={"جمع و أستخدام المعلومات"} desc={"نقوم بجمع البيانات الأساسية مثل الاسم و البريد الإلكترونى عند التسجيل . بالإضافة الى معلومات التصفح لتحسين تجربتك . تستخدم هذة البيانات لتحسين تجربتك . تخصيص المحتوى . و تحسين استراتيجية التسويق ."}/>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
          <div className="mb-16 w-full">
          <HaveQuestion />
          </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
