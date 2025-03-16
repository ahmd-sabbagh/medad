import AuthShape from "@/components/authShape/AuthShape";
import React from "react";
import { done, register_img } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button/Button";
import AuthBackBtn from "@/components/AuthBackBtn/AuthBackBtn";

const VerifyPage = () => {
  const t = useTranslations();
  return (
    <AuthShape image={register_img}>
      <section className="mt-[200px] md:mt-0 grow flex-c">
      <AuthBackBtn/>
        <div className="container">
          <div className="grid md:grid-cols-2 md:gap-20">
            <div className="flex flex-col justify-center items-center gap-3">
                <div className="w-[215px]">
                  <Image src={done} alt="done" loading="lazy" />
                </div>
                <h5 className="font-bold text-2xl md:text-3xl">
                  {t("Your account has been successfully registered")}
                </h5>
                <p className="md:text-2xl max-w-[364px] font-light text-center">
                  {t(
                    "You can now follow the website and view all its unique features"
                  )}
                </p>
                <Link href={"/verify"}
                type="button"
                className={`bg-main flex-c font-medium md:text-xl text-white px-4 rounded-[8px] h-[40px]`}
                
            >
                {t("Go to main page")}
            </Link>
                <Link
                  href={"/login"}
                  className=" w-full  flex-c font-medium md:text-xl px-4 rounded-[18px] h-[52px] md:h-[70px]"
                >
                  {t("Go to my account")}
                </Link>
           
            </div>
          </div>
        </div>
      </section>
    </AuthShape>
  );
};

export default VerifyPage;
