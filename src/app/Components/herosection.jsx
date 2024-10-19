'use client'
import React, { useState, useEffect } from 'react';
import BookingForm from './bookingForm';

const Slider = ({ result }) => {
  let [isOpen,setIsOpen]=useState(false)
  const slider = result[0]?.acf?.top_banner_gallery || [];
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slider.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slider.length) % slider.length);
  };
  useEffect(() => {

    if (slider.length > 0) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [slider]);

  const setFromHandler=()=>{
    setIsOpen(true)    
  }

  return (
    <>
    {isOpen&&<BookingForm setIsOpen={setIsOpen}/>}
    <div className="slider">
      {slider.length > 0 ? (
        slider.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.banner_image})` }}
          >
            <div className="overlay"></div>
            <div className="container hero-section-txt">
              <h2>{slide.banner_heading}</h2>
              <p>{slide.heading_paragraph}</p>
              
                <button onClick={setFromHandler}>Book Now</button>
               
            </div>
          </div>
        ))
      ) : (
        <p>No slides available</p>
      )}
      {/* <button className="prev" onClick={prevSlide}>❮</button>
      <button className="next" onClick={nextSlide}>❯</button> */}
    </div>
    </>
  );
};

export default Slider;
