import { useTranslations } from "next-intl";
import React from "react";

const Header = () => {
  const t = useTranslations();
  return (
    <div className="container">
      <h3 className="font-bold text-3xl md:text-5xl text-center">
        {t("About Medad")}
      </h3>
      <p className="max-w-[845px] mx-auto text-center md:text-2xl mt-3">
        {t("abutUsDesc")}
      </p>
    </div>
  );
};

export default Header;
