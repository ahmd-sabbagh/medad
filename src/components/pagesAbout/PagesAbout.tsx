import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { BsExclamationLg } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";

const PagesAbout = () => {
  const t = useTranslations();
  const data = [
    {
      icon: <BsExclamationLg />,
      name: t("Board of Directors"),
      href: "/managers",
    },
    {
      icon: <FaUsers />,
      name: t("Staff"),
      href: "/work-team",
    },
    {
      icon: <FaUsers />,
      name: t("Laws and policies"),
      href: "/privacy-policy",
    },
    {
      icon: <FaUsers />,
      name: t("About Us"),
      href: "/about-us",
    },
  ];
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8">
      {data.map((item, idx) => (
        <Link href={item.href} key={idx} className="h-[140px] bg-[#F2E2CA] rounded-[20px] flex items-center justify-center gap-6">
            <div className="w-12 h-12 rounded-full flex-c bg-main text-white text-3xl">{item.icon}</div>
            <span className="text-2xl font-bold">{item.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default PagesAbout;
