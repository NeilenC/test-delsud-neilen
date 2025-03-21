import React from "react";

const LanguagesOptions = ({ languages }) => {
  return (
    <div className="languages-container">
      {languages.map((lang, index) => (
        <p key={index}>{lang}</p>
      ))}
    </div>
  );
};

export default LanguagesOptions;
