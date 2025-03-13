"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import HaveQuestion from "@/components/Question/HaveQuestion";
import Manager from "@/components/Manager/Manager";

const ManagerPage = () => {
  
  const t = useTranslations();
  const onsubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <section className="px-12 bg-[#FAFAFA]">
      <div className="container">
        <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 gap-3">
        {[...Array(4)].map((_, index) => (
          <Manager/>
        ))}
        </div>
        <div className="mb-16">
          <HaveQuestion />
        </div>
      </div>
    </section>
  );
};

export default ManagerPage;
