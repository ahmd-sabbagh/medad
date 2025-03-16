"use client"
import Button from "@/components/button/Button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useState } from "react";

import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const LoginForm = () => {
  const t = useTranslations();
  const [showPass, setShowPass] = useState(false);
  return (
    <form className="mt-4 md:mt-12 flex flex-col gap-2">
      <div className="flex flex-col gap-3">
        <div className="relative bg-main-20 text-main rounded-[18px] h-[40px] md:h-[50px]">
          <input
            id="email"
            type="email"
            placeholder={t("Email Address")}
            className="w-full px-5 h-full pl-10 bg-input pr-10 text-bolder"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-main">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor" height={20} width={20} version="1.1" id="Capa_1" viewBox="0 0 491.1 491.1" xmlSpace="preserve">
              <g>
                <path d="M470.3,46.35H20.9C9.4,46.35,0,55.75,0,67.25v356.6c0,11.5,9.4,20.9,20.9,20.9h448.3c11.5,0,20.9-9.4,21.9-19.8V67.15   C491.1,55.75,481.7,46.35,470.3,46.35z M245.1,278.85L67.4,86.95h355.4L245.1,278.85z M449.4,119.35v247l-106.3-132.4L449.4,119.35   z M150.2,237.15L40.7,368.45v-249.1L150.2,237.15z M178.4,267.35l52.1,55.3c8.3,8.3,22.9,8.3,30.2,0l54.2-58.4l111.9,139.7H64.4   L178.4,267.35z" />
              </g>
            </svg>
          </span>
        </div>
      </div>
      {/* Password */}
      <div className="flex flex-col gap-0">
        <label htmlFor="password" className="md:text-lg font-medium">
          {t("Password")} <span className="mx-2">*</span>
        </label>
        <div className="relative bg-main-20 text-main rounded-[18px] h-[40px] md:h-[50px]">
          <div className="h-full bg-input flex items-center gap-0 px-5 mr-8">
            <input
              type={showPass ? "text" : "password"}
              placeholder={t("password")}
              className="flex-grow place_yellow"
            />
            <button
              type="button"
              className="text-xl text-main"
              onClick={() =>
                setShowPass(!showPass)
              }
            >
              {showPass ? <FaEyeSlash /> : <FaRegEye />}
            </button>
          </div>
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-main">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-main"
              viewBox="0 0 20 20"
              fill="#ffffffff"
              style={{ opacity: 1, stroke: "currentColor", strokeWidth: 2 }}
            >
              <path
                fillRule="evenodd"
                d="M5 8V6a5 5 0 0110 0v2h1a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6a2 2 0 012-2h1zm2-2v2h6V6a3 3 0 00-6 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </div>
      </div>
      {/* Remember Me */}
      <div className="flex justify-between items-center mt-2">

      <div className="flex items-center">
        <label htmlFor="remember" className="text-black text-xl font-bolde px-2">
          <input type="checkbox" id="remember" className="hidden" />
            <span className="checkmark h-4 w-4 inline-block pr-1"></span>
          <span className="mr-2 mt-[-10px]">
            {t("Remember Me")}
            </span>
        </label>
      </div>
      <Link href={"/"} className="text-end text-main text-sm font-bolder">
        {t("forget_pass")}
      </Link>
      </div>
      <Link href={"/success"}
                type="button"
                className={`mt-4 bg-main flex-c font-medium md:text-xl text-white px-4 rounded-[8px] h-[40px]`}
                
            >
                {t("login")} 
            </Link>
      <div className="flex items-center justify-center gap-1 my-8">
        <span>{t("no_have_acc")}</span>
        <Link href={"/register"} className="text-main">
          {t("register")}
        </Link>
      </div>
      <Link href={"./login-phone"} className="border mt-3 mb-8 border-yellow-500 flex-c font-medium md:text-xl text-main px-4 rounded-[8px] h-[40px]">{t("login_phone")}</Link>
    </form>
  );
};

export default LoginForm;
