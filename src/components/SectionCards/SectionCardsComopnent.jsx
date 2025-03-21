import React from "react";
import CardsComponent from "../../commons/cards-component/CardsComponent";
import SectionTitle from "../../commons/section-title/SectionTitle";

const SectionCardsComopnent = () => {
  return (
    <div className="section-cards-container">

<p className="section-cards-text">
        <span style={{ color: "var(--text-secondary)", fontWeight: 800 }}>
          {" "}
          La combinación de genética e inteligencia artificial {" "}
        </span>
        mejora los cultivos, 
        <span style={{ color: "var(--text-color)", fontWeight: 800 }}>
          {" "}
          optimiza recursos,{" "}
        </span>
        reduce el impacto ambiental 
        <span style={{ color: "var(--text-secondary)", fontWeight: 800 }}>
          {" "}
          y promueve una agricultura más eficiente y sostenible.
        </span>
      </p> 

      {/* <p className="section-cards-text">
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
      </p> */}

      <img
        className="section-cards-icon"
        src="/dna-vector.WebP"
        alt="dna-vector"
      />

      <SectionTitle title={"Una respuesta para cada desafío."} wordIndex={2} />

      <CardsComponent />
    </div>
  );
};

export default SectionCardsComopnent;
