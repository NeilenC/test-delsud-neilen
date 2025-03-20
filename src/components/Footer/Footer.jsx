import React from "react";
import Logo from "../../commons/logo/Logo";
import IconButton from "../../commons/styled-icon-button/IconButton";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <Logo color="var(--text-footer)" />
        </div>

        <div className="footer-menu-items">
          <h3>Menu</h3>
          <p> Item 1</p>
          <p>Item 2</p>
          <p>Item 3</p>
        </div>

        <div className="footer-menu-contact">
          <h3>Contacto</h3>
          <p>@ correo@empresa.com</p>
          <div className="icons-container">
            <IconButton icon={"/footer/instagram-icon.jpg"} type="outlined" />
            <IconButton icon={"/footer/linkedin-icon.jpg"} type="outlined" />
            <IconButton icon={"/footer/x-icon.jpg"} type="outlined" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
