"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
// import "./style.css"
import { useTranslations, useLocale } from "next-intl";
import HaveQuestion from "@/components/Question/HaveQuestion";
import Member from "@/components/Member/Member";

const WorkTeamPage = () => {

  const t = useTranslations();
  const locale = useLocale();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [team, setTeam] = useState<MemberProps[]>([]);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/workteam`, {
        headers: {
          "Accept-Language": locale,
        },
      })
      .then((response) => {
        setTeam(response.data.data);
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
    <section className="px-12 bg-[#FAFAFA]">
      <div className="container">
        <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 gap-3">
        {team?.map((member, index) => (
          <Member key={index} member={member} />
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
