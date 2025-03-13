import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import OtpForm from "./Form";

const Otp = () => {
  const t = useTranslations();
  return (
    <div>
      <div className="head mt-6 md:m-0">
        <Link
          href={""}
          className="flex justify-center items-center w-10 h-10 rounded-lg "
          style={{ backgroundColor: "#E9EFF5" }}
        >
          <IoIosArrowForward />
        </Link>
        <h2 className="text-lg md:text-xl mt-4">{t("Verify your identity")}</h2>
        <div className="text-xs flex flex-col mt-3 text-gray-400">
          <span className="hent-color">{t("We have sent a 6-digit code to")}</span>
          <span className="text-black font-medium">{"Ahmed203@almaraji.com "}</span>
          <span className="hent-color">{t("This code will be valid for minutes")}</span>
        </div>
      </div>
      <OtpForm />
    </div>
  );
};

export default Otp;
