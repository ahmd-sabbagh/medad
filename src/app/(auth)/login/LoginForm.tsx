"use client";
import Button from "@/components/button/Button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useState } from "react";

import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const LoginForm = () => {
  const t = useTranslations();
  const [showPass, setShowPass] = useState(false);

  return (
    <form className="mt-4 md:mt-12 flex flex-col gap-4">
      {/* Email Input */}
      <div className="relative bg-main-20 text-main rounded-[18px] h-[50px]">
        <input
          id="email"
          type="email"
          placeholder={t("Email Address")}
          className="w-full px-5 h-full bg-input pr-12 text-bolder rounded-[18px] focus:outline-none"
        />
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-main">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            height={20}
            width={20}
            viewBox="0 0 491.1 491.1"
          >
            <g>
              <path d="M470.3,46.35H20.9C9.4,46.35,0,55.75,0,67.25v356.6c0,11.5,9.4,20.9,20.9,20.9h448.3c11.5,0,20.9-9.4,21.9-19.8V67.15C491.1,55.75,481.7,46.35,470.3,46.35z M245.1,278.85L67.4,86.95h355.4L245.1,278.85z M449.4,119.35v247l-106.3-132.4L449.4,119.35z M150.2,237.15L40.7,368.45v-249.1L150.2,237.15z M178.4,267.35l52.1,55.3c8.3,8.3,22.9,8.3,30.2,0l54.2-58.4l111.9,139.7H64.4L178.4,267.35z" />
            </g>
          </svg>
        </span>
      </div>

      {/* Password Input */}
      <div className="relative bg-main-20 text-main rounded-[18px] h-[50px]">
        <input
          type={showPass ? "text" : "password"}
          placeholder={t("password")}
          className="w-full px-5 h-full bg-input pr-12 text-bolder rounded-[18px] focus:outline-none"
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-main"
          onClick={() => setShowPass(!showPass)}
        >
          {showPass ? <FaEyeSlash /> : <FaRegEye />}
        </button>
      </div>

      {/* Remember Me & Forgot Password */}
      <div className="flex justify-between items-center mt-2">
        <label htmlFor="remember" className="flex items-center text-black text-xl font-bold px-2">
          <input type="checkbox" id="remember" className="hidden" />
          <span className="checkmark h-4 w-4 inline-block pr-1 border border-black rounded"></span>
          <span className="ml-2">{t("Remember Me")}</span>
        </label>
        <Link href="/" className="text-end text-main text-sm font-bold">
          {t("forget_pass")}
        </Link>
      </div>

      {/* Login Button */}
      <Link
        href={"/success"}
        className="mt-4 bg-main flex items-center justify-center font-medium md:text-xl text-white px-4 rounded-[8px] h-[40px]"
      >
        {t("login")}
      </Link>

      {/* Register Link */}
      <div className="flex items-center justify-center gap-1 my-8">
        <span>{t("no_have_acc")}</span>
        <Link href={"/register"} className="text-main">
          {t("register")}
        </Link>
      </div>

      {/* Login with Phone */}
      <Link
        href={"/login-phone"}
        className="border mt-3 mb-8 border-yellow-500 flex items-center justify-center font-medium md:text-xl text-main px-4 rounded-[8px] h-[40px]"
      >
        {t("login_phone")}
      </Link>
    </form>
  );
};

export default LoginForm;
