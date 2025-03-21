import React from "react";
import Logo from "../../commons/logo/Logo";
import IconButton from "../../commons/styled-icon-button/IconButton";
import MenuItems  from "../../commons/menu-items/MenuItems";
import { navbarItems } from "../../../utils/testArrays";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <Logo color="var(--text-footer)" />
        </div>

        <div className="footer-menu-title">
          <h3>Menu</h3>
          <MenuItems  items={navbarItems} isFooter={true}/>

        </div>

        <div className="footer-menu-contact">
          <h3>Contacto</h3>
          <p>@ correo@empresa.com</p>
          <div className="icons-container">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton icon={"/footer/instagram-icon.jpg"} type="outlined" />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton icon={"/footer/linkedin-icon.jpg "} type="outlined" />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton icon={"/footer/x-icon.jpg"} type="outlined" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
