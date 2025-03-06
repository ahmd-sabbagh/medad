import { persone } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import "./style.css"

const Speakers = () => {
  const t = useTranslations();
  const arr = new Array(8).fill("");
  return (
    <section className="py-10 md:py-20">
      <div className="container">
        <h3 className="font-bold text-xl lg:text-3xl">{t("Speakers")}</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
          {arr.map((_, idx) => (
            <div className="img-fit h-[200px] md:h-[270px] rounded-xl overflow-hidden relative" key={idx}>
              <Image src={persone} alt="persone" loading="lazy"  />
              <div className="shape-grad absolute top-0 start-0 w-full h-full"></div>
              <div className=" absolute w-full bottom-[0px] start-0 px-4 py-3">
                <div className="font-bold text-white">{"أ جميل المحمدي"}</div>
                <p className="text-main font-bold text-sm">{"محاضر | تخصص العلوم التقنيه"}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
