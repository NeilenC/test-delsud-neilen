import React from "react";
import "./iconButton.css";

const IconButton = ({
  icon,
  type = "filled",
  color = "#6200ea",
  onClick,
  size = 48,
  iconW,
  iconH,
}) => {
  return (
    <button
      onClick={onClick}
      className={`icon-button ${type}`}
      style={{
        backgroundColor: type === "filled" ? color : "transparent",
        border: type === "outlined" ? `2px solid ${color}` : "none",
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <img
        src={icon}
        alt="icon"
        className="icon-img"
        style={{ width: `${iconW}px`, height: `${iconH}px` }}
      />
    </button>
  );
};

export default IconButton;
