import { useTranslations } from "next-intl";
import React from "react";

const Form = () => {
  const t = useTranslations();
  return (
    
    <form className="mt-10 md:mt-20 md:max-w-[85%] lg:max-w-[70%] mx-auto">
      <div className="grid md:grid-cols-5 gap-5">
        <input
          type="text"
          placeholder={t("the name")}
          className="h-[60px] md:h-[82px] rounded-xl px-5 md:px-8 bg-[#F0F0F0] md:col-span-2"
        />
        <input
          type="email"
          placeholder={t("email")}
          className="h-[60px] md:h-[82px] rounded-xl px-5 md:px-8 bg-[#F0F0F0] md:col-span-3"
        />
        <textarea className="h-[200px] md:h-[355px] rounded-xl p-5 md:p-8 bg-[#F0F0F0] md:col-span-5" placeholder={t("the text")}></textarea>
        <button className=" md:col-span-5 h-[60px] md:h-[82px] rounded-xl w-full bg-main text-center text-xl font-bold">{t("send")}</button>
      </div>
    </form>
  );
};

export default Form;
