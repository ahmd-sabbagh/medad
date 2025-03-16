"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import HaveQuestion from "@/components/Question/HaveQuestion";
import Plan from "@/components/Plan/Plan";

const MemberShipsPage = () => {
  
  const t = useTranslations();
  const onsubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <section className="px-12 ">
      <div className="container">
        <div className="mx-auto grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-6 bg-white justify-center items-center rounded-xl">
          <Plan index={0} title="العضوية الذهبية" price="2999" items={["20% زيادة فى المبيعات" , "تمكنك من عرض منتجاتك فى التطبيق حتى 3000 منتج"]} isActive={false}/>
          <Plan index={1} title="العضوية العادية" price="999" items={["20% زيادة فى المبيعات" , "تمكنك من عرض منتجاتك فى التطبيق حتى 1000 منتج"]} isActive={true}/>
          <Plan index={2} title="العضوية الفضية" price="1999" items={["20% زيادة فى المبيعات" , "تمكنك من عرض منتجاتك فى التطبيق حتى 2000 منتج"]} isActive={false}/>
          </div>
        <div className="mb-16">
          <HaveQuestion />
        </div>
      </div>
    </section>
  );
};

export default MemberShipsPage;
