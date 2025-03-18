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
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton icon={"/footer/instagram-icon.png"} type="outlined" />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton icon={"/footer/linkedin-icon.png"} type="outlined" />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton icon={"/footer/x-icon.png"} type="outlined" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
