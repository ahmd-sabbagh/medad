import React from "react";
import Header from "./Header";
import Goals from "./Goals";
import "./style.css"
import OurVision from "./OurVision";
import MedadNumber from "./MedadNumber";

const AboutPage = () => {
  return (
    <section className="py-10 md:py-20 bg-[#F8F3EC]">
      <Header />
      <Goals />
      <OurVision />
      <MedadNumber />
    </section>
  );
};

export default AboutPage;
