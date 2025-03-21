"use client";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import HaveQuestion from "./components/HaveQuestion";

const ProfilePage = () => {
  const t = useTranslations();
  const [token, setToken] = useState(null);

  // Fetch token in useEffect to avoid Next.js hydration issues
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/profile`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert("Profile updated successfully");
      } else {
        alert("Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      password: formData.get("password"),
      password_confirmation: formData.get("confirmPassword"),
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/change-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert("Password updated successfully");
      } else {
        alert("Failed to update password");
      }
    } catch (error) {
      console.error("Error updating password:", error);
    }
  };

  const handleOtherUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      gender: formData.get("gender"),
      side: formData.get("side"),
      sector: formData.get("sector"),
      position: formData.get("position"),
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/profile-update-another`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert("Other information updated successfully");
      } else {
        alert("Failed to update other information");
      }
    } catch (error) {
      console.error("Error updating other information:", error);
    }
  };

  return (
    <section className="py-12 md:py-20 bg-[#F3F3F3]">
      <div className="container">
        {/* Grid container for large screens */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-10">
          {/* Personal Data */}
          <form onSubmit={handleProfileUpdate} className="mt-10">
        <h4 className="mb-5 text-2xl lg:text-4xl font-bold">
          {t("Personal information")}
        </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-5 md:gap-6 lg:gap-10 mt-10">
              {/* The name */}
              <div className="flex flex-col gap-1">
                <label className="text-lg lg:text-2xl " htmlFor="name">
                  {t("the name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t("the name")}
                  className="py-3 bg-white rounded-xl px-5 lg:px-8 w-full"
                />
              </div>
              {/* phone number */}
              <div className="flex flex-col gap-1">
                <label className="text-lg lg:text-2xl " htmlFor="phone">
                  {t("Mobile number")}
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder={t("Mobile number")}
                  className="py-3 bg-white rounded-xl px-5 lg:px-8 w-full"
                />
              </div>
              {/* email */}
              <div className="flex flex-col gap-1">
                <label className="text-lg lg:text-2xl " htmlFor="email">
                  {t("email")}
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder={t("email")}
                  className="py-3 bg-white rounded-xl px-5 lg:px-8 w-full"
                />
              </div>
              <button
                type="submit"
                className="cursor-pointer mt-7 py-3 bg-main font-bold rounded-xl block w-full text-center text-lg lg:text-2xl"
              >
                {t("save edit")}
              </button>
            </div>
          </form>

          {/* Update Password */}
          <form onSubmit={handlePasswordUpdate} className="mt-12 lg:mt-10">
            <h4 className="text-2xl lg:text-4xl font-bold">
              {t("Update Password")}
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-5 md:gap-6 lg:gap-10 mt-10">
              {/* password */}
              <div className="flex flex-col gap-1">
                <label className="text-lg lg:text-2xl " htmlFor="password">
                  {t("password")}
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder={t("password")}
                  className="py-3 bg-white rounded-xl px-5 lg:px-8 w-full"
                />
              </div>
              {/* confirm password */}
              <div className="flex flex-col gap-1">
                <label className="text-lg lg:text-2xl " htmlFor="confirmPassword">
                  {t("confirm password")}
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder={t("confirm password")}
                  className="py-3 bg-white rounded-xl px-5 lg:px-8 w-full"
                />
              </div>
              <button
                type="submit"
                className="cursor-pointer mt-7 py-3 bg-main font-bold rounded-xl block w-full text-center text-lg lg:text-2xl"
              >
                {t("save edit")}
              </button>
            </div>
          </form>
        </div>

        {/* Other information */}
        <form onSubmit={handleOtherUpdate} className="mt-12 md:mt-[100px]">
          <h4 className="text-2xl lg:text-4xl font-bold">
            {t("Other information")}
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-10 mt-10">
            {/* The side */}
            <div className="flex flex-col gap-1">
              <label className="text-lg lg:text-2xl " htmlFor="side">
                {t("The side")}
              </label>
              <input
                type="text"
                id="side"
                name="side"
                placeholder={t("Government agency")}
                className="py-3 bg-white rounded-xl px-5 lg:px-8 w-full"
              />
            </div>
            {/* sector */}
            <div className="flex flex-col gap-1">
              <label className="text-lg lg:text-2xl " htmlFor="sector">
                {t("sector")}
              </label>
              <input
                type="text"
                id="sector"
                name="sector"
                placeholder={t("Public sector")}
                className="py-3 bg-white rounded-xl px-5 lg:px-8 w-full"
              />
            </div>
            {/* Position */}
            <div className="flex flex-col gap-1">
              <label className="text-lg lg:text-2xl " htmlFor="position">
                {t("Position")}
              </label>
              <input
                type="text"
                id="position"
                name="position"
                placeholder={t("Position")}
                className="py-3 bg-white rounded-xl px-5 lg:px-8 w-full"
              />
            </div>
            {/* Gender */}
            <div className="flex flex-col gap-1">
              <label className="text-lg lg:text-2xl " htmlFor="gender">
                {t("Gender")}
              </label>
              <input
                type="text"
                id="gender"
                name="gender"
                placeholder={t("Gender")}
                className="py-3 bg-white rounded-xl px-5 lg:px-8 w-full"
              />
            </div>
            <button
              type="submit"
              className="cursor-pointer mt-7 lg:col-span-3 py-3 bg-main font-bold rounded-xl block w-full text-center text-lg lg:text-2xl"
            >
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