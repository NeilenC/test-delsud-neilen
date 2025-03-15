import React from "react";
import TextColorStyled from "../../commons/TextColorStyled";
import "./sectionCardsStyles.css";

const SectionCardsComopnent = () => {
  return (
    <div className="section-cards-container">
      <p className="section-cards-text">
        {/* <TextColorStyled color={'var(--text-secondary)'} >Lorem ipsum dolor sit amet consectetur</TextColorStyled> */}
        <span style={{ color: "var(--text-secondary", fontWeight: 800 }}>
          {" "}
          Lorem ipsum dolor sit amet consectetur{" "}
        </span>
        aliquet imperdiet{" "}
        <span style={{ color: "var(--text-color", fontWeight: 800 }}>
          {" "}
          penatibus donec velit{" "}
        </span>
        . A faucibus eget et vulputate dapibus congue enim massa.. Sem semper
        odio volutpat
        <span style={{ color: "var(--text-secondary", fontWeight: 800 }}>
          {" "}
          risus platea nulla diam id dis..
        </span>
      </p>

      <img className="section-cards-icon" src="/dna-vector.png" alt="dna-vector"/>

      <p className="section-cards-title">
        Esto{" "}
        <span style={{ color: "var(--text-secondary", fontWeight: 800 }}>
          {" "}
          titula{" "}
        </span>{" "}
        una sección{" "}
      </p>
    </div>
  );
};

export default SectionCardsComopnent;
