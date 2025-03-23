import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import "./style.css"

const Job = ({ job }) => {
  const t = useTranslations();
  const arr = new Array(8).fill("");

  return (
    <div className="flex items-center  rounded-xl w-full h-full job">
      <div className="">
        <Image src={job.image} alt="Profile" width={168} height={128} className="w-full h-full max-h-[128px] max-w-[168px] mr-[-10px]" />
      </div>
      <div className="flex-grow px-6">
        <h2 className="text-xl font-bold mb-2 ml-6">{job.title}</h2>
        <button className=" bg-[#E2AE63] text-black px-8 cursor-pointer  float-left rounded">{t("Submit Now")}</button>
      </div>
    </div>
  );
};

export default Job;
