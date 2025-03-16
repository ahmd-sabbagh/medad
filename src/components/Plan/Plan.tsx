import { job_image } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import "./style.css"

interface FaqProps {
  index: number;
  title: string;
  price: string;
  items: Array<string>;
  isActive: boolean;
}

const Plan: React.FC<FaqProps> = ({ index, title, price, items, isActive }) => {
  const t = useTranslations();
  const arr = new Array(8).fill("");

  return (
    <div className="flex items-start rounded-xl w-full h-full flex-col p-4 px-16 text-right">
      <div className="flex items-start rounded-xl w-full h-full flex-col px-6">
        <h2 className={`font-bold text-xl  ${isActive ? 'text-[#E2AE63]': 'text-black' }`} style={{ fontWeight: "bold" }}>{title}</h2>
        <div className="flex justify-between ">
          <span className={`font-bolder text-2xl  ${isActive ? 'text-[#E2AE63]': 'text-black' }`} style={{ fontWeight: "bolder" }}> {price} ريال </span>
        </div>
        <div className="flex items-start flex-col mr-2 gap-4 mb-32 mt-4">
          {items.map((item) => (
            <div className="flex items-start mb-2" key={index}>
                <div className={`w-6 h-6 max-w-[23px] rounded-full  ${isActive ? 'bg-[#E2AE63]': 'bg-black' } flex items-center justify-center`} style={{flexBasis:"50px"}}>
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                </div>
              <span className="text-black mr-4" style={{ overflow: "brack-word" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <button className={`mt-4 px-4 py-2 w-full text-white rounded-lg ${isActive ? 'bg-[#E2AE63]': 'bg-black' }`}>{isActive ? t("Used") :t("Choice")}</button>
    </div>
  );
};

export default Plan;
