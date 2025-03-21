import React from "react";

const CardsComponent = () => {
  const cardsContent = [
    {
      image: "/cards/card1.jpeg",
      title: "Sostenibilidad",
    },
    {
      image: "/cards/card2.jpeg",
      title: "Investigación",
    },
    {
      image: "/cards/card3.jpeg",
      title: "Productividad",
    },
  ];
  return (
    <div className="card-component-container">
      {cardsContent &&
        cardsContent.map((content, index) => {
          return (
            <div className="card-container" key={index}>
              <img className="card-image" src={content.image} />
              <p className="card-title">{content.title}</p>
            </div>
          );
        })}
    </div>
  );
};

export default CardsComponent;
