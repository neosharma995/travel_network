 

'use client'
import { AllPackages } from '@/context/contextProviders';
import Link from 'next/link';
import React, { useContext } from 'react';

const PopularDestinations = () => {
  
  let {destinations}=useContext(AllPackages)

  return (
    <div className="container popular-destinations">
     <h2>Popular Destinations</h2>
     <p>Vacations to make your experience enjoyable in India!</p>
      <div className="destinations-grid">
      {destinations.slice(0,5).map((destination, index) => (
          <div className="destination" key={index}>
            <Link href={`/destinations/${destination?.slug}`}>
            <img src={destination?.destination_image||'no image found'} alt={destination.alt} />
            <h3>{destination.name}</h3>
            </Link>
          </div>
        ))}
      </div>    
    </div>

    
  );
  
};

export default PopularDestinations;
