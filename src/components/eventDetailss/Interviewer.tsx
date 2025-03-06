import { useTranslations } from "next-intl";
import React from "react";

const Interviewer = () => {
  const t = useTranslations();
  return (
    <div className="mt-8">
      <h3 className="font-bold text-xl lg:text-3xl">{t("Interviewer")}</h3>
      <div className="grid gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-4 mt-8">
        {[1, 2, 3, 4].map((_, idx) => (
          <div className="p-5 md:p-6 rounded-xl h-[200px] md:h-[277px] flex-c bg-[#f3e7d6]" key={idx}>
            <p className="font-bold md:text-xl text-center">
              {
                "استثمار التقنيات الحديثة في تطويـر أبـحـاث ومـعلـومـات العـمــل الخيـــري والأوقـــــاف"
              }
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interviewer;
