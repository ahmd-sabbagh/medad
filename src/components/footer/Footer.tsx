"use client"

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslations, useLocale } from "next-intl";
import Form from "./Form";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations();
    const locale = useLocale();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/setting/get-logo`, {
          headers: {
            "Accept-Language": locale,
          },
        })
        .then((response) => {
          setData(response.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
          setLoading(false);
        });
    }, [locale]);
  
    if (loading) {
      return (
        <div className="flex justify-center items-center h-screen">
          <p className="text-2xl font-semibold text-gray-500">{t("Loading")}</p>
        </div>
      );
    }
  
    let logo = data?.logo;

    console.log(data);

  return (
    <section className="bg-black py-8 medad-footer">
      <div className="">
        <div className="grid md:grid-cols-2 items-center gap-5 mx-8">
          <div className="order-2 md:order-1 mt-[-60px]">
            <div className="w-[225px] md:m-0">
              <Image src={logo} alt="logo" loading="lazy" className="object-contain" width={200} height={100}/>
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
