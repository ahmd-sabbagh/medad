import { any_icon_1 } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import "./style.css"

const Anylisis = () => {
  const t = useTranslations();

  return (
    <section>
      <div className="w-full bg-[#E2AE635E] flex flex-col items-center justify-center py-5">
        <h2 className="text-4xl">الأحصائيات</h2>
        <div className="py-4 w-full">
          <div className="flex justify-around w-full">
            {[...Array(4)].map((__, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="rounded-full h-24 w-24 bg-white flex flex-col">
                  <div className="text-2xl font-bolder h-24 text-center flex justify-center items-end">3</div>
                  <div className="rounded-b-[100px] bg-main w-full h-full flex  items-center justify-center">
                    <Image src={any_icon_1} alt="" height={40} width={40} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-center">الأيام</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Anylisis;
