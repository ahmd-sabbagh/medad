"use client";
import Button from "@/components/button/Button";
import DropDownMenu from "@/components/dropDownMenu/DropDownMenu";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useState } from "react";

interface Step2Props {
    setStep: (step: number) => void;
}

const Step2: React.FC<Step2Props> = ({ setStep }) => {
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
        <div className="mt-1 flex flex-col gap-1">
            {/*  */}
            <div className="flex flex-col gap-0">
                <label htmlFor="the_side" className="md:text-lg font-medium">
                    {t("The_side_")} <span className="mx-2">*</span>
                </label>
                <div className="relative bg-main-20 text-main rounded-[18px] h-[40px] md:h-[50px]">
                    <input
                        id="the_side"
                        type="text"
                        placeholder={t("Enter the responsible party")}
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
                                d="M10 2a5 5 0 100 10A5 5 0 0010 2zM2 18a8 8 0 0116 0H2z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </div>
            </div>
            {/*  */}
            <DropDownMenu {...areaDrop} />
            {/*  */}
            <div className="flex flex-col gap-0">
                <label htmlFor="Position_" className="md:text-lg font-medium">
                    {t("Position_")} <span className="mx-2">*</span>
                </label>
                <div className="relative bg-main-20 text-main rounded-[18px] h-[40px] md:h-[50px]">
                    <input
                        id="Position_"
                        type="text"
                        placeholder={t("Enter your position")}
                        className="w-full px-5 h-full pl-10 bg-input pr-10 text-bolder"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-main">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 32 32" enable-background="new 0 0 32 32" id="Stock_cut" version="1.1" xmlSpace="preserve">

                            <desc />

                            <g>

                                <rect fill="none" height="24" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" width="30" x="1" y="7" />

                                <path d="M31,7H1v6   c0,2.209,1.791,4,4,4h22c2.209,0,4-1.791,4-4V7z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />

                                <path d="M8,7V3   c0-1.105,0.895-2,2-2h12c1.105,0,2,0.895,2,2v4" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />

                                <path d="M16,21L16,21   c-1.105,0-2-0.895-2-2v-4c0-1.105,0.895-2,2-2h0c1.105,0,2,0.895,2,2v4C18,20.105,17.105,21,16,21z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />

                                <line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="18" x2="14" y1="17" y2="17" />

                            </g>

                        </svg>
                    </span>
                </div>
            </div>
            {/*  */}
            <DropDownMenu {...genderDrop} />
            {/* upload photo */}
            <div>
                <label htmlFor="up_ph" className="flex flex-col gap-0">
                    <span className="md:text-lg font-medium">{t("profile_image")}</span>
                    <div className="px-5 h-[40px] md:h-[50px] bg-input rounded-[18px] flex items-center cursor-pointer">
                        <span className="text-main">{t("enter_photo_image")}</span>
                    </div>
                    <input type="file" className="hidden" id="up_ph" />
                </label>
            </div>
            <button
                type="button"
                className={`mt-2 bg-main flex-c font-medium md:text-xl text-white px-4 rounded-[8px] h-[40px]`}
                onClick={() => { setStep(1) }}
            >
                {t("init_acc")}
            </button>
            <div className="flex my-8 items-center justify-center gap-1">
                <span>{t("hav_acc")}</span>
                <Link href={"/login"} className="text-main">
                    {t("login")}
                </Link>
            </div>
        </div>
    );
};

export default Step2;