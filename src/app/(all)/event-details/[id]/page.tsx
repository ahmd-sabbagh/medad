"use client";
import { event_mask_1 } from "@/assets";
import {
    AccompanyingExhibition,
    EventDetailsHerosection,
    EventDetailss,
    OtherActivities,
    PrizeEvents,
    Speakers,
    Sponsers,
} from "@/components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import HijriDate, { toHijri } from 'hijri-date/lib/safe';
import { useParams } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import "../style.css"
import Schedule from "@/components/Schedule/Schedule";
import Anylisis from "@/components/Anylisis/Anylisis";

const EventDetails = () => {

    const t = useTranslations();
    const locale = useLocale();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const params = useParams();

    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/event/${params.id}`, {
                headers: {
                    "Accept-Language": locale,
                },
            })
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
                setLoading(false);
            });
    }, [locale]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-2xl font-semibold text-gray-500">{t("Loading")}</p>
            </div>
        );
    }

    const event = data?.data;

    const nowGreg = new Date(event?.date);
    const nowHijri = toHijri(nowGreg);
    const hijriDay = nowHijri.getDate();
    const hijriMonth = nowHijri.getMonth();
    const hijriYear = nowHijri.getFullYear();

    const hijriMonths = [
        "محرم", "صفر", "ربيع الأول", "ربيع الآخر", "جمادى الأولى", "جمادى الآخرة",
        "رجب", "شعبان", "رمضان", "شوال", "ذو القعدة", "ذو الحجة"
    ];

    const formattedHijriDate = `${hijriDay} ${hijriMonths[hijriMonth]} ${hijriYear}`;

    return (
        <section>
            <EventDetailsHerosection title={event?.title} baseDate={event?.date} date={formattedHijriDate} location={event?.location} />
            <div className="bg-images-event">
                <div className="grid grid-cols-2 gap-4">
                    <Image className="img_1" src={event_mask_1} alt="" />
                    <div className=""></div>
                    <div className=""></div>
                    <Image className="img_2" src={event_mask_1} alt="" />
                </div>
            </div>
            <EventDetailss
                title={event?.title}
                introduction={event?.introduction}
                description={event?.description}
                target={event?.target}
                location={event?.location}
                date={formattedHijriDate}
                time={event?.time}
                axes={event?.axes}
                topics={event?.topics}
            />
            <Speakers lang={locale} event_id={params.id} />
            <AccompanyingExhibition />
            <PrizeEvents lang={locale} event_id={params.id} />
            <Schedule schedules={event.schedules} />
            <Sponsers />
            <Anylisis />
            <OtherActivities lang={locale} event_id={params.id} />
        </section>
    );
};

export default EventDetails;
