import { message_icon, view_icon } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const OurVision = () => {
  const t = useTranslations();
  const data = [
    {
      icon: message_icon,
      title: t("the message"),
      description: t("the message desc"),
    },
    {
      icon: view_icon,
      title: t("The vision"),
      description: t("The vision desc"),
    },
  ];
  return (
    <section className="py-10 md:py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
          <div className="text-2xl lg:text-5xl font-bold text-center">
            {t("Our vision and mission")}
          </div>
          {data.map((item,idx) => (
            <div className="flex items-center bg-[#E2AE6352] rounded-[36px] p-4 md:p-5 gap-4 md:gap-8" key={idx}>
                <div className="flex-c min-w-[45px]">
                    <Image src={item.icon} alt="icon" loading="lazy" />
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-xl md:text-2xl">{item.title}</span>
                    <span>{item.description}</span>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurVision;
