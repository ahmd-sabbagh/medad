import { cat_1, cat_2, cat_3 } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Categories = () => {
  const t = useTranslations();
  const data = [
    {
      image: cat_1,
      name: t("Volunteering"),
      description: t("Strategy and management desc"),
    },
    {
      image: cat_2,
      name: t("Developing Fundraising Resources"),
      description: t("Strategy and management desc"),
    },
    {
      image: cat_3,
      name: t("Strategy and management"),
      description: t("Strategy and management desc"),
    },
    {
      image: cat_1,
      name: t("Volunteering"),
      description: t("Strategy and management desc"),
    },
    {
      image: cat_2,
      name: t("Developing Fundraising Resources"),
      description: t("Strategy and management desc"),
    },
    {
      image: cat_3,
      name: t("Strategy and management"),
      description: t("Strategy and management desc"),
    },
  ];
  return (
    <section className="py-8 bg-white">
      <div className="container">
        <h3 className="text-3xl font-bold">{t("Categories")}</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-6 gap-3">
          {data.map((item, idx) => (
            <div className="flex items-center bg-[#E2AE6352] rounded-[38px] overflow-hidden" key={idx}>
              <div className="h-full-img h-full c-img">
                <Image className="h-full"  layout="responsive" src={item.image} alt="cat-item" loading="lazy" />
              </div>
              <div className="px-2 ml-4 py-6 ">
                <h5 className="text-2xl font-bold">{item.name}</h5>
                <p className="text-sm mt-2 font-medium">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
