import {  exhibition } from "@/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="bg-[#e2ae6321] pt-20">
      <div className="container">
        <div className=" lg:w-[60%] mx-auto  overflow-hidden ">
          <Image src={exhibition} alt="header-image" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Header;
