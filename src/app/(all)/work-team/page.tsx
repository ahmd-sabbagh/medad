"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import HaveQuestion from "@/components/Question/HaveQuestion";
import Member from "@/components/Member/Member";

const WorkTeamPage = () => {
  
  const t = useTranslations();
  const onsubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <section className="px-12 bg-[#FAFAFA]">
      <div className="container">
        <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 gap-3">
        {[...Array(8)].map((_, index) => (
          <Member/>
        ))}
        </div>
        <div className="mb-16">
          <HaveQuestion />
        </div>
      </div>
    </section>
  );
};

export default WorkTeamPage;
