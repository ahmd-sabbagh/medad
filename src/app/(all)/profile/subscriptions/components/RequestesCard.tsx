import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";

interface Props {
  status: string;
  name: string;
  date: string;
}

const RequestesCard = ({ status, name, date }: Props) => {
  const t = useTranslations();

  const calsNameStatus =
    status == "Modified"
      ? "bg-[#FFE40033] color-[#AF9C00]"
      : status == "acceptable"
      ? "bg-[#0DC14333] color-[#0DC143]"
      : "bg-[#FF707033] color-[#FF7070]";
  return (
    <div className="rounded-[12px] overflow-hidden" style={{boxShadow:"0 0 20px #0000000a"}}>
      <div className="p-5">
        <div className={`${calsNameStatus} px-6 py-3 rounded-lg w-fit`}>
          {status == "Modified"
            ? t("Modified")
            : status == "acceptable"
            ? t("acceptable")
            : t("unacceptable")}
        </div>
      </div>
      <div className="p-5 ">
        <div>
          <h4 className="text-xl text-main font-bold">{name}</h4>
          <div className="flex items-start gap-2 justify-between">
            <p className="font-bold text-[#B2AFAF] ">{date}</p>

            <button className="h-[28px] rounded-[5px] flex-c px-3 bg-main block font-bold mt-2">
              {t("edit")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestesCard;
