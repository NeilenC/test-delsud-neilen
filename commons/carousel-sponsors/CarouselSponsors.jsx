import React from "react";
import { sponsors } from "../../utils/testArrays";
import "./carouselStyles.css";

const CarouselSponsors = () => {
  return (
    <div className="carousel-sponsors-container">
      <div className="carousel-content">
        {[...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => (
          <div className="carousel-sponsors-content" key={index}>
            <img src={sponsor.img} alt={sponsor.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselSponsors;