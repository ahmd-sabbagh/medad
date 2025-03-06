import { useTranslations } from "next-intl";
import React from "react";
import "./style.css";

const MainTitle = () => {
  const t = useTranslations();
  return (
    <div className="MainTitle p-5 md:p-8 lg:p-12 rounded-xl mt-10 md:mt-20">
      <h3 className="text-2xl text-main">{t("Main title")}</h3>
      <p className="max-w-[533px] font-bold text-xl md:text-4xl mt-2">
        {"مستقبـل أبحـاث ومعلومـات العـمــل الخيـــري والأوقـــــاف"}
      </p>
    </div>
  );
};

export default MainTitle;
