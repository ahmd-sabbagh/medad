import { persone, save } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Archiveofwinners = () => {
  const t = useTranslations();
  const arr = new Array(10).fill("");
  return (
    <section className="py-[28px]">
      <div className="container">
        <div className="md:max-w-[80%] mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-[#170F49]">
            {t("Archive of winners")}
          </h3>
          <div className="flex items-center gap-2 mt-4">
            <div className="w-[16px]">
              <Image src={save} alt="icon" loading="lazy" />
            </div>
            <p className="text-[#0C0C0CE5]">
              {"جائزة معالي الشيخ صالح الحصين 100,000 SR"}
            </p>
          </div>
          <div className="flex justify-center flex-wrap gap-6 mt-5 md:mt-6">
            {arr.map((_, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1">
                <div className="w-[90px] h-[90px] rounded-full img-fit overflow-hidden">
                  <Image src={persone} alt="persone" loading="lazy" />
                </div>
                <strong className="font-bold text-xl">{"محمد جوبان"}</strong>
                <p className="text-xs text-[#A7A7A7]">{"محمد جوبان"}</p>
              </div>
            ))}
          </div>
          <button
            type="button"
            className=" cursor-pointer mt-8 md:mt-12 block w-full rounded-xl h-[60px] lg:h-[74px] bg-main text-center text-white font-bold text-lg"
          >
            {t("Submit a request for participation")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Archiveofwinners;
