import React from "react";
 import "./JsPractice.css"
const JsPractice = () => {
  const testimonials = [
    {
      id: 1,
      name: "abhishek kunwar",
      role: "Billionaire",
      content: "hi i am a billionaire!",
      rating: 5,
    },
    {
      id: 2,
      name: "Radha vallabh",
      role: "parmatma",
      content: "i am god",
      rating: 5,
    },
  ];

  return (
    <div className="testimonial-container">
      {testimonials.map((testimonial) => (
        <div className="testimonial-card" key={testimonial.id}>
          <p className="testimonial-content"> "{testimonial.content}"</p>
          <div className="testimonial-author">
            <h4>{testimonial.name}</h4>
            <p>{testimonial.role}</p>
            <div className="rating">
              {Array(testimonial.rating)
                .fill()
                .map((_, i) => (
                  <span key={i}>* </span>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JsPractice;
