import React from "react";

const CardsComponent = () => {
  const cardsContent = [
    {
      image: "/cards/card1.jpeg",
      title: "Card 1",
    },
    {
      image: "/cards/card2.jpeg",
      title: "Card 2",
    },
    {
      image: "/cards/card3.jpeg",
      title: "Card 3",
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
