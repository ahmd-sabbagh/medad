import { about_medad_1, about_medad_2, about_medad_3 } from "@/assets";
import Image from "next/image";
import React from "react";
import "./style.css";

const Images = () => {
  return (
    <div className="relative flex flex-col gap-4 items-end images">
      <div className="bg-after relative w-[250px] md:w-[309px] h-[148px] md:h-[208px] img-fit overflow-hidden">
        <Image src={about_medad_1} alt="about" loading="lazy" />
      </div>
      <div className="bg-after relative w-[250px] md:w-[309px] h-[213px] md:h-[263px] img-fit overflow-hidden">
        <Image src={about_medad_2} alt="about" loading="lazy" />
      </div>
      {/* absolute */}
      <div className="absolute w-[250px] md:w-[309px] h-[213px] md:h-[263px] img-fit overflow-hidden img-abs">
        <div className="bg-after relative">
          <Image src={about_medad_3} alt="about" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Images;
