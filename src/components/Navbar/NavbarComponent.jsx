import { useState, useEffect } from "react";
import Logo from "../../commons/logo/Logo";
import MenuItems  from "../../commons/menu-items/MenuItems";
import LanguagesOptions from "./LanguagesOptions/LanguagesOptions";
import { languageOptions, navbarItems } from "../../../utils/testArrays";

const NavbarComponent = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


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
      <div className="navbar-items-container">
        <Logo color="var(--text-secondary)" />

        {isMobile ? (
          <>
            <img
              src="/menu-icon.png"
              alt="Menú"
              className="navbar-menu-icon"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            />
            {isMenuOpen && (
              <div className="navbar-mobile-menu">
                <MenuItems  items={navbarItems} />
                <LanguagesOptions languages={languageOptions} />
              </div>
            )}
          </>
        ) : (
          <div className="navbar-items">
            <MenuItems  items={navbarItems} />
            <LanguagesOptions languages={languageOptions} />
          </div>
        )}
      </div>
    </div>
  );
};


export default NavbarComponent;
