"use client";
import React from "react";
import { useTranslations } from "next-intl";
import HaveQuestion from "./components/HaveQuestion";

const ProfilePage = () => {
  const t = useTranslations();
  const onsubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <section className="py-12 md:py-20 bg-[#F3F3F3]">
      <div className="container">
        <h4 className="text-2xl lg:text-4xl font-bold">
          {t("Personal information")}
        </h4>
        {/* Personal Data */}
        <form onSubmit={onsubmit} className="mt-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-10">
            {/* The name */}
            <div className="flex flex-col gap-3 lg:gap-4">
              <label className="text-lg lg:text-2xl " htmlFor="name">
                {t("the name")}
              </label>
              <input
                type="text"
                id="name"
                placeholder={t("the name")}
                className="h-[60px] lg:h-[82px] bg-white rounded-xl px-5 lg:px-8 w-full"
              />
            </div>
            {/* phone number */}
            <div className="flex flex-col gap-3 lg:gap-4">
              <label className="text-lg lg:text-2xl " htmlFor="phone">
                {t("Mobile number")}
              </label>
              <input
                type="text"
                id="phone"
                placeholder={t("Mobile number")}
                className="h-[60px] lg:h-[82px] bg-white rounded-xl px-5 lg:px-8 w-full"
              />
            </div>
            {/* password */}
            <div className="flex flex-col gap-3 lg:gap-4">
              <label className="text-lg lg:text-2xl " htmlFor="password">
                {t("password")}
              </label>
              <input
                type="text"
                id="password"
                placeholder={t("password")}
                className="h-[60px] lg:h-[82px] bg-white rounded-xl px-5 lg:px-8 w-full"
              />
            </div>
            {/* email */}
            <div className="flex flex-col gap-3 lg:gap-4 md:col-span-2">
              <label className="text-lg lg:text-2xl " htmlFor="email">
                {t("email")}
              </label>
              <input
                type="text"
                id="email"
                placeholder={t("email")}
                className="h-[60px] lg:h-[82px] bg-white rounded-xl px-5 lg:px-8 w-full"
              />
            </div>
            {/* confirl password */}
            <div className="flex flex-col gap-3 lg:gap-4">
              <label className="text-lg lg:text-2xl " htmlFor="confirmPassword">
                {t("confirm password")}
              </label>
              <input
                type="text"
                id="confirmPassword"
                placeholder={t("confirm password")}
                className="h-[60px] lg:h-[82px] bg-white rounded-xl px-5 lg:px-8 w-full"
              />
            </div>
            <button className="lg:col-span-3 h-[60px] lg:h-[82px] bg-[#c9c9c9] text-[#00000080] font-bold rounded-xl block w-full text-center text-lg lg:text-2xl ">
              {t("save edit")}
            </button>
          </div>
        </form>
        {/* Other information */}
        <form onSubmit={onsubmit} className="mt-12 md:mt-[100px]">
          <h4 className="text-2xl lg:text-4xl font-bold">
            {t("Other information")}
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-10 mt-10">
            {/* The side */}
            <div className="flex flex-col gap-3 lg:gap-4">
              <label className="text-lg lg:text-2xl " htmlFor="The_side">
                {t("The side")}
              </label>
              <input
                type="text"
                id="The_side"
                placeholder={t("Government agency")}
                className="h-[60px] lg:h-[82px] bg-white rounded-xl px-5 lg:px-8 w-full"
              />
            </div>
            {/* sector */}
            <div className="flex flex-col gap-3 lg:gap-4">
              <label className="text-lg lg:text-2xl " htmlFor="sector">
                {t("sector")}
              </label>
              <input
                type="text"
                id="sector"
                placeholder={t("Public sector")}
                className="h-[60px] lg:h-[82px] bg-white rounded-xl px-5 lg:px-8 w-full"
              />
            </div>
            {/* Position */}
            <div className="flex flex-col gap-3 lg:gap-4">
              <label className="text-lg lg:text-2xl " htmlFor="Position">
                {t("Position")}
              </label>
              <input
                type="text"
                id="Position"
                placeholder={t("Position")}
                className="h-[60px] lg:h-[82px] bg-white rounded-xl px-5 lg:px-8 w-full"
              />
            </div>
            {/* Gender */}
            <div className="flex flex-col gap-3 lg:gap-4">
              <label className="text-lg lg:text-2xl " htmlFor="Gender">
                {t("Gender")}
              </label>
              <input
                type="text"
                id="Gender"
                placeholder={t("Gender")}
                className="h-[60px] lg:h-[82px] bg-white rounded-xl px-5 lg:px-8 w-full"
              />
            </div>
            <button className="lg:col-span-3 h-[60px] lg:h-[82px] bg-main font-bold rounded-xl block w-full text-center text-lg lg:text-2xl ">
              {t("save edit")}
            </button>
          </div>
        </form>
      </div>
      <HaveQuestion />
    </section>
  );
};

export default ProfilePage;
