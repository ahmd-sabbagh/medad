import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import Images from "./Images";
import { about_bg_shape } from "@/assets";
import PagesAbout from "../pagesAbout/PagesAbout";
import "./style.css"; 
const AboutMedad = () => {
  const t = useTranslations();
  return (
    <section className="bg-[#F8F3EC] mt-4 AboutMedad py-8 lg:py-0">
      <div
        className="container bg-image"
        style={{ backgroundImage: `url(${about_bg_shape.src})` }}
      >
        <div className="grid lg:grid-cols-2 items-center">
          <div className="text py-6">
            <h3 className="md:text-2xl lg:text-3xl xl:text-4xl font-bolder text-main">
              {t("About Medad")}
            </h3>
            <p className="max-w-[664px] md:text-xl lg:text-2xl xl:text-3xl mt-2 font-bolder">
              {t("aboutMedad desc")}
            </p>
            <Link
              href={""}
              className="learn-more bg-main text-xl px-6 py-1 rounded-sm font-bold block w-fit mt-3"
            >
              {t("Learn more")}
            </Link>
          </div>
          <div>
            <Images />
          </div>
        </div>
      </div>
      {/* apout pages */}
      <div className="py-12 md:py-16">
        <div className="container">
          <PagesAbout />
        </div>
      </div>
    </section>
  );
};

export default AboutMedad;
