import React from "react";
import ParticipatedActivities from "./components/ParticipatedActivities";
import ParticipationRequests from "./components/ParticipationRequests";
import HaveQuestion from "./components/HaveQuestion";

const SubscriptionsPage = () => {
  return (
    <section className=" bg-[#F3F3F3] py-12 md:py-20">
      <ParticipatedActivities />
      <ParticipationRequests />
      <HaveQuestion />
    </section>
  );
};

export default SubscriptionsPage;
