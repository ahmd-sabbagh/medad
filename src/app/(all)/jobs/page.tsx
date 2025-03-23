"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslations, useLocale } from "next-intl";
import HaveQuestion from "@/components/Question/HaveQuestion";
import Job from "@/components/Job/Job";
import toast, { Toaster } from "react-hot-toast";

const JobsPage = () => {
  const t = useTranslations();
  const locale = useLocale();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isTokenValid, setIsTokenValid] = useState(false);
  const [appliedJobIds, setAppliedJobIds] = useState([]);

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    // Fetch jobs
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs`, {
        headers: { "Accept-Language": locale },
      })
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
        setLoading(false);
      });
  }, [locale]);

  useEffect(() => {
    // Check token validity
    if (token) {
      axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/check`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setIsTokenValid(response.data.status);
        })
        .catch(() => {
          setIsTokenValid(false);
        });
    } else {
      setIsTokenValid(false);
    }
  }, [token]);

  useEffect(() => {
    // Fetch applied job IDs
    if (isTokenValid) {
      axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs/get-applicants-ids`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setAppliedJobIds(response.data.ids || []);
        })
        .catch((err) => {
          console.error("Error fetching applied job IDs:", err);
        });
    }
  }, [isTokenValid]);

  const handleJobApplied = (jobId) => {
    setAppliedJobIds((prev) => [...prev, jobId]); // Update applied job IDs dynamically
  };

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
      <Toaster />
      <div className="container">
        <div className="mx-auto grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-6 gap-6">
          {jobs?.map((job, index) => (
            <Job
              key={index}
              job={job}
              isTokenValid={isTokenValid}
              token={token}
              appliedJobIds={appliedJobIds}
              onJobApplied={handleJobApplied} // Pass function to update state
            />
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
