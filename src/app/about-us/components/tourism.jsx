import React from 'react';

const TourismInfoSection = ({ result }) => {
    return (
        <section className="tourism-info container">
            <div className="image-grid">
                {result?.about_us_galleries.map((ele,index)=>{
                    return  <img src={ele?.about_gallery_image} alt="about-image" key={index} />
                })}
               
            </div>
            <div className="info-text">
                <h2>{result?.about_info_heading}</h2>
                <p>{result?.about_info_para}</p>
                <div className="infos_wrapper">
                    {result?.about_info_repeater?.map((ele,index)=>{
                        return  <div className="infos" key={index}>
                        <div className="left_infos">
                            <img src={ele?.info_image} alt='infos' />
                        </div>
                        <div className="right_infos">
                            <h4>{ele?.info_heading}</h4>
                            <p>{ele?.info_paragraph}</p>
                        </div>
                    </div>

                    })}
                </div>
            </div>

 
        </section >
    );
};

export default TourismInfoSection;
