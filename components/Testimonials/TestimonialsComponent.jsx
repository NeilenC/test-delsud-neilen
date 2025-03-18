'use client'
import React from "react";
import SectionTitle from "../../commons/section-title/SectionTitle";
import TestimonialCard from "../../commons/testimonial-card/TestimonialCard";
import IconButton from "../../commons/styled-icon-button/IconButton";
import "./testimonialsStyles.css";

const TestimonialsComponent = () => {

  
  return (
    <div className="testimonials-container">
      <SectionTitle title={"Sector de testimonios"} wordIndex={3} />
      <TestimonialCard />

      {/* <div className="testimonials-component-buttons">
        <IconButton
          icon={"/arrow-back.png"}
          iconH={14}
          iconW={12}
          onClick={() => {}}
          type="filled"
          color="var(--background-buttons)"
        />
        <IconButton
          icon={"/arrow.png"}
          iconH={14}
          iconW={12}
          onClick={() => {}}
          type="filled"
          color="var(--background-buttons)"
        />
      </div> */}
    </div>
  );
};

export default TestimonialsComponent;
