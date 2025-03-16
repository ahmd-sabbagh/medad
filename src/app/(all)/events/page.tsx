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
      <EvevtsYear year={2020}/>
      <EvevtsYear year={2021}/>
      <EvevtsYear year={2023}/>
    </section>
  );
};

export default EventsPage;
