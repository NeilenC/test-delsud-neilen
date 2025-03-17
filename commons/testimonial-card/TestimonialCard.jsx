import React from "react";
import { testimonials } from "../../utils/testArrays";
import "./testimonialCard.css";

const TestimonialCard = () => {
  return (
    <div className="testimonial-card-container">
      {testimonials?.map((testimonial, index) => {
        return (
          <div className="testimonial-card-content" key={index}>
            <img src={testimonial.img} alt={index}/>
            <p className="testimonial-card-name">{testimonial.name}</p>
            <p className="testimonial-card-company">{testimonial.company}</p>
            <p className="testimonial-text">{testimonial.testimonial}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TestimonialCard;
