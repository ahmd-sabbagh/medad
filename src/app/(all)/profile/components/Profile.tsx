"use client";
import { edit_icon, profile_image } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Profile = () => {
  const t = useTranslations();
  const pathname = usePathname();
  return (
    <section>
      <div className="container">
        <div className="flex gap-3 md:gap-5">
          <div className="img-fit w-[100px] h-[100px] lg:w-[284px] lg:h-[277px] rounded-xl overflow-hidden relative">
            <Image src={profile_image} alt="profile-image" loading="lazy" />
            <button className="w-5 md:h-6 absolute top-3 start-3 lg:top-5 lg:start-5 cursor-pointer">
              <Image src={edit_icon} alt="icon-edit" loading="lazy" />
            </button>
          </div>
          <div className="flex flex-col justify-around lg:py-10 grow min-h-full">
            <div>
              <h4 className="text-xl md:text-4xl text-white">
                {"د . خالد الشقيري"}
              </h4>
              <span className="font-bold text-sm md:text-lg">{"محاضر"}</span>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <Link
                  href={"/profile"}
                  className={`flex-c text-xs md:text-xl py-2 px-4 rounded-xl ${
                    pathname == "/profile" ? "bg-main" : "bg-white"
                  }`}
                >
                  {t("Profile")}
                </Link>
                <Link
                  href={"/profile/subscriptions"}
                  className={`flex-c text-xs md:text-xl py-2 px-4 rounded-xl ${
                    pathname == "/profile/subscriptions"
                      ? "bg-main"
                      : "bg-white"
                  }`}
                >
                  {t("Subscriptions and orders")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
