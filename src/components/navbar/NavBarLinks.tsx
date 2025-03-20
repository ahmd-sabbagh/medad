"use client";
import "./style.css";
import { headerLinks } from "@/utils/data";
import { setCookie } from "cookies-next";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { navbar_logo } from "@/assets";
import Link from "next/link";

interface Props {
  locale: string;
}

const NavBarLinks = ({ locale }: Props) => {
  const t = useTranslations();
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  const token = localStorage.getItem("token");

  return (
    <div className="NavBarLinks lg:flex-grow">
      {/* Borger Icon */}
      <button
        className="flex justify-center items-center text-4xl outline-menu lg:hidden text-main"
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      >
        <HiOutlineMenu />
      </button>
      {/* Nav Links */}
      <nav
        className={`flex flex-col lg:flex-row lg:items-center lg:justify-center gap-8 lg:gap-12`}
        style={{
          clipPath:
            (openMenu && "polygon(0 0, 100% 0, 100% 100%, 0 100%)") || "",
        }}
      >
        <div className="lg:hidden flex items-center justify-between mb-8">
          <Image width={47} src={navbar_logo} alt="logo" priority />
          <button
            className="flex-c w-6 h-6 text-2xl"
            onClick={() => {
              setOpenMenu(false);
            }}
          >
            <IoClose />
          </button>
        </div>
        {headerLinks.map((link, idx) => (
          <button
            className={`md:text-2xl text-xl nav-link-color transition cursor-pointer ${pathname === link.href ? "active font-bold" : ""
              }`}
            key={idx}
            onClick={() => {
              router.replace(link.href);
              setOpenMenu(false);
            }}
          >
            {t(link.name)}
          </button>
        ))}
        <div className="flex-grow">
          <div className="flex-grow">
            {!token ? (
              <>
                <Link
                  href="/login"
                  className="px-8 py-1 font-main text-xl transition-transform duration-300 hover:scale-105 cursor-pointer float-left"
                >
                  تسجيل الدخول
                </Link>
                <Link
                  href="/register"
                  className="px-8 py-1 bg-main text-white rounded-sm text-xl transition-transform duration-300 hover:scale-105 cursor-pointer float-left"
                >
                  التسجيل
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/profile"
                  className="px-8 py-1 font-main text-xl transition-transform duration-300 hover:scale-105 cursor-pointer float-left"
                >
                  البروفايل
                </Link>
                <Link
                  href="/register"
                  className="px-8 py-1 bg-main text-white rounded-sm text-xl transition-transform duration-300 hover:scale-105 cursor-pointer float-left"
                >
                  تسجيل الخروج
                </Link>
              </>
            )}
          </div>
        </div>
        {/* language */}
        <div className="language mt-4 pt-4 border-t lg:hidden w-full">
          <p className="text-2xl">{t("Language")}</p>
          <button
            type="button"
            className="flex justify-between mt-3 w-full"
            onClick={() => {
              setCookie("NEXT_LOCALE", "ar");
              router.refresh();
            }}
          >
            <p className="text-xl font-bold">{t("Arabic")}</p>
            <div
              className={`circel w-8 h-8 rounded-full ${locale == "ar" ? "active" : ""
                }`}
            ></div>
          </button>
          <button
            type="button"
            className="flex justify-between mt-6 w-full"
            onClick={() => {
              setCookie("NEXT_LOCALE", "en");
              router.refresh();
            }}
          >
            <p className="text-xl font-bold">{t("English")}</p>
            <div
              className={`circel w-8 h-8 rounded-full ${locale == "en" ? "active" : ""
                }`}
            ></div>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBarLinks;
