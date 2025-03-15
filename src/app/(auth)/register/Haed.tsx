import { useTranslations } from "next-intl";
import React from "react";

interface HaedProps {
  step: number;
  setStep: (step: number) => void;
}

const Haed: React.FC<HaedProps> = ({ step, setStep }) => {
  const t = useTranslations();
  return (
    <div>
      <h3 className="text-xl md:text-[28px] font-bold">{t("Create a new account")}</h3>
      <p className="md:text-xl">{t("Choose the account type and then enter the required information")}</p>
      <div className="flex items-center max-w-[90%] mx-auto mt-4">
        <div className="w-full h-[2px] bg-gray-300"></div>
        <p className="tex-sm md:text-base  px-2 min-w-fit">
          <div className="flex gap-4 mx-6 my-2">
            <span onClick={()=>{setStep(1)}} className={`inline-block w-4 h-4 ${step == 1 ?"bg-main" :"bg-[#e2ae63aa]"} rounded-full`}></span>
            <span  onClick={()=>{setStep(2)}} className={`inline-block w-4 h-4 ${step == 2 ?"bg-main" :"bg-[#e2ae63aa]"} rounded-full`}></span>
          </div>
        </p>
        <div className="w-full h-[2px] bg-gray-300"></div>
      </div>
    </div>
  );
};

export default Haed;
