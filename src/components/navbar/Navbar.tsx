import React from "react";
import NavBarLinks from "./NavBarLinks";
import NavbarClone from "./NavbarClone";
import { getLocale } from "next-intl/server";

const Navbar = async () => {
  const locale = await getLocale();

  return (
    <section
      className="py-3 bg-white"
    >
      <NavbarClone locale={locale} />
    </section>
  );
};

export default Navbar;
