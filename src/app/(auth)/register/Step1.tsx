"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Step1Props {
    setStep: (step: number) => void;
    formData:any;
    setFormData:any;
}

const Step1: React.FC<Step1Props> = ({ setStep ,formData ,setFormData}) => {
    const t = useTranslations();
    const router = useRouter();
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async () => {
        try {
            if (formData.password !== formData.confirmPassword) {
                setError("Passwords do not match");
                const passwordInput = document.getElementById("password") as HTMLInputElement;
                const confirmPasswordInput = document.getElementById("confirm-password") as HTMLInputElement;
                if (passwordInput) passwordInput.classList.add("border-red-500");
                if (confirmPasswordInput) confirmPasswordInput.classList.add("border-red-500");
                return;
            }

            if (formData.name && formData.phone && formData.email && formData.password && formData.confirmPassword) {
                setStep(2);
            } else {
                setError("Please fill in all required fields");
                const inputs = document.querySelectorAll("input");
                inputs.forEach((input) => {
                    if (!input.value) {
                        input.classList.add("border-red-500");
                    } else {
                        input.classList.remove("border-red-500");
                    }
                });
            }
        } catch (err: any) {
            setError(err.response?.data?.message || "An error occurred");
        }
    };

    return (
        <div className="mt-1 flex flex-col gap-1 pb-4">
            {error && <div className="text-red-500 text-center mb-2">{error}</div>}
            {/*  */}
            <div className="flex flex-col gap-0">
                <label htmlFor="name" className="md:text-lg font-medium">
                    {t("Name")} <span className="mx-2">*</span>
                </label>
                <div className="relative bg-main-20 text-main rounded-[18px] h-[40px] md:h-[50px]">
                    <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t("Full Name")}
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
            <div className="flex flex-col gap-0">
                <label htmlFor="phone" className="md:text-lg font-medium">
                    {t("Phone")} <span className="mx-2">*</span>
                </label>
                <div className="relative bg-main-20 text-main rounded-[18px] h-[40px] md:h-[50px]">
                    <input
                        id="phone"
                        type="text"
                        value={formData.phone}
                        onChange={handleChange}
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
            </div>
            <div className="flex flex-col gap-0">
                <label htmlFor="email" className="md:text-lg font-medium">
                    {t("Email")} <span className="mx-2">*</span>
                </label>
                <div className="relative bg-main-20 text-main rounded-[18px] h-[40px] md:h-[50px]">
                    <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t("Email Address")}
                        className="w-full px-5 h-full pl-10 bg-input pr-10 text-bolder"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-main">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor" height={20} width={20} version="1.1" id="Capa_1" viewBox="0 0 491.1 491.1" xmlSpace="preserve">
                            <g>
                                <path d="M470.3,46.35H20.9C9.4,46.35,0,55.75,0,67.25v356.6c0,11.5,9.4,20.9,20.9,20.9h448.3c11.5,0,20.9-9.4,21.9-19.8V67.15   C491.1,55.75,481.7,46.35,470.3,46.35z M245.1,278.85L67.4,86.95h355.4L245.1,278.85z M449.4,119.35v247l-106.3-132.4L449.4,119.35   z M150.2,237.15L40.7,368.45v-249.1L150.2,237.15z M178.4,267.35l52.1,55.3c8.3,8.3,22.9,8.3,30.2,0l54.2-58.4l111.9,139.7H64.4   L178.4,267.35z" />
                            </g>
                        </svg>
                    </span>
                </div>
            </div>
            <div className="flex flex-col gap-0">
                <label htmlFor="password" className="md:text-lg font-medium">
                    {t("Password")} <span className="mx-2">*</span>
                </label>
                <div className="relative bg-main-20 text-main rounded-[18px] h-[40px] md:h-[50px]">
                    <input
                        id="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder={t("Password")}
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
                                d="M5 8V6a5 5 0 0110 0v2h1a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6a2 2 0 012-2h1zm2-2v2h6V6a3 3 0 00-6 0z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </span>
                </div>
            </div>
            <div className="flex flex-col gap-0">
                <label htmlFor="confirmPassword" className="md:text-lg font-medium">
                    {t("Confirm Password")} <span className="mx-2">*</span>
                </label>
                <div className="relative bg-main-20 text-main rounded-[18px] h-[40px] md:h-[50px]">
                    <input
                        id="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder={t("Confirm Password")}
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
                                d="M5 8V6a5 5 0 0110 0v2h1a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6a2 2 0 012-2h1zm2-2v2h6V6a3 3 0 00-6 0z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </span>
                </div>
            </div>
            <button
                type="button"
                className={`mt-2 bg-main flex-c font-medium md:text-xl text-white px-4 rounded-[8px] h-[40px]`}
                onClick={handleSubmit}
            >
                {t("init_acc")}
            </button>
            <div className="flex items-center my-8 justify-center gap-1">
                <span>{t("hav_acc")}</span>
                <Link href={"/login"} className="text-main">
                    {t("login")}
                </Link>
            </div>
        </div>
    );
};

export default Step1;