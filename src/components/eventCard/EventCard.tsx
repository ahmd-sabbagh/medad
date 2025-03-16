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
        <div className="absolute top-2 start-2 bg-main py-1 px-2 rounded-[40px] font-bold">
          {type}
        </div>
        <button className="block absolute top-2 end-2 w-[40px] h-[36px] rounded-[8px] bg-[#F0F0F0] flex-c text-2xl text-main">
          <CiHeart />
        </button>
      </div>
      <div className="py-2 px-3 ">
        <div>
          <h4 className="text-xl text-main font-bold">{name}</h4>
          <div className="flex items-start gap-2 justify-between">
            <p className="font-bold text-[#B2AFAF] ">{date}</p>
            {status ? (
              <button className="rounded-[3px] flex-c px-6 bg-main block font-bold mt-2">
                {t("Register now")}
              </button>
            ) : (
              <button className="rounded-[3px] flex-c px-6  bg-[#B2AFAF] block font-bold mt-2">
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
