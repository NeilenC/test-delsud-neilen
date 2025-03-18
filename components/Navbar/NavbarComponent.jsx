import { useState, useEffect } from "react";
import Logo from "../../commons/logo/Logo";
import NavbarItems from "./NavbarItems/NavbarItems";
import LanguagesOptions from "./LanguagesOptions/LanguagesOptions";
import "./navbarStyles.css";

const NavbarComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 840);
    };

    checkScreenSize(); 
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="navbar-container">
      <Logo color="var(--text-secondary)" />

      {isMobile ? (

        <img
          src="/menu-icon.png"
          alt="Menú"
          className="menu-icon"
          />
      ) : (
        <>
          <NavbarItems />
          <LanguagesOptions />
        </>
      )}
    </div>
  );
};

export default NavbarComponent;
