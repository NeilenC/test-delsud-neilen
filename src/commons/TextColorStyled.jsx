import React from "react";

const TextColorStyled = ({ color, children }) => {
  return <div style={{ color: color, fontWeight: 800 }}>{children}</div>;
};

export default TextColorStyled;
