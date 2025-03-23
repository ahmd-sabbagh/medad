import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./style.css";

const Job = ({ job, isTokenValid, token, appliedJobIds, onJobApplied }) => {
  const t = useTranslations();
  const hasApplied = appliedJobIds.includes(job.id); // Check if already applied

  const handleApply = () => {
    if (!isTokenValid) {
      toast.error(t("Your session has expired. Please log in again."));
      return;
    }

    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs/send-applicants/${job.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        toast.success(t("Application submitted successfully!"));
        onJobApplied(job.id); // Update applied job state in JobsPage
      })
      .catch(() => {
        toast.error(t("Failed to submit application. Please try again."));
      });
  };

  return (
    <div className="flex items-center justify-content-between rounded-xl w-full h-full job">
      <div>
        <Image
          src={job.image}
          alt="Profile"
          width={168}
          height={128}
          className="w-full h-full max-h-[128px] max-w-[168px] mr-[-10px]"
        />
      </div>
      <div className="flex-grow px-6 w-fit flex flex-col">
        <h2 className="text-xl font-bold mb-2 ml-6 ml-auto w-fit">{job.title}</h2>
        <button
          onClick={handleApply}
          disabled={!isTokenValid || hasApplied}
          className={`bg-[#E2AE63] text-black px-8 cursor-pointer float-left rounded ml-auto w-fit ${
            !isTokenValid || hasApplied ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {hasApplied ? t("Already Applied") : t("Submit Now")}
        </button>
      </div>
    </div>
  );
};

export default Job;
