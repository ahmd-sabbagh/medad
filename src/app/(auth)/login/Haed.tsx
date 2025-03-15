import { useTranslations } from "next-intl";
import React from "react";

const Haed = () => {
  const t = useTranslations();
  return (
    <div>
      <h3 className="text-xl md:text-[28px] font-bold">{t("Log in to your account")}</h3>
      <p className="md:text-xl">{t("login_desc")}</p>
      <div className="flex items-center max-w-[90%] mx-auto mt-4">
        <div className="w-full h-[2px] bg-gray-300">

        </div>
        <p className="tex-sm md:text-base font-bolder px-2 min-w-fit">{t("Enter your data to log in")}</p>
        <div className="w-full h-[2px] bg-gray-300">

        </div>
      </div>
    </div>
  );
};

export default Haed;
