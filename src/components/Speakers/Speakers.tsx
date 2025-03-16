import { persone } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import "./style.css"

const Speakers = () => {
  const t = useTranslations();
  const arr = new Array(8).fill("");
  return (
    <section className="px-12 ">
      <div className="">
        <h3 className="font-bold text-xl lg:text-3xl">{t("Speakers")}</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
          {arr.map((_, idx) => (
            <div className="img-fit h-[200px] md:h-[270px] rounded-xl overflow-hidden relative" key={idx}>
              <Image src={persone} alt="persone" loading="lazy" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-black/20"></div>
              <div className="absolute w-full bottom-0 left-0 px-4 py-3">
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
