import React from "react";
import Form from "./Form";
import Image from "next/image";
import { navbar_logo } from "@/assets";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations();
  return (
    <section className="bg-black py-8 medad-footer">
      <div className="">
        <div className="grid md:grid-cols-2 items-center gap-5 mx-8">
          <div className="order-2 md:order-1 mt-[-60px]">
            <div className="w-[225px] md:m-0">
              <Image src={navbar_logo} alt="logo" loading="lazy" />
            </div>
            <div className="grid grid-cols-2 gap-2 md:gap-4 mt-6 max-w-[400px] mr-4">
              <Link href={"/privacy-policy"} className="text-main md:text-xl">
                {t("privacy policy")}
              </Link>
              <Link href={"/contact-us"} className="text-main md:text-xl">
                {t("contactUs")}
              </Link>
              <Link href={"/jobs"} className="text-main md:text-xl">
                {t("the jobs")}
              </Link>
              <Link href={"/faqs"} className="text-main md:text-xl">
                {t("faqs")}
              </Link>
            </div>
          </div>
          <div className="flex justify-end order-1 md:order-2">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
