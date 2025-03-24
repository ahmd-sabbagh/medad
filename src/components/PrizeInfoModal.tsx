import { useTranslations } from "next-intl";
import React from "react";
import { IoClose } from "react-icons/io5";

interface PrizeInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  gift: any;
}

const PrizeInfoModal = ({ isOpen, onClose, gift }: PrizeInfoModalProps) => {
  const t = useTranslations();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl w-[90%] md:w-[80%] max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 flex justify-between items-center border-b">
          <h3 className="text-xl md:text-2xl font-bold text-[#170F49]">
            {t("Prize information")}
          </h3>
          <button onClick={onClose} className="text-2xl">
            <IoClose />
          </button>
        </div>
        
        <div className="p-4 md:p-6">
          <div className="flex flex-col gap-6 md:gap-10">
            <div>
              <div className="text-xl font-bold">{`1-${t("Terms")}`}</div>
              <p className="text-[#0C0C0CE5] mt-2">{gift.condition}</p>
            </div>
            <div>
              <div className="text-xl font-bold">{`2-${t("Winning tips")}`}</div>
              <p className="text-[#0C0C0CE5] mt-2">{gift.winning_instructions}</p>
            </div>
            <div>
              <div className="text-xl font-bold">{`3-${t("Evaluation points")}`}</div>
              <div className="mt-2">
                <div className="flex items-center gap-2">{gift.evaluation_points}</div>
              </div>
            </div>
            <div>
              <div className="text-xl font-bold">{`4-${t("Who can win")}`}</div>
              <p className="text-[#0C0C0CE5] mt-2">{gift.how_is_winner}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrizeInfoModal; 