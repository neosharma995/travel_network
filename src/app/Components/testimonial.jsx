'use client';
import { AllPackages } from '@/context/contextProviders';
import { useState, useEffect, useContext } from 'react';

const TestimonialsSection = () => {
  let {testimonials}=useContext(AllPackages)
 
  const result = testimonials.map((e)=>e?.acf)
 
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsToShow = 2;  

  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + cardsToShow) % result.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - cardsToShow + result.length) % result.length
    );
  };

  // Function to go to a specific slide based on dot click
  const goToSlide = (index) => {
    setCurrentIndex(index * cardsToShow);
  };

  useEffect(() => {
    if (result.length > 0) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [result]);

  // Determine how many cards to show based on screen size
  const getCardsToShow = () => {
    return window.innerWidth >= 1024 ? 2 : 1;
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setCurrentIndex(0); // Reset to the first slide on resize
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

   
  return (
    <section className="container testimonials-section">
      <h2>What Our Users Say</h2>
      <p>Vacations to make your experience enjoyable in India!</p>
      <div className="testimonialslider">
        <div className="testimonial-cards-section">
          {result.length > 0 ? (
            <>
              {/* Render first card */}
              <div className="testimonial-card" key={currentIndex}>
                <img
                  src={result[currentIndex]?.testimonial_image || ''}
                  alt={result[currentIndex]?.testimonials_designation || ''}
                />
                <h3>{result[currentIndex]?.testimonial_name || ''}</h3>
                <p>{result[currentIndex]?.testimonial_description || ''}</p>
                <div className="stars">
                  {Array(result[currentIndex]?.rating || 0)
                    .fill()
                    .map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                </div>
              </div>
              {/* Render second card only on desktop */}
              {getCardsToShow() === 2 && (
                <div className="testimonial-card" key={currentIndex + 1}>
                  <img
                    src={result[(currentIndex + 1) % result.length]?.testimonial_image || ''}
                    alt={result[(currentIndex + 1) % result.length]?.testimonials_designation || ''}
                  />
                  <h3>{result[(currentIndex + 1) % result.length]?.testimonial_name || ''}</h3>
                  <p>{result[(currentIndex + 1) % result.length]?.testimonial_description || ''}</p>
                  <div className="stars">
                    {Array(result[(currentIndex + 1) % result.length]?.rating || 0)
                      .fill()
                      .map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <p>No testimonials available.</p>
          )}
        </div>
      </div>
      <div className="dots-container">
        {Array(Math.ceil(testimonials.length / cardsToShow))
          .fill()
          .map((_, index) => (
            <span
              key={index}
              className={`dot ${index * cardsToShow === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
