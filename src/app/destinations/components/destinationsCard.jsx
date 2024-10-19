import Link from 'next/link';
import React from 'react';

function DestinationsCard({ destinations }) {
  
    
    const handleClick = (name,image, index) => {
        localStorage.removeItem('destinationImage');
        localStorage.setItem('destinationImage', JSON.stringify({ name,image, index }));
    };

  

    return (
        <>
            <div className="container destination_page_outer">
                <div className="destination_page_inner">
                    <div className="destination_page_wrapper">
                        <div className="destinations-grid">
                            {destinations?.map((destination, index) => (
                                <div className="destination" key={index}>
                                    <Link href={`/destinations/${destination?.slug}`} onClick={() => handleClick(destination.name,destination?.destination_image, index)}>
                                      
                                        
                                            <img
                                                src={destination?.destination_image || 'no image found'}
                                                alt={destination.alt}
                                            />
                                            <h3>{destination.name}</h3>
                                         
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DestinationsCard;
