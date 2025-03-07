import { useTranslations } from "next-intl";
import React from "react";

const MedadNumber = () => {
  const t = useTranslations();
  const data = [
    {
      num: "٦",
      title: t("Government agencies"),
      description: t("Government agencies desc"),
    },
    {
      num: "٣٠+",
      title: t("International Islamic Organization"),
      description: t("International Islamic Organization desc"),
    },
    {
      num: "٤٦+",
      title: t("Donor institution"),
      description: t("Donor institution desc"),
    },
    {
      num: "٣٠٠٠+",
      title: t("Charitable society"),
      description: t("Charitable society desc"),
    },
  ];
  return (
    <section className="pt-10 md:pt-20">
      <div className="container">
        <div>
          <h4 className="font-bold text-2xl md:text-5xl text-center">
            {t("Ink in numbers")}
          </h4>
          <p className="md:text-2xl text-center max-w-[351px] mx-auto mt-2">
            {t("Success stories we achieved with our success partners")}
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-6 md:mt-10">
          {data.map((item, idx) => (
            <div key={idx} className="">
              <div className="pb-4 mb-4 border-b border-[#00000040]">
                <div className="font-bold text-3xl md:text-5xl">{item.num}</div>
                <div className="font-bold text-xl md:text-2xl text-main">{item.title}</div>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedadNumber;
