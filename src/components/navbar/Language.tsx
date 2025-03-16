"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { setCookie } from "cookies-next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Menu from "../menu/Menu";
import { saudi_arabia_flag, usa_flag } from "@/assets";

interface Props {
  locale: string;
}

const Language = ({ locale }: Props) => {
  const [openMenus, setOpenMenus] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setOpenMenus(!openMenus);
  };

  const switchLanguage = () => {
    const newLocale = locale === "ar" ? "en" : "ar";
    setCookie("NEXT_LOCALE", newLocale, { path: "/" });
    router.refresh(); // Refresh the page to apply the new locale
    setOpenMenus(false); // Close the menu after switching
  };

  return (
    <div className="Language relative hidden lg:block">
      <button
      className="flex items-center gap-2 lang-btn"
      onClick={() => {
        locale == "ar"
        ? setCookie("NEXT_LOCALE", "en")
        : setCookie("NEXT_LOCALE", "ar");
        router.refresh();
        setOpenMenus(!openMenus);
      }}
      >
      <span className="text-xl">
        <Image
        src={locale == "en" ? saudi_arabia_flag : usa_flag}
        alt={locale == "en" ? "العربية" : "English"}
        width={35}
        height={20}
        />
      </span>
      </button>
    </div>
  );
};

export default Language;