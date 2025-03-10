import React from "react";
import Head from "./Head";
import Profile from "./Profile";

const Header = () => {
  return (
    <section className="h-[251px] lg:h-[447px] bg-[#F3F3F3]">
      <section className="bg-main h-[208px] lg:h-[316px]">
        <div className="container">
          <Head />
        </div>
        <Profile />
      </section>
    </section>
  );
};

export default Header;
