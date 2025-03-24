import { useTranslations } from "next-intl";
import React from "react";
import { IoClose } from "react-icons/io5";
import {  exhibition } from "@/assets";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";

interface PrizeInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  gift: any;
}

const PrizeInfoModal = ({ isOpen, onClose, gift }: PrizeInfoModalProps) => {
  const t = useTranslations();

  if (!isOpen) return null;

  const isRTL = t("locale") === "ar";

  return (
    <div className="fixed inset-0 z-500000 flex items-center justify-center bg-[00000088]">
      <div
        className={`bg-white rounded-xl w-[90%] md:w-[80%] max-h-[90vh] overflow-y-auto ${
          isRTL ? "rtl" : ""
        }`}
      >
        <div className="sticky top-0 bg-white p-4 flex justify-between items-center border-b">
          <h3 className="text-xl md:text-2xl font-bold text-[#170F49]">
            {t("Prize information")}
          </h3>
          <button onClick={onClose} className="text-2xl">
            <IoClose />
          </button>
        </div>
        <div className="container">
          <div className="bg-[#e2ae6321] pt-20">
            <div className="container">
              <div className=" lg:w-[60%] mx-auto  overflow-hidden ">
                <Image src={exhibition} alt="header-image" loading="lazy" />
              </div>
            </div>
          </div>
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
      </div>
    </div>
  );
};

export default PrizeInfoModal; 