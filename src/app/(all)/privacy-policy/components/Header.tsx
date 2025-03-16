import React from "react";
import { useTranslations } from "next-intl";
const Header = () => {
  const t = useTranslations();
  return (
    <section className="py-4 bg-white">
      <div className="container w-full">
        <div className="text-center m-auto">
          <h1 className="text-6xl font-bolder sm:text-4xl" style={{ fontWeight:"bolder"}}>{t("Privacy Policy")}</h1>
            <p className="">
              {t("Privacy Policy Desc 1")}
              <br />
              {t("Privacy Policy Desc 2")}
            </p>
          
        </div>
      </div>
    </section>
  );
};
export default Header;
