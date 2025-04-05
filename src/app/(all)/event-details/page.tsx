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
import Image from "next/image";
import React from "react";
import "./style.css"
import Schedule from "@/components/Schedule/Schedule";
import Anylisis from "@/components/Anylisis/Anylisis";
const EventDetails = () => {
  return (
    <section>
      
      {/* <EventDe/tailsHerosection baseDate={} /> */}
      <div className="bg-images-event">
        <div className="grid grid-cols-2 gap-4">
        <Image className="img_1" src={event_mask_1} alt="" />
          <div className=""></div>
          <div className=""></div>
        <Image className="img_2" src={event_mask_1} alt="" />
        </div>
      </div>
      {/* <EventDetailss /> */}
      {/* <Speakers /> */}
      <AccompanyingExhibition />
      {/* <PrizeEvents /> */}
      {/* <Schedule /> */}
      <Sponsers />
      <Anylisis/>
      {/* <OtherActivities /> */}
    </section>
  );
};

export default EventDetails;
