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
    <div className="mt-4 md:mt-12 flex flex-col gap-5 pb-4">
      <div className="relative bg-main-20 text-main rounded-[18px] h-[40px] md:h-[50px]">
                    <input
                        id="phone"
                        type="text"
                        placeholder={t("Phone Number")}
                        className="w-full px-5 h-full pl-10 bg-input pr-10 text-bolder"
                    />
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
                                d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2 0v10h12V5H4zm3 1a1 1 0 100 2h6a1 1 0 100-2H7z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </div>
                <Link href={"/verify"}
                type="button"
                className={`bg-main flex-c font-medium md:text-xl text-white px-4 rounded-[8px] h-[40px]`}
                
            >
                {t("login")} 
            </Link>
      <Link
        href={"/login"}
        className="border mt-12 border-yellow-500 flex-c font-medium md:text-xl text-main px-4 rounded-[8px] h-[40px]"
      >
        {t("sign_by_email")}
      </Link>
    </div>
  );
};

export default LoginForm;
