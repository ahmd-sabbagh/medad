import { call, mail } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const HaveQuestion = () => {
  const t = useTranslations();
  return (
    <section className="mt-12 lg:mt-[68px]">
      <div className="container">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
          {/*  */}
          <div className="lg:col-span-2">
            <div className=" font-bold text-2xl md:text-4xl">
              {t("Have a question")}
            </div>
            <div className="md:text-xl">{t("Have a question desc")}</div>
          </div>
          {/*  */}
          <div className="flex items-center gap-3">
            <div className="flex-c min-w-[70px] h-[70px] bg-main rounded-full">
              <Image src={mail} alt="mail-icon" loading="lazy" />
            </div>
            <div className="flex flex-col">
              <span>{t("Email message")}</span>
              <span className="font-bold text-xl md:text-2xl">
                {"medad@info.com"}
              </span>
            </div>
          </div>
          {/*  */}
          <div className="flex items-center gap-3">
            <div className="flex-c min-w-[70px] h-[70px] bg-main rounded-full">
              <Image src={call} alt="mail-icon" loading="lazy" />
            </div>
            <div className="flex flex-col">
              <span>{t("Contact us via number")}</span>
              <span className="font-bold text-xl md:text-2xl">
                {"+٩٦٦٥٥١٩٧٩٣٥٠"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HaveQuestion;
