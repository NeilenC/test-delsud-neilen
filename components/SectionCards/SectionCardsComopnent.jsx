import React from "react";
import CardsComponent from "../../commons/cards-component/CardsComponent";
import SectionTitle from "../../commons/section-title/SectionTitle";

const SectionCardsComopnent = () => {
  return (
    <div className="section-cards-container">
      <p className="section-cards-text">
        {/* <TextColorStyled color={'var(--text-secondary)'} >Lorem ipsum dolor sit amet consectetur</TextColorStyled> */}
        <span style={{ color: "var(--text-secondary)", fontWeight: 800 }}>
          {" "}
          Lorem ipsum dolor sit amet consectetur{" "}
        </span>
        aliquet imperdiet{" "}
        <span style={{ color: "var(--text-color)", fontWeight: 800 }}>
          {" "}
          penatibus donec velit{" "}
        </span>
        . A faucibus eget et vulputate dapibus congue enim massa.. Sem semper
        odio volutpat
        <span style={{ color: "var(--text-secondary)", fontWeight: 800 }}>
          {" "}
          risus platea nulla diam id dis..
        </span>
      </p>

      <img
        className="section-cards-icon"
        src="/dna-vector.png"
        alt="dna-vector"
      />

      <SectionTitle title={"Esto titula una sección"} wordIndex={2} />

      <CardsComponent />
    </div>
  );
};

export default SectionCardsComopnent;
