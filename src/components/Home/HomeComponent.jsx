import React from "react";
import NavbarComponent from "../Navbar/NavbarComponent";

const HomeComponent = () => {
  return (
    <div className="home-container">
      <NavbarComponent />

      {/* Texto adicional */}
      <div className="home-text-container">
        <p className="home-text">
          Innovamos combinando IA y genética  para {" "}
          <span className="home-text-secondary">
           cultivos más sostenibles y productivos.
          </span>
        </p>
      </div>


      
      {/* Texto figma  */}
      {/* <div className="home-text-container">
        <p className="home-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit{" "}
          <span className="home-text-secondary">
            interdum, ac aliquet odio mattis.
          </span>
        </p>
      </div> */}
    </div>
  );
};

export default HomeComponent;
