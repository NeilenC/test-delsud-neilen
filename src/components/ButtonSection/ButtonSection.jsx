import React from "react";
import StyledButton from "../../commons/styled-button/StyledButton.jsx";


const ButtonSection = () => {
  return (
    <div className="button-section-container">
      <div className="button-section-flexbox">
        <p className="button-section-text">
          Lorem{" "}
          <span style={{ color: "var(--text-secondary)", fontWeight: 800 }}>
            ipsum dolor sit amet consectetur{" "}
          </span>{" "}
          aliquet imperdiet{" "}
          <span style={{ color: "var(--text-secondary)", fontWeight: 800 }}>
            penatibus donec velit.
          </span>
        </p>
        <StyledButton>Esto es un botón</StyledButton>
      </div>
    </div>
  );
};

export default ButtonSection;
