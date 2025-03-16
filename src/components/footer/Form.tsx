"use client";
import { useTranslations } from "next-intl";
import React from "react";

const Form = () => {
  const t = useTranslations();
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div  className="max-w-[369px] mx-auto md:mx-0">
      <div className="grid grid-cols-3 gap-2">
        <input
          type="text"
          className="rounded-[5px] text-white bg-[#FFFFFF33] col-span-1 px-3 py-2"
          placeholder={t("the name")}
        />
        <input
          type="email"
          className="rounded-[5px] text-white bg-[#FFFFFF33] col-span-2 px-3 py-2"
          placeholder={t("email")}
        />
        <textarea
          placeholder={t("the text")}
          className="bg-[#FFFFFF33] rounded-[5px] text-white col-span-3 h-[125px] px-3"
        ></textarea>
        <div className="flex justify-end col-span-3">
          <button className="rounded-[5px] text-white py-0 px-8 bg-[#EA9300] text-lg">
            {t("send")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
