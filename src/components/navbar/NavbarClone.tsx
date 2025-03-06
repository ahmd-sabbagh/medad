import React from "react";
import NavBarLinks from "./NavBarLinks";
import Image from "next/image";
import { navbar_logo } from "@/assets";
import Language from "./Language";
interface Props {
  locale: string;
}
const NavbarClone = ({ locale }: Props) => {
  return (
    <div className="container">
      <div className="flex justify-between items-center lg:gap-[64px]">
        <div className="lg:flex justify-center items-center w-[100px] md:w-[137px] lg:w-[223px]">
          <Image src={navbar_logo} alt="logo" loading="lazy" />
        </div>
        <NavBarLinks locale={locale} />
        <Language locale={locale} />
      </div>
    </div>
  );
};

export default NavbarClone;
