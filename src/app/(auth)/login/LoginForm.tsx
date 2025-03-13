"use client"
import Button from "@/components/button/Button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useState } from "react";

import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const LoginForm = () => {
  const t = useTranslations();
    const [showPass, setShowPass] = useState(false)
  return (
    <form className="mt-4 md:mt-12 flex flex-col gap-5 pb-4">
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder={t("email")}
          className="px-5 h-[60px] md:h-[70px] bg-input rounded-[18px]"
        />
      </div>
      {/* Password */}
      <div className="flex flex-col gap-3">
        <div className="h-[60px] md:h-[70px] bg-input rounded-[18px] flex items-center gap-6 px-5">
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
      </div>

      <Link href={"/recovery"} className="text-end text-main text-sm">
        {t("forget_pass")}
      </Link>
      <Button className="md:mt-4" name={t("login")} />
      <div className="flex items-center justify-center gap-1">
        <span>{t("no_have_acc")}</span>
        <Link href={"/register"} className="text-main">
          {t("register")}
        </Link>
      </div>
      <Link href={"./login-phone"} className="border mt-5 md:mt-10 border-yellow-500 flex-c font-medium md:text-xl text-main px-4 rounded-[18px] h-[52px] md:h-[70px]">{t("login_phone")}</Link>
    </form>
  );
};

export default LoginForm;
