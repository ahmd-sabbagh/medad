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
    <form className="mt-4 md:mt-12 flex flex-col gap-5 pb-4">
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder={t("mobile")}
          className="px-5 h-[60px] md:h-[70px] bg-input rounded-[18px]"
        />
      </div>
      <Button className="md:mt-4" name={t("login")} />
      <Link
        href={"./login"}
        className="border mt-5 md:mt-10 border-yellow-500 flex-c font-medium md:text-xl text-main px-4 rounded-[18px] h-[52px] md:h-[70px]"
      >
        {t("sign_by_email")}
      </Link>
    </form>
  );
};

export default LoginForm;
