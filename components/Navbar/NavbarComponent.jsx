import React from "react";
import LanguagesOptions from "./LanguagesOptions/LanguagesOptions";
import Logo from "../../commons/Logo/Logo";
import "./navbarStyles.css";
import NavbarItems from "./NavbarItems/NavbarItems";

const NavbarComponent = () => {
  return (
    <div className="navbar-container">
      <Logo color="var(--text-secondary)" />

      <NavbarItems />

      <LanguagesOptions />
    </div>
  );
};

export default NavbarComponent;
