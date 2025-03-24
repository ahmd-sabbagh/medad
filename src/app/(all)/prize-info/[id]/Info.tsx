import React from "react";
import { useTranslations, useLocale } from "next-intl";
import "../style.css"

import { GoDotFill } from "react-icons/go";

const Info = () => {
  const t = useTranslations(); const locale = useLocale();

  return (
    <section className="py-[28px] app-form max-w-[90%] max-h-[90%]">
      <div className="container">
        <div className="md:max-w-[80%] mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-[#170F49]">
            {t("Prize information")}
          </h3>
          <div className="mt-6 rounded-xl border border-[#EFF0F6] p-4 md:p-6 flex flex-col gap-6 md:gap-10 shadow-xl">
            <div>
              <div className="text-xl font-bold">{`1-${t("Terms")}`}</div>
              <p className=" text-[#0C0C0CE5] mt-2">
                {
                  "لا نشارك بياناتك مع أي جهة خارجية إلا بموافقتك، أو عند التعامل مع شركاء موثوقين لتحسين الخدمات، أو إذا كان ذلك مطلوبًا قانونيًا."
                }
              </p>
            </div>
            <div>
              <div className="text-xl font-bold">{`2-${t(
                "Winning tips"
              )}`}</div>
              <p className=" text-[#0C0C0CE5] mt-2">
                {
                  "لا نشارك بياناتك مع أي جهة خارجية إلا بموافقتك، أو عند التعامل مع شركاء موثوقين لتحسين الخدمات، أو إذا كان ذلك مطلوبًا قانونيًا."
                }
              </p>
            </div>
            <div>
              <div className="text-xl font-bold">{`2-${t(
                "Evaluation points"
              )}`}</div>
              <div className="mt-2">
                <div className="flex items-center gap-2">
                  <span className="flex-c">
                    <GoDotFill />
                  </span>
                  <p className=" text-[#0C0C0CE5] mt-2">
                    {"الخدمات، أو إذا كان ذلك مطلوبًا قانونيًا."}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex-c">
                    <GoDotFill />
                  </span>
                  <p className=" text-[#0C0C0CE5] mt-2">
                    {"الخدمات، أو إذا كان ذلك مطلوبًا قانونيًا."}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex-c">
                    <GoDotFill />
                  </span>
                  <p className=" text-[#0C0C0CE5] mt-2">
                    {"الخدمات، أو إذا كان ذلك مطلوبًا قانونيًا."}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex-c">
                    <GoDotFill />
                  </span>
                  <p className=" text-[#0C0C0CE5] mt-2">
                    {"الخدمات، أو إذا كان ذلك مطلوبًا قانونيًا."}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="text-xl font-bold">{`2-${t("Who can win")}`}</div>
              <p className=" text-[#0C0C0CE5] mt-2">{"جميع المحاضرين"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
