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
    <section>
      <Herosection />
      <AboutMedad />
      <Events />
      <Categories />
      <Sponsers />
    </section>
  );
};

export default HomePage;
