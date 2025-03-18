'use client'
import React from "react";
import SectionTitle from "../../commons/section-title/SectionTitle";
import TestimonialCard from "../../commons/testimonial-card/TestimonialCard";
import "./testimonialsStyles.css";

const TestimonialsComponent = () => {

  
  return (
    <div className="testimonials-container">
      <SectionTitle title={"Sector de testimonios"} wordIndex={3} />
      <TestimonialCard />

    </div>
  );
};

export default TestimonialsComponent;
