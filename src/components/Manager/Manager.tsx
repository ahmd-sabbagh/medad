import { facebook_icon, member_user_avater, persone, snapchat_icon, whatsapp_icon } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import "./style.css"

const Manager = () => {
  const t = useTranslations();
  const arr = new Array(8).fill("");

  return (
    <div className=" text-center rounded-xl p-4 pt-8">
      <Image src={member_user_avater} alt="Profile" className="rounded-full w-32 h-32 mx-auto" />
      <h2 className="text-xl" style={{ fontWeight: "bolder !important", marginBottom: "5px" }}>محمد جوبان</h2>
      <p className="text-gray-600">مؤسس المنصة</p>
      <div className="flex justify-center mt-4 space-x-4 mt-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Image src={facebook_icon} alt="Facebook" className="w-6 h-6" />
        </a>
        <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer">
          <Image src={snapchat_icon} alt="Snapchat" className="w-6 h-6" />
        </a>
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
          <Image src={whatsapp_icon} alt="WhatsApp" className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default Manager;
