import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";

interface Props {
  type: string;
  image: StaticImageData | string;
  name: string;
  date: string;
  status?: boolean;
}

const EventCard = ({ type, image, name, date, status }: Props) => {
  const t = useTranslations();
  return (
    <div className="rounded-[12px] overflow-hidden shadow-xl">
      <div className="relative">
        <Link href={"/event-details"} className="block h-[207px] img-fit">
          <Image src={image} alt="event-image" loading="lazy" />
        </Link>
        <div className="absolute top-4 start-4 bg-main py-1 px-4 rounded-[60px] font-bold">
          {type}
        </div>
        <button className="block absolute top-4 end-4 w-[50px] h-[46px] rounded-[8px] bg-[#F0F0F0] flex-c text-2xl text-main">
          <CiHeart />
        </button>
      </div>
      <div className="p-5 ">
        <div>
          <h4 className="text-xl text-main font-bold">{name}</h4>
          <div className="flex items-start gap-2 justify-between">
            <p className="font-bold text-[#B2AFAF] ">{date}</p>
            {status ? (
              <button className="h-[28px] rounded-[5px] flex-c px-3 bg-main block font-bold mt-2">
                {t("Register now")}
              </button>
            ) : (
              <button className="h-[28px] rounded-[5px] flex-c px-3 bg-[#B2AFAF] block font-bold mt-2">
                {t("Finished")}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
