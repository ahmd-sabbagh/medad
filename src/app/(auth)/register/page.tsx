"use client";
import Button from "@/components/button/Button";
import DropDownMenu from "@/components/dropDownMenu/DropDownMenu";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useState } from "react";

const RegisterPage = () => {
  const t = useTranslations();
  const [area, setArea] = useState("Helwan");
  const [gender, setGender] = useState(t("gender_"));

  const areaDrop = {
    title: t("Sector_type_"),
    data: ["Helwan", "Naser City", "Alazhar Parck", "Madinty"],
    state: area,
    setState: setArea,
  };
  const genderDrop = {
    title: t("gender_"),
    data: ["male", "female"],
    state: gender,
    setState: setGender,
  };
  return (
    <form className="mt-4 md:mt-6 flex flex-col gap-4 md:gap-5 pb-4">
      {/*  */}
      <div className="flex flex-col gap-2">
        <label htmlFor="the_side" className="md:text-lg font-medium">
          {t("The_side_")}
        </label>
        <input
          id="the_side"
          type="text"
          placeholder={t("Enter the responsible party")}
          className="px-5 h-[50px] md:h-[60px] bg-input rounded-[18px]"
        />
      </div>
      {/*  */}
      <DropDownMenu {...areaDrop} />
      {/*  */}
      <div className="flex flex-col gap-2">
        <label htmlFor="Position_" className="md:text-lg font-medium">
          {t("Position_")}
        </label>
        <input
          id="Position_"
          type="text"
          placeholder={t("Enter your position")}
          className="px-5 h-[50px] md:h-[60px] bg-input rounded-[18px]"
        />
      </div>
      {/*  */}
      <DropDownMenu {...genderDrop} />
      {/* upload photo */}
      <div>
        <label htmlFor="up_ph" className="flex flex-col gap-2">
          <span className="md:text-lg font-medium">{t("profile_image")}</span>
          <div className="px-5 h-[50px] md:h-[60px] bg-input rounded-[18px] flex items-center cursor-pointer">
            <span className="text-main">{t("enter_photo_image")}</span>
          </div>
          <input type="file" className="hidden" id="up_ph" />
        </label>
      </div>
      <Button className="md:mt-4" name={t("init_acc")} />
      <div className="flex items-center justify-center gap-1 md:text-2xl">
        <span>{t("hav_acc")}</span>
        <Link href={"/login"} className="text-main">
          {t("login")}
        </Link>
      </div>
    </form>
  );
};

export default RegisterPage;
