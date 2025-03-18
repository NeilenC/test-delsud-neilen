import React from "react";
import "./homeStyles.css";

const HomeComponent = () => {
  return (
    <div className="home-container">
        <p className="home-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit{" "}
          <span className="home-text-secondary">
            interdum, ac aliquet odio mattis.
          </span>
        </p>
    </div>
  );
};

export default HomeComponent;
