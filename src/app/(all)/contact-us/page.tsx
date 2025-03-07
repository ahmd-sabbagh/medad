import { useTranslations } from "next-intl";
import React from "react";
import Form from "./Form";
import { HaveAquestion } from "@/components";

const ContactUsPage = () => {
  const t = useTranslations();
  return (
    <section className="py-10 md:py-20 bg-[#fdfdfd]">
      <div className="container">
        <div>
          <h4 className="font-bold text-2xl md:text-5xl text-center">
            {t("contactUs")}
          </h4>
          <p className="text-center max-w-[437px] mx-auto mt-2 text-[#0C0C0CE5]">
            {t("contactUs desc")}
          </p>
        </div>
        <Form />
        <HaveAquestion />
      </div>
    </section>
  );
};

export default ContactUsPage;
