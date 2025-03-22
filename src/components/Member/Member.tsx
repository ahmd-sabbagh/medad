import { facebook_icon, snapchat_icon, whatsapp_icon } from "@/assets";
import Image from "next/image";
import React from "react";
// import "./style.css"

const Member = ({ member }) => {

  return (
    <div className="bg-white member text-center rounded-xl p-4 pt-8">
      <Image
        src={member.image}
        width={128}
        height={128}
        alt="Profile"
        className="rounded-full mx-auto"
      />

      <h2 className="text-xl" style={{ fontWeight: "bolder !important", marginBottom: "5px" }}>{member.name}</h2>
      <p className="text-gray-600">{member.job_title}</p>
      <div className="flex justify-center mt-4 space-x-4 mt-6">
        <a href={member.facebook} target="_blank" rel="noopener noreferrer">
          <Image src={facebook_icon} alt="Facebook" className="w-6 h-6" />
        </a>
        <a href={member.snapchat} target="_blank" rel="noopener noreferrer">
          <Image src={snapchat_icon} alt="Snapchat" className="w-6 h-6" />
        </a>
        <a href={member.whatsapp} target="_blank" rel="noopener noreferrer">
          <Image src={whatsapp_icon} alt="WhatsApp" className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default Member;
