import React from 'react';
import empty from '../img/slider_empty.png';

function TopBanner({ result }) {
  

  return (
    <>
      <div className="section_outer container-two">
        <div className="section_inner">
          <div className="section_wrapper">
            <h1>{result?.section_top_banner_heading || 'destinations'}</h1>
            <img 
              src={result?.section_top_banner_image || empty.src} 
              alt="section_image" 
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
