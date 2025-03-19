import { useTranslations } from "next-intl";
import React from "react";
import { GoDotFill } from "react-icons/go";

const Info = ({ gift }) => {
  const t = useTranslations();

  console.log(gift)
  return (
    <section className="py-[28px] app-form">
      <div className="container">
        <div className="md:max-w-[80%] mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-[#170F49]">
            {t("Prize information")}
          </h3>
          <div className="mt-6 rounded-xl border border-[#EFF0F6] p-4 md:p-6 flex flex-col gap-6 md:gap-10 shadow-xl">
            <div>
              <div className="text-xl font-bold">{`1-${t("Terms")}`}</div>
              <p className=" text-[#0C0C0CE5] mt-2">
                {gift.condition}
              </p>
            </div>
            <div>
              <div className="text-xl font-bold">{`2-${t(
                "Winning tips"
              )}`}</div>
              <p className=" text-[#0C0C0CE5] mt-2">
                {gift.winning_instructions}
              </p>
            </div>
            <div>
              <div className="text-xl font-bold">{`3-${t(
                "Evaluation points"
              )}`}</div>
              <div className="mt-2">
                <div className="flex items-center gap-2">
                  {gift.evaluation_points}
                </div>
              </div>
            </div>
            <div>
              <div className="text-xl font-bold">{`4-${t("Who can win")}`}</div>
              <p className=" text-[#0C0C0CE5] mt-2">{gift.how_is_winner}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
