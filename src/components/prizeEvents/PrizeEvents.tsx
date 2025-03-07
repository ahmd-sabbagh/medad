import { save, star, book, language } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import "./style.css"

const PrizeEvents = () => {
  const t = useTranslations();
  const data = [
    {
      icon: save,
      discription:
        "جائزة لأفضل بحث علمية في مسابقة الأبحاث والدراسات المتخصصة في العمل الخيري والمقدمة للمؤتمر",
      name: "جائزة معالي الشيخ صالح الحصين",
      salary: "100,000 SR",
    },
    {
      icon: star,
      discription:
        "جائزة لأفضل بحث علمية في مسابقة الأبحاث والدراسات المتخصصة في العمل الخيري والمقدمة للمؤتمر",
      name: "جائزة معالي الشيخ صالح الحصين",
      salary: "100,000 SR",
    },
    {
      icon: book,
      discription:
        "جائزة لأفضل بحث علمية في مسابقة الأبحاث والدراسات المتخصصة في العمل الخيري والمقدمة للمؤتمر",
      name: "جائزة معالي الشيخ صالح الحصين",
      salary: "100,000 SR",
    },
    {
      icon: language,
      discription:
        "جائزة لأفضل بحث علمية في مسابقة الأبحاث والدراسات المتخصصة في العمل الخيري والمقدمة للمؤتمر",
      name: "جائزة معالي الشيخ صالح الحصين",
      salary: "100,000 SR",
    },
  ];
  return (
    <section>
      <div className="container">
        <h3 className="font-bold text-xl lg:text-3xl">{t("Event prizes")}</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-8 ">
          {data.map((card, idx) => (
            <Link
              href={"/prize-info"}
              className="prizeEventCard block rounded-xl h-[300px] md:h-[400px] lg:h-[524px] p-5 md:p-8 lg:p-10"
              key={idx}
            >
              <div className="flex-c mx-auto mt-8">
                <Image src={card.icon} alt="icon" loading="lazy" />
              </div>
              <p className="text-sm md:text-base mt-6 lg:mt-8 text-center">{card.discription}</p>
              <div className="text-main md:text-xl mt-6 lg:mt-8 text-center">{card.name}</div>
              <div className="text-main md:text-xl mt-2 text-center">{card.salary}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrizeEvents;
