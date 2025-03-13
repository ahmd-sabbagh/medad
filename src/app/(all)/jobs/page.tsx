"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import HaveQuestion from "@/components/Question/HaveQuestion";
import Manager from "@/components/Manager/Manager";
import Job from "@/components/Job/Job";

const JobsPage = () => {
  
  const t = useTranslations();
  const onsubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <section className="px-12 bg-[#FAFAFA]">
      <div className="container">
        <div className="mx-auto grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-6 gap-6">
        {[...Array(6)].map((_, index) => (
          <Job/>
        ))}
        </div>
        <div className="mb-16">
          <HaveQuestion />
        </div>
      </div>
    </section>
  );
};

export default JobsPage;
