import { about_bg_shape, search } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Header = () => {
  const t = useTranslations();
  const data = [
    "الفعاليات",
    "الأمسيات",
    "اللقاءات",
    "المؤتمرات",
    "الندوات",
    "هذا الشهر",
    "الرياض",
  ];
  return (
    <section className="bg-main py-10 md:py-12 bg-image" style={{ backgroundImage: `url(${about_bg_shape.src})` }}>
      <div className="container">
        <h2 className="text-center text-white text-3xl md:text-5xl font-bold">
          {t("Events Calendar")}
        </h2>
        <p className="max-w-[914px] text-white text-center md:text-2xl mt-2 mx-auto">
          {t("event_desc")}
        </p>
        <div className="bg-white rounded-lg overflow-hidden h-10 md:h-[55px] max-w-[489px] mx-auto mt-6 md:mt-11 flex items-center">
          <input className="grow px-4" type="text" placeholder={t("serch")} />
          <button className="flex-c h-full w-[57px] bg-[#E8D2B0]">
            <Image src={search} alt="search-icon" loading="lazy" />
          </button>
        </div>
        {/* checkbox */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mt-3 md:mt-4">
          {data.map((item, idx) => (
            <div className="chbx" key={idx}>
              <input type="checkbox" id={item} className="hidden" />
              <label
                htmlFor={item}
                className="rounded-lg p-2 md:p-3 md:px-5 block cursor-pointer"
              >
                <span className="md:text-xl">{item}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Header;
