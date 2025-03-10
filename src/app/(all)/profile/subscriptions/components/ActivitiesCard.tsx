import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";

interface Props {
  image: StaticImageData | string;
  name: string;
  date: string;
}

const ActivitiesCard = ({ image, name, date }: Props) => {
  const t = useTranslations();
  return (
    <div className="rounded-[12px] overflow-hidden shadow-xl">
      <div className="relative">
        <Link href={"/event-details"} className="block h-[207px] img-fit">
          <Image src={image} alt="event-image" loading="lazy" />
        </Link>
      </div>
      <div className="p-5 ">
        <div>
          <h4 className="text-xl text-main font-bold">{name}</h4>
          <div className="flex items-start gap-2 justify-between">
            <p className="font-bold text-[#B2AFAF] ">{date}</p>

            <button className="h-[28px] rounded-[5px] flex-c px-3 bg-main block font-bold mt-2">
              {t("Access code")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesCard;
