"use client";
import { useTranslations } from "next-intl";
import React from "react";

const Form = () => {
  const t = useTranslations();
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submit} className="max-w-[369px] mx-auto md:mx-0">
      <div className="grid grid-cols-3 gap-2">
        <input
          type="text"
          className="h-12 rounded-lg bg-[#FFFFFF70] col-span-1 p-5"
          placeholder={t("the name")}
        />
        <input
          type="email"
          className="h-12 rounded-lg bg-[#FFFFFF70] col-span-2 p-5"
          placeholder={t("email")}
        />
        <textarea
          placeholder={t("the text")}
          className="bg-[#FFFFFF70] rounded-lg col-span-3 h-[145px] p-5"
        ></textarea>
        <div className="flex justify-end col-span-3">
          <button className="rounded-lg py-3 px-8 bg-main text-white text-lg">
            {t("send")}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
