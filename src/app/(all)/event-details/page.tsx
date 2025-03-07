import {
  AccompanyingExhibition,
  EventDetailsHerosection,
  EventDetailss,
  OtherActivities,
  PrizeEvents,
  Speakers,
  Sponsers,
} from "@/components";
import React from "react";

const EventDetails = () => {
  return (
    <section>
      <EventDetailsHerosection />
      <EventDetailss />
      <Speakers />
      <AccompanyingExhibition />
      <PrizeEvents />
      <Sponsers />
      <OtherActivities />
    </section>
  );
};

export default EventDetails;
