import {
  Herosection,
  AboutMedad,
  Events,
  Categories,
  Sponsers,
} from "@/components";
import React from "react";

const HomePage = () => {
  return (
    <section className="home-page">
      <Herosection />
      <AboutMedad />
      <Events />
      <Categories />
      <Sponsers />
    </section>
  );
};

export default HomePage;
