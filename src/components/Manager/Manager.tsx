import { facebook_icon, member_user_avater, persone, snapchat_icon, whatsapp_icon } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import "./style.css"

const Manager = ({ admin }) => {

  return (
    <div className=" text-center rounded-xl p-4 pt-8">
      <Image
        src={admin.image}
        width={128}
        height={128}
        alt="Profile"
        className="rounded-full mx-auto"
      />
      <h2 className="text-xl" style={{ fontWeight: "bolder !important", marginBottom: "5px" }}>{admin.name}</h2>
      <p className="text-gray-600">{admin.job_title}</p>
      <div className="flex justify-center mt-4 space-x-4 mt-6">
        <a href={admin.facebook} target="_blank" rel="noopener noreferrer">
          <Image src={facebook_icon} alt="Facebook" className="w-6 h-6" />
        </a>
        <a href={admin.snapchat} target="_blank" rel="noopener noreferrer">
          <Image src={snapchat_icon} alt="Snapchat" className="w-6 h-6" />
        </a>
        <a href={admin.whatsapp} target="_blank" rel="noopener noreferrer">
          <Image src={whatsapp_icon} alt="WhatsApp" className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default Manager;
