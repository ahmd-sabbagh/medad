"use client";

import React, { useEffect, useState, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import axios from "axios";
import { edit_icon, profile_image } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import toast, { Toaster } from 'react-hot-toast';

const Profile = () => {
  const locale = useLocale();
  const t = useTranslations();
  const pathname = usePathname();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const fileInputRef = useRef(null);

  const [originalImage, setOriginalImage] = useState(profile_image); // Store original image
  const [previewImage, setPreviewImage] = useState(null); // Temporary preview image
  const [uploading, setUploading] = useState(false); // Uploading state

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    if (!token) return;

    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setData(response.data);
        setOriginalImage(response.data.data?.image || profile_image); // Set initial profile image
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [token]);

  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setPreviewImage(reader.result); // Show temporary preview
    reader.readAsDataURL(file);

    const formData = new FormData();
    formData.append("image", file);

    setUploading(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/profile-update-image`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
            "Accept-Language": locale,
          },
        }
      );

      // Update the original image with the new one on success
      setOriginalImage(response?.data?.data?.image);
      setPreviewImage(null); // Remove preview since upload is successful
      toast.success(response.data.message);
    } catch (error) {
      console.error("Error uploading image:", error);
      setPreviewImage(originalImage); // Revert back to original image
    } finally {
      setUploading(false);
    }
  };

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
      <Toaster />
      <div className="container">
        <div className="flex gap-3 md:gap-5">
          <div className="img-fit w-[100px] h-[100px] lg:w-[284px] lg:h-[277px] rounded-xl overflow-hidden relative">
            <Image
              src={previewImage || originalImage} // Show preview while uploading
              fill
              className="object-contain"
              alt="profile-image"
              loading="lazy"
            />
            {uploading && (
              <div className="absolute inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
                <p className="text-white text-sm">Uploading...</p>
              </div>
            )}
            <button
              onClick={handleEditClick}
              className="w-5 md:h-6 absolute top-3 start-3 lg:top-5 lg:start-5 cursor-pointer"
            >
              <Image src={edit_icon} alt="icon-edit" loading="lazy" />
            </button>
            {/* Hidden File Input */}
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
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
                  className={`flex-c text-xs md:text-xl py-2 px-4 rounded-xl ${pathname === "/profile" ? "bg-main" : "bg-white"
                    }`}
                >
                  {t("Profile")}
                </Link>
                <Link
                  href="/profile/subscriptions"
                  className={`flex-c text-xs md:text-xl py-2 px-4 rounded-xl ${pathname === "/profile/subscriptions" ? "bg-main" : "bg-white"
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
