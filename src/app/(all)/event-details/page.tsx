import { EventDetailsHerosection, EventDetailss, OtherActivities, Speakers, Sponsers } from "@/components";
import React from "react";

const EventDetails = () => {
  return (
    <section>
      <EventDetailsHerosection />
      <EventDetailss />
      <Speakers />
      <Sponsers />
      <OtherActivities />
    </section>
  );
};

export default EventDetails;
