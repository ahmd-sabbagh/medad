"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import Menu from "../menu/Menu";

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
        onClick={toggleMenu}
        aria-label="Change language"
        aria-expanded={openMenus}
      >
        <span className="text-xl">
          {locale === "ar" ? "العربية" : "English"}
        </span>
        <span className="text-xl">
          <IoIosArrowDown />
        </span>
      </button>
      {openMenus && (
        <Menu>
          <button
            className="block w-full py-4 px-5 text-sm font-semibold bg-white rounded-2xl hover:bg-gray-100 transition-colors"
            onClick={switchLanguage}
          >
            {locale === "ar" ? (
              <span className="block text-end">English</span>
            ) : (
              <span className="block text-end">العربية</span>
            )}
          </button>
        </Menu>
      )}
    </div>
  );
};

export default Language;