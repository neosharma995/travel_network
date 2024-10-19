import React from 'react';
import packagesbg from '../../../public/images/background.png';
const data = {
  aboutus: {
    title: "About Us",
    description: "Vacations to make your experience enjoyable in India!",
  }
}
const AboutSection = ({result}) => {
  let aboutSection=result[0]?.acf 
  return (
    <div className='aboutus-bg'  style={{ backgroundImage: `url(${packagesbg.src})` }}>
      <section className="container about-section">
      <h2>{aboutSection?.about_section_heading}</h2>
        <div className="about-container">
          <div className="about-images">
            <img src="/images/about-images.png" alt="Travel Image 1" />
          </div>
          <div className="about-content">
          <h2>{aboutSection?.about_section_sub_heading}</h2>
          <h3>{aboutSection?.about_us_right_section_heading}</h3>
          <p dangerouslySetInnerHTML={{__html:aboutSection?.about_us_right_section_paragraph}}></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
