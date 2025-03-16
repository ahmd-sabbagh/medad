import React from "react";
import { useTranslations } from "next-intl";
const Header = () => {
  const t = useTranslations();
  return (
    <section className="py-4 bg-[#FAFAFA]">
      <div className="container w-full">
        <div className="text-center m-auto">
          <h1 className="text-6xl font-bolder sm:text-4xl" style={{ fontWeight:"bolder"}}>{t("Work Team")}</h1>
            <p className="">
              {t("Work Team Desc 1")}
              <br />
              {t("Work Team Desc 2")}
            </p>       
        </div>
      </div>
    </section>
  );
};
export default Header;
