import React from "react";
import "./logo.css";

const Logo = ({ color = "#000" }) => {
  return (
    <div className="logo-container">
      <div className="logo-icon" style={{ backgroundColor: color }}></div>
      <p className="logo-text" style={{ color }}>logo empresa</p>
    </div>
  );
};

export default Logo;
