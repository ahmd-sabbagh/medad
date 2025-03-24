"use client";
import { upload } from "@/assets";
import Image from "next/image";
import React from "react";
import { useTranslations } from "use-intl";

interface FormProps {
  onClose?: () => void;
  eventId?: number;
}

const Form = ({ onClose, eventId }: FormProps) => {
  const t = useTranslations();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    onClose?.();
  };

  return (
    <section className="py-[28px] app-form">
      <div className="container">
        <div className="md:max-w-[80%] mx-auto">
          <h3 className="text-xl md:text-2xl font-bold ">
            {t("Submit an application to participate in the event")}
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-8 max-w-[80%] mx-auto">
            <input
              type="text"
              className="bg-white rounded-xl h-[60px] lg:h-[74px] px-6 md:px-[30px]"
              placeholder={t("Full honorable name")}
            />
            <input
              type="text"
              className="bg-white rounded-xl h-[60px] lg:h-[74px] px-6 md:px-[30px]"
              placeholder={t("Search title")}
            />
            <input
              type="text"
              className="bg-white rounded-xl h-[60px] lg:h-[74px] px-6 md:px-[30px]"
              placeholder={t("Search type")}
            />
            <label
              htmlFor="FILE"
              className="h-[176px] rounded-xl border border-[#EFF0F6] p-[28px] flex-c"
            >
              <div className="flex flex-col items-center gap-[10px]">
                <div>
                  <Image src={upload} alt="icon" />
                </div>
                <input type="file" id="FILE" className="hidden" />
                <p className="text-lg text-[#6F6C90]">
                  {t("Upload the search file")}
                </p>
                <p className="text-xs max-w-[289px] mx-auto text-center text-[#6F6C90]">
                  {t("Upload the search file desc")}
                </p>
              </div>
            </label>
            <button 
              type="submit" 
              className="cursor-pointer mt-[10px] block w-full rounded-xl h-[60px] lg:h-[74px] bg-main text-center text-white font-bold text-lg"
            >
              {t("Submit the application")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
