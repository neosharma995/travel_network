
import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
function Slider({ response }) {
  const [currentSlide, setCurrentSlide] = useState(0);

 
  const nextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % response?.packages_galleries.length);
  };

   
  const prevSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex - 1 + response?.packages_galleries.length) % response?.packages_galleries.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);  

    return () => clearInterval(slideInterval);  
  }, [response?.packages_galleries.length]);

  

  return (
    <>
        <div className="container Slider_outer_wrapper">
          <div className="package_slug_wrapper">
            
            <div className="top_section">
              <div className="top_left_section">
              <h3>{response?.package_title}</h3>
              <p dangerouslySetInnerHTML={{__html:response?.package_description}}></p>

              </div>
              <div className="top_right_section">
                  <h3>{response?.package_days}</h3>
                  <p>Days</p>
              </div>
            </div>

            <div className="package_gallery">
              <img src={response?.packages_galleries[currentSlide]} alt="gallery" />
              <div className="slider_buttons">
                <button onClick={prevSlide} className="slider-button prev-button"> <FaAngleLeft/> </button>
                <button onClick={nextSlide} className="slider-button next-button"> <FaAngleRight/> </button>
              </div>
            </div>
          </div>
          
        </div> 
    </>
  );
}

export default Slider;
