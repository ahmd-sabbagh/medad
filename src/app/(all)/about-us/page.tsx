import React from "react";
import Header from "./Header";
import Goals from "./Goals";
import "./style.css"
import OurVision from "./OurVision";
import MedadNumber from "./MedadNumber";
import Image from "next/image";
import { about_mask_1_1, about_mask_1_2, about_mask_2_1, about_mask_2_2 } from "@/assets";

const AboutPage = () => {
  return (
    <section className="py-10 md:py-20 bg-[#F8F3EC]">
      <div className="bg-images-about">
        <div className="grid grid-cols-2 gap-4">
        <Image className="img_1_1" src={about_mask_1_1} alt="" />
        <Image className="img_1_2" src={about_mask_1_2} alt="" />
        <Image className="img_2_1" src={about_mask_2_1} alt="" />
        <Image className="img_2_2" src={about_mask_2_2} alt="" />
        </div>
      </div>
      <Header />
      <Goals />
      <OurVision />
      <MedadNumber />
    </section>
  );
};

export default AboutPage;
