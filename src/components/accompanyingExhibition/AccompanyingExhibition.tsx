import { useTranslations } from "next-intl";
import "./style.css";
import Image from "next/image";
import { fahd_center } from "@/assets";
import Link from "next/link";

const AccompanyingExhibition = () => {
  const t = useTranslations();
  return (
    <section className="py-10 md:py-20">
      <div className="container">
        <h3 className="font-bold text-xl lg:text-3xl">{t("Accompanying exhibition")}</h3>
        <div className="MainTitle p-3 md:p-8  rounded-xl mt-6 flex items-center gap-4">
          <div className="img-fit h-[100px] min-w-[100px] lg:h-[270px] lg:min-w-[270px]">
            <Image src={fahd_center} alt="center" loading="lazy" />
          </div>
          <div>
            <h4 className="font-bold text-xl lg:text-[28px]">{t("King Fahd Cultural Center")}</h4>
            <p className="text-xs md:text-lg mt-2">{t("King Fahd Cultural Center desc")}</p>
            <Link href={"/submit-application-exhibition"} className="bg-main font-bold py-2 px-6 text-xl rounded-xl block w-fit mt-2">{t("Subscription request")}</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccompanyingExhibition;
