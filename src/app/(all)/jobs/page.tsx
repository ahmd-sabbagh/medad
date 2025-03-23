"use client"

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslations, useLocale } from "next-intl";
import HaveQuestion from "@/components/Question/HaveQuestion";
import Job from "@/components/Job/Job";

const JobsPage = () => {
  const t = useTranslations();

  const locale = useLocale();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs`, {
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

  let jobs = data?.data;

  return (
    <section className="px-12 bg-[#FAFAFA]">
      <div className="container">
        <div className="mx-auto grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-6 gap-6">
          {jobs?.map((job, index) => (
            <Job key={index} job={job} />
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
