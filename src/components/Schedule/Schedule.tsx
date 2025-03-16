import { save, star, book, language, speaker_event } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import "./style.css"

const Schedule = () => {
  const t = useTranslations();
  const data = [
    "اليوم الأول",
    "اليوم الثانى",
    "اليوم الثالت"
  ];
  const data2 = [
    "بداية المؤتمر",
    "حضور المحاضر",
    "كلمة البداية" ,
    "الترحيب",
    "محاضرة د خالد الدوسى",
    "محاضرة أ/احمد المسفر"
  ];

  return (
    <section>
      <div className="px-12">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-xl lg:text-3xl">{t("Schedule Events")}</h3>
          <div className="flex flex-wrap items-start justify-start gap-2 md:gap-3 mt-3 md:mt-4">
            {data.map((item, idx) => (
              <div className="chbx" key={idx}>
                <input type="radio" id={item} className="hidden" checked={idx === 0} />
                <label
                  htmlFor={item}
                  className="rounded-[5px] py-1 px-3  block cursor-pointer"
                >
                  <span className="md:text-xl">{item}</span>
                </label>
              </div>
            ))}
          </div>
          <div className="flex w-full">
            <div className="bg-gradient-to-b rounded-s-[15px] from-[#E2AE63] to-[#f6d6ae] pr-4 py-4 pl-8 flex flex-col items-start space-y-4 gap-5 w-[50%] relative">
              {data2.map((v, index) => (
                <div key={index} className="flex justify-between items-start flex-col relative">
                  <div className="flex items-center">
                    <div className="w-8 h-8 font-xl p-[2px] rounded-full mr-2 border border-1">
                      <div className={`w-full ${index == 0 ? 'bg-[#00cbb7]' : (index==5 ? 'bg-[#ff9e14]' : 'bg-[#b7966c]')} h-full rounded-full`}></div>
                    </div>
                    <div className={`${index==5 ? 'font-bold' :'font-bolder'}  text-3xl mr-2`}>{v}</div>
                  </div>
                  <div className="text[#AFAFAF] mr-12"> 9 ص - 10 ص</div>
                  {index < 5 && (
                    <div className="absolute right-[22px] top-9">
                      <div className="flex flex-col w-[3px] gap-1 justify-between">
                        {[...Array(8)].map((__, i) => (
                          <div className="w-[2px] h-1 bg-black"></div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="bg-main flex-graw w-full rounded-e-[15px]">
              <Image src={speaker_event} alt="" layout="responsive" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
