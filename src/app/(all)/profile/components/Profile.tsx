"use client";

import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import axios from "axios";
import { edit_icon, profile_image } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Profile = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  // Fetch token in useEffect to avoid Next.js hydration issues
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    if (!token) return; // Prevent API call if token is missing

    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [token]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-semibold text-gray-500">{t("Loading")}</p>
      </div>
    );
  }

  const profile = data?.data;

  return (
    <section>
      <div className="container">
        <div className="flex gap-3 md:gap-5">
          <div className="img-fit w-[100px] h-[100px] lg:w-[284px] lg:h-[277px] rounded-xl overflow-hidden relative">
            <Image
              src={profile?.image || profile_image} // Fallback image
              fill
              className="object-contain"
              alt="profile-image"
              loading="lazy"
            />
            <button className="w-5 md:h-6 absolute top-3 start-3 lg:top-5 lg:start-5 cursor-pointer">
              <Image src={edit_icon} alt="icon-edit" loading="lazy" />
            </button>
          </div>
          <div className="flex flex-col justify-around lg:py-10 grow min-h-full">
            <div>
              <h4 className="text-xl md:text-4xl text-white">
                {profile?.name || "User"}
              </h4>
              <span className="font-bold text-sm md:text-lg">{profile?.type || "N/A"}</span>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <Link
                  href="/profile"
                  className={`flex-c text-xs md:text-xl py-2 px-4 rounded-xl ${
                    pathname === "/profile" ? "bg-main" : "bg-white"
                  }`}
                >
                  {t("Profile")}
                </Link>
                <Link
                  href="/profile/subscriptions"
                  className={`flex-c text-xs md:text-xl py-2 px-4 rounded-xl ${
                    pathname === "/profile/subscriptions" ? "bg-main" : "bg-white"
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
