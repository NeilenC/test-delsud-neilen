'use client'

import React, { useEffect, useState } from "react";
import { sponsors } from "../../../utils/testArrays";

const CarouselSponsors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 770);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const nextSponsor = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sponsors.length);
  };

  const prevSponsor = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + sponsors.length) % sponsors.length
    );
  };

  return (
    <div className="carousel-sponsors-container">
      {!isMobile ? (
        <div className="carousel-content">
          {[...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => (
            <div className="carousel-sponsors-content" key={index}>
              <img src={sponsor.img} alt={sponsor.alt} />
            </div>
          ))}
        </div>
        
      ) : (

        <div className="carousel-content">
          <div className="carousel-arrow left" onClick={prevSponsor}>
            <img src="/carousel/arrow-back.png" alt="prev" />
          </div>

          <div className="carousel-sponsors-content">
            <img
              src={sponsors[currentIndex].img}
              alt={sponsors[currentIndex].alt}
            />
          </div>

          <div className="carousel-arrow right" onClick={nextSponsor}>
            <img src="/carousel/arrow.png" alt="next" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CarouselSponsors;
