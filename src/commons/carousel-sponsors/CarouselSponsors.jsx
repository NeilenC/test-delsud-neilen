"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { sponsors } from "../../../utils/testArrays";

const CarouselSponsors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
              <Image
                src={sponsor.img}
                alt={sponsor.alt}
                width={145} 
                height={23} 
                priority={index < sponsors.length} 
                quality={80} 
              />
            </div>  
          ))}
        </div>
      ) : (
        <div className="carousel-content">
          <div className="carousel-arrow left" onClick={prevSponsor}>
            <Image
              src="/carousel/arrow-back.WebP"
              alt="prev"
              width={24}
              height={24}
              priority
            />
          </div>

          <div className="carousel-sponsors-content">
            <Image
              src={sponsors[currentIndex].img}
              alt={sponsors[currentIndex].alt}
              width={145}
              height={23}
              quality={80}
            />
          </div>

          <div className="carousel-arrow right" onClick={nextSponsor}>
            <Image
              src="/carousel/arrow.WebP"
              alt="next"
              width={24}
              height={24}
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CarouselSponsors;
