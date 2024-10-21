'use client'
import React, { useState } from 'react'
import { FaCheckCircle, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
function Itinerary({ response }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    

    return (
        <>

            <div className="container itinerary_wrapper">
                <h2 className='section_heading'>Overview</h2>
                {/* overview section*/}
                <div className="overview_wrapper">
                    <p dangerouslySetInnerHTML={{ __html: response?.package_overview }}></p>
                </div>

                {/*top highlights section */}
                <div className="top_highlights">
                    <h2 className='section_heading'>Top Highlights</h2>
                    {response?.top_highlights===false?'no result found':response?.top_highlights?.map((e, index) => {

                        return <ul className='highlights' key={index}>
                            <FaCheckCircle /> <li>{e?.trip_details}</li>
                        </ul>
                    })}
                </div>

                {/*itinerary section*/}

                <div className="itinerary_section">
                    <h2 className='section_heading'>Itinerary</h2>
                    {response?.package_itinerary===false?'no result found':response?.package_itinerary?.map((e, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div className="accordian_wrapper" key={index}>
                                <div className="accordian_qst" onClick={() => toggleAccordion(index)}>
                                    <h3>{e?.itinerary_title}</h3>
                                    <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>
                                        {isOpen ? <FaMinusCircle /> : <FaPlusCircle />}
                                    </span>
                                </div>
                                {isOpen && (
                                    <div className="accordian_ans">
                                        <p dangerouslySetInnerHTML={{ __html: e?.itinerary_description }}></p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>


            </div>

        </>
    )
}

export default Itinerary