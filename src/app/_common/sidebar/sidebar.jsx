'use client'
import { AllPackages } from '@/context/contextProviders'
import Link from 'next/link'
import React, { useContext } from 'react'

function Sidebar() {
    let { destinations } = useContext(AllPackages)
    
  return (
    <div className="destination_section">

    <h2><a href="/destinations"> popular destinations </a> </h2>

    {destinations.slice(0, 3).map((destination, index) => (
      <div className="destination_wrapper" key={index}>
        <Link href={`/destinations/${destination?.slug}`}>
          <img src={destination?.destination_image || 'no image found'} alt={destination.alt} />
          <h3>{destination.name}</h3>
        </Link>
      </div>
    ))}

  </div>
  )
}

export default Sidebar