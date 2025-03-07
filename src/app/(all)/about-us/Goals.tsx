import { goals_1, goals_2, goals_3, goals_4 } from "@/assets";
import { useTranslations } from "next-intl";

const Goals = () => {
  const t = useTranslations();
  const data = [
    {
      image: goals_1,
      title: t("Highlighting the role of charity work"),
      hent: t("Our goals"),
    },
    {
      image: goals_2,
      title: t("Providing scientific solutions"),
      hent: t("Our goals"),
    },
    {
      image: goals_3,
      title: t("Achieving institutional excellence"),
      hent: t("Our goals"),
    },
    {
      image: goals_4,
      title: t("Providing systemic solutions"),
      hent: t("Our goals"),
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-8 lg:mt-[55px] ">
          {data.map((item, idx) => (
            <div
              className=" rounded-xl h-[300px] md:h-[400px] lg:h-[524px] bg-cover bg-center relative overflow-hidden"
              key={idx}
              style={{ backgroundImage: `url(${item.image.src})` }}
            >
              <div className=" absolute top-0 start-0 w-full h-full p-5 flex flex-col justify-end shape-grad">
                <div>
                  <div className="font-bold md:text-2xl text-white">
                    {item.title}
                  </div>
                  <p className="text-main md:text-xl">{item.hent}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goals;
