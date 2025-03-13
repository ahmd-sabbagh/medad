import React from "react";
import { useTranslations } from "next-intl";
const Header = () => {
  const t = useTranslations();
  return (
    <section className="py-16 bg-[#F8F3EC]">
      <div className="container w-full">
        <div className=" h-[150px] max-w-[450px] sm:max-w[300px]  text-center flex justify-around items-center flex-col m-auto">
          <h1 className="text-6xl font-bolder sm:text-4xl"  style={{ fontWeight:"bolder"}}>{t("Faqs")}</h1>
          <div className="relative w-full">
            <input type="text" placeholder={t("Search")} className="w-full h-14 rounded-lg pl-12 pr-4 text-right bg-white border border-gray-300 focus:outline-none" />
            <div className="absolute left-0 top-0 h-full w-14 flex items-center justify-center bg-[#E2AE63] rounded-l-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
