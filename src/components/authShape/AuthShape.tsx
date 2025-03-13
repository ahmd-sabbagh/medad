
import Image, { StaticImageData } from "next/image";
import React from "react";
import AuthLanguage from "../authLanguage/Language";
import { getLocale } from "next-intl/server";
interface Props {
  children: React.ReactNode;
  image:StaticImageData | string
}

const AuthShape = async ({ children ,image}: Props) => {
  const locale = await getLocale();
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="grid md:grid-cols-2 h-full absolute top-0 start-0 w-full -z-0">
        <div className="order-2 md:order-1 "></div>
        <div className="bg-main bg-image max-h-full order-1 md:order-2 h-[283px] md:h-auto flex flex-col items-center justify-center gap-4 md:gap-10">
          <div className="md:w-[300px] lg:w-[400px] w-[200px] h-[200px] md:h-[300px] lg:h-[400px] bg-white rounded-full flex-c  p-10">
            <Image className="max-w-[80%]" src={image} alt="image" loading="lazy" />
          </div>
          <div className="max-w-[623px] hidden md:block">
            <h4 className="text-center text-white font-bold text-xl md:text-3xl">{"زيادة الوعي المجتمعي"}</h4>
            <p className="text-white text-center mt-2 md:text-xl">{"نسعى دائما لتحسين جودة حياة المجتمع والتمكين في العديد من المجالات"}</p>
          </div>
        </div>
      </div>
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="container">
          <div className="py-10 flex justify-end text-white">
            <AuthLanguage locale={locale} />
          </div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default AuthShape;
