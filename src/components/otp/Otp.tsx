import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import OtpForm from "./Form";
import "./style.css"

const Otp = () => {
  const t = useTranslations();
  return (
    <div>
      <div className="head mt-6 md:m-0">
        <div className="otp-page">
          <h2 className="text-2xl font-bolder mt-4">{t("Verify your identity")}</h2>
          <div className="text-xs flex flex-col mt-3 gap-4">
            <span className="font-bolder">{t("We have sent a 6-digit code to")}</span>
            <span className="font-bolder">{t("This code will be valid for minutes")}</span>
          </div>
        </div>
      </div>
      <OtpForm />
    </div>
  );
};

export default Otp;
