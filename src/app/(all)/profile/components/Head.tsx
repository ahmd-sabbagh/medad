import { useTranslations } from "next-intl";
import React from "react";

const Head = () => {
  const t = useTranslations();
  return (
    <div className="text-white pt-10 md:pt-[58px]">
      <h4 className="font-bold text-2xl lg:text-5xl text-center">{t("My account")}</h4>
      <p className="lg:text-2xl max-w-[914px] mx-auto text-center mt-2">{t("My account desc")}</p>
    </div>
  );
};

export default Head;
