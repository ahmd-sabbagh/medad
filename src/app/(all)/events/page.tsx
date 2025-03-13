import React from "react";
import Header from "./Header";
import "./style.css"
import LatestEventsCard from "./LatestEventsCard";
import EvevtsYear from "./EvevtsYear";

const EventsPage = () => {
  return (
    <section>
      <Header />
      <LatestEventsCard />
      <EvevtsYear />
    </section>
  );
};

export default EventsPage;
