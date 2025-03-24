"use client"

import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";
import Form from "@/app/(all)/submit-application-event/Form";

interface Props {
  id: number;
  tags: string[];
  image: string[];
  title: string;
  date: string;
  has_favorite?: boolean;
}


const EventCard = ({ id, tags, image, title, date, has_favorite }: Props) => {
  const t = useTranslations();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <div className="rounded-[12px] overflow-hidden shadow-xl">
        <div className="relative">
          <Link href={`/event-details/${id}`} className="block h-[207px] img-fit">
            <img width={300} height={200} src={image} alt="event-image" loading="lazy" />
          </Link>
          <div className="absolute top-4 start-4 bg-main py-1 px-4 rounded-[60px] font-bold">
            {tags?.[0] ?? null}
          </div>
          <button className="block absolute top-2 end-2 w-[40px] h-[36px] rounded-[8px] bg-[#F0F0F0] flex-c text-2xl text-main">
            <CiHeart />
          </button>
        </div>
        <div className="py-2 px-3 ">
          <div>
            <h4 className="text-xl text-main font-bold">{title}</h4>
            <div className="flex items-start gap-2 justify-between">
              <p className="font-bold text-[#B2AFAF] ">{date}</p>
              {!has_favorite ? (
                <button 
                  onClick={() => setIsDrawerOpen(true)} 
                  className="h-[28px] rounded-[5px] flex-c px-3 bg-main block font-bold mt-2"
                >
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

      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-[#00000088] z-50" 
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsDrawerOpen(false);
            }
          }}
        >
          <div className="fixed right-0 top-0 h-full w-[90%] md:w-[600px] bg-white overflow-y-auto">
            <button 
              onClick={() => setIsDrawerOpen(false)}
              className="absolute top-4 right-4 text-2xl p-2"
            >
              ×
            </button>
            <Form onClose={() => setIsDrawerOpen(false)} eventId={id} />
          </div>
        </div>
      )}
    </>
  );
};

export default EventCard;
