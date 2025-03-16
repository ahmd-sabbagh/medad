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
          className="rounded-[10px] px-5 md:px-8 py-3 bg-[#F0F0F0] md:col-span-2 text-black placeholder-black"
        />
        <input
          type="email"
          placeholder={t("email")}
          className="rounded-[10px] px-5 py-3 md:px-8 bg-[#F0F0F0] md:col-span-3 text-black placeholder-black"
        />
        <textarea className="h-[200px] md:h-[355px] rounded-[10px] p-5 md:p-8 bg-[#F0F0F0] md:col-span-5 text-black placeholder-black" placeholder={t("the text")}></textarea>
        <button className=" md:col-span-5 rounded-[10px] w-full bg-main text-center text-xl font-bolder py-3">{t("send")}</button>
      </div>
    </form>
  );
};

export default Form;
