import React from "react";
import { useTranslations } from "next-intl";
const Header = () => {
  const t = useTranslations();
  return (
    <section className="py-4 bg-[#FAFAFA]">
      <div className="container w-full">
        <div className="text-center m-auto">
          <h1 className="text-6xl font-bolder sm:text-4xl" style={{ fontWeight:"bolder"}}>{t("Manager")}</h1>
            <p className="">
              {t("Manager Desc 1")}
              <br />
              {t("Manager Desc 2")}
            </p>       
        </div>
      </div>
    </section>
  );
};
export default Header;
